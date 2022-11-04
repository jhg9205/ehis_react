import { Navigate, Outlet } from 'react-router-dom'

/**
 * <PRE>
 * 1. Name : PrivateRoute
 * 2. Comment   : 로그인체크 라우터
 * 3. Author    : CIK
 * <PRE>
 */
const PrivateRoute = ({ authentication }: IPrivateRouteProps) => {
	// const isAuthenticated = true // sessionStorage.getItem("isAuthenticated");
	const bool = localStorage.getItem('isAuthenticated') == 'true' ? true : false
	const isAuthenticated: boolean = Boolean(bool)

	if (authentication) {
		//로그인이 필요한페이지

		//로그인을 안했을경우 로그인페이지, 했을경우 해당 페이지
		return !isAuthenticated ? <Navigate to={'/login'} /> : <Outlet />
	} else {
		//로그인이 필요 없는페이지
		return <Outlet />
	}
}

export default PrivateRoute
