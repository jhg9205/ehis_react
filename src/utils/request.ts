import axios, {AxiosInstance, AxiosRequestHeaders, AxiosResponseHeaders} from 'axios'
import { URL } from '@common/const'

const _url: string = URL.SERVER_URL

const _customAxios: AxiosInstance = axios.create({
	baseURL: _url,
	withCredentials: true,
	headers: { Accept: '*/*' }
	//redirectError
})

/**
 * <PRE>
 * 1. Name : interceptors.request
 * 2. Comment   : 요청 인티셉터 (요청 전에 가로채서 axios 설정을 적용함)
 * 3. Author    : CIK
 * <PRE>
 */
_customAxios.interceptors.request.use(
	config => {
		let headers: AxiosRequestHeaders

		//지오서버요청시 타입변경
		if (config.url?.indexOf('geoserver') !== -1) {
			headers = { ['content-type']: 'application/x-www-form-urlencoded; charset=UTF-8' }
		} else {
			headers = { ['content-type']: 'application/json; charset=UTF-8' }
		}

		console.log('interceptors.request  >>>>>>>>>>>>>>    ' + config)

		//access token 유효성 체크
		let aToken = localStorage.getItem('access_token')
		let rToken = localStorage.getItem('refresh_token')

		if (aToken && rToken) {
			headers.access = aToken
			headers.refresh = rToken
		}
		config.headers = headers
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

/**
 * <PRE>
 * 1. Name : interceptors.response
 * 2. Comment   : 응답 인티셉터 (응답 직전에 호출)
 * 3. Author    : CIK
 * <PRE>
 */
_customAxios.interceptors.response.use(
	res => {
		console.log('interceptors.response  >>>>>>>>>>>>>>    ' + res)
		console.log(res)
		if(res.headers.hasOwnProperty("err")){
			localStorage.setItem('isAuthenticated',res.data.errCode+res.data.errMsg)
			localStorage.removeItem('access_token')
			localStorage.removeItem('refresh_token')
			window.location.href = '/teri'
		}else if(res.headers.hasOwnProperty("access_token")){
			localStorage.setItem('isAuthenticated',"true")
			if(res.headers.hasOwnProperty("access_token")){
				localStorage.setItem('access_token',res.headers.access_token)
			}
			if (res.headers.hasOwnProperty("refresh_token")){
				localStorage.setItem('refresh_token',res.headers.refresh_token)
			}
		}

		return res
	},
	({ config, request, response, ...err }) => {
		const errMsg = 'Error Message'
		return Promise.reject({
			config,
			message: errMsg,
			response,
			...err
		})
	}
)

/**
 * <PRE>
 * 1. Name : callError
 * 2. Comment   : 에러표시로그
 * 3. Author    : CIK
 * <PRE>
 */
const callError = (error: any) => {
	console.log(error)
	throw new Error(error)
}

/**
 * <PRE>
 * 1. Name : $GET
 * 2. Comment   : AXIOS GET 방식요청
 * 3. Author    : CIK
 * <PRE>
 */
export const $GET = (url: string, success: Callback) => {
	if (_customAxios !== undefined) {
		_customAxios
			.get(url)
			.then(response => {
				success(response)
			})
			.catch(error => {
				callError(error)
			})
	} else {
		alert('AXIOS 인스턴스가 생성되지않음')
	}
}

/**
 * <PRE>
 * 1. Name : $POST
 * 2. Comment   : AXIOS POST 방식요청
 * 3. Author    : CIK
 * <PRE>
 */
export const $POST = (url: string, params: {}, success: Callback) => {
	if (_customAxios !== undefined) {
		_customAxios
			.post(url, params)
			.then(response => {
				success(response)
			})
			.catch(error => {
				callError(error)
			})
	} else {
		alert('AXIOS 인스턴스가 생성되지않음')
	}
}
