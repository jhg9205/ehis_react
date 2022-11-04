import { ALERT } from '@common/const'
import { alert } from '@utils/alert'
import { Map, MapEvent } from 'ol'
import Projection from 'ol/proj/Projection'
import { ErrorInfo, HtmlHTMLAttributes } from 'react'
import CMap from './map'

/**
 * <PRE>
 * 1. ClassName : CHistoryControl
 * 2. Comment   : 지도 레벨변경 및 이동 내역관리
 * 3. Author    : CIK
 * <PRE>
 */
class CHistoryControl {
	map: CMap

	preElementID: string

	nextElementID: string

	preStack: IMapHistoryState[]

	nextStack: IMapHistoryState[]

	isClick: boolean

	limit?: number

	constructor(map: CMap, preElementID: string, nextElementID: string, limit?: number) {
		this.map = map
		this.preElementID = preElementID
		this.nextElementID = nextElementID
		this.isClick = false
		this.limit = limit || 20

		this.preStack = []
		this.nextStack = []

		this.init()
	}

	/**
	 * <PRE>
	 * 1. MethodName : init
	 * 2. Comment    : 이벤트설정
	 * 3. Author     : CIK
	 * <PRE>
	 */
	private init() {
		try {
			this.map.map.on('moveend', (e: MapEvent) => {
				this.setState()
			})
		} catch (error) {
			alert.icon({ type: ALERT.WARNING, title: 'Error', text: 'CHistoryControl Init Error <br /><br /> ' + error })
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : setState
	 * 2. Comment    : 지도 현재위치 상태값을 설정
	 * 3. Author     : CIK
	 * <PRE>
	 */
	private setState() {
		const view = this.map.getView()
		const state: IMapHistoryState = {
			center: view.getCenter(),
			zoom: view.getZoom(),
			resoulution: view.getResolution(),
			proj: view.getProjection()
		}

		if (!this.isClick) {
			this.preStack.unshift(state)
			this.nextStack = []
			this.onNextChage()
		}

		if (this.preStack.length > 1) {
			this.onPreChage(this.preStack[1])
		}

		if (this.preStack.length > this.limit! + 1) {
			this.preStack.pop()
		}

		this.isClick = false
	}

	/**
	 * <PRE>
	 * 1. MethodName : move
	 * 2. Comment    : 지도 위치상태 이동
	 * 3. Author     : CIK
	 * <PRE>
	 */
	private move(state: IMapHistoryState) {
		this.map.setZoom(state.zoom!)
		this.map.setCenter(state.center!)
	}

	/**
	 * <PRE>
	 * 1. MethodName : onNextChage
	 * 2. Comment    : 다음버튼의 엘리멘트속성변경
	 * 3. Author     : CIK
	 * <PRE>
	 */
	private onNextChage(state?: IMapHistoryState) {
		const next = document.getElementById(this.nextElementID)!
		state !== undefined ? next.removeAttribute('disabled') : next.setAttribute('disabled', 'true')
	}

	/**
	 * <PRE>
	 * 1. MethodName : onPreChage
	 * 2. Comment    : 이전버튼의 엘리멘트속성변경
	 * 3. Author     : CIK
	 * <PRE>
	 */
	private onPreChage(state?: IMapHistoryState) {
		const prev = document.getElementById(this.preElementID)!
		state !== undefined ? prev.removeAttribute('disabled') : prev.setAttribute('disabled', 'true')
	}

	/**
	 * <PRE>
	 * 1. MethodName : next
	 * 2. Comment    : 이전 위치로 이동하기 전의 위치로이동
	 * 3. Author     : CIK
	 * <PRE>
	 */
	next() {
		const state = this.nextStack.shift()

		if (state !== undefined) {
			this.preStack.unshift(state)
			this.isClick = true
			this.move(state)
			this.onNextChage(this.nextStack[0])
			this.onPreChage(this.preStack[1])
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : previous
	 * 2. Comment    : 마지막으로 이동했던 위치로 이동
	 * 3. Author     : CIK
	 * <PRE>
	 */
	previous() {
		const current = this.preStack.shift()!
		const state = this.preStack.shift()

		if (state !== undefined) {
			this.nextStack.unshift(current)
			this.preStack.unshift(state)
			this.isClick = true
			this.move(state)
			this.onNextChage(this.nextStack[0])
			this.onPreChage(this.preStack[1])
		} else {
			this.preStack.unshift(current)
		}
	}
}

export default CHistoryControl
