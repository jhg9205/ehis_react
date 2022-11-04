import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { ALERT as TYPE } from '@common/const'

const swal = withReactContent(Swal)

/**
 * <PRE>
 * 1. Name : defaultAlert
 * 2. Comment   : 기본 alert창
 * 3. Author    : CIK
 * <PRE>
 */
const defaultAlert = (text: string, title?: string) => {
	title !== undefined ? swal.fire({ title: title, html: text }) : swal.fire(text)
}

/**
 * <PRE>
 * 1. Name : infoAlert
 * 2. Comment   : 정보 아이콘표시
 * 3. Author    : CIK
 * <PRE>
 */
const infoAlert = (prop: IAlterProps) => {
	prop.title !== undefined
		? swal.fire({ title: prop.title, html: prop.text, icon: 'info' })
		: swal.fire({ html: prop.text, icon: 'info' })
}

/**
 * <PRE>
 * 1. Name : successAlert
 * 2. Comment   : 성공 아이콘표시
 * 3. Author    : CIK
 * <PRE>
 */
const successAlert = (prop: IAlterProps) => {
	prop.title !== undefined
		? swal.fire({ title: prop.title, html: prop.text, icon: 'success' })
		: swal.fire({ html: prop.text, icon: 'success' })
}

/**
 * <PRE>
 * 1. Name : warningAlert
 * 2. Comment   : 경고 아이콘표시
 * 3. Author    : CIK
 * <PRE>
 */
const warningAlert = (prop: IAlterProps) => {
	prop.title !== undefined
		? swal.fire({ title: prop.title, html: prop.text, icon: 'warning' })
		: swal.fire({ html: prop.text, icon: 'warning' })
}

/**
 * <PRE>
 * 1. Name : confirmAlert
 * 2. Comment   : 컨펌창 확인|취소
 * 3. Author    : CIK
 * <PRE>
 */
const confirmAlert = (prop: IAlterProps) => {
	swal
		.fire({
			title: prop.text,
			showCancelButton: true,
			confirmButtonText: prop.confirmText
		})
		.then(res => {
			if (res.isConfirmed) {
				prop.confirmCall!()
			}
		})
}

/**
 * <PRE>
 * 1. Name : confirmAlert2
 * 2. Comment   : 컨펌창 확인|저장|취소
 * 3. Author    : CIK
 * <PRE>
 */
const confirmAlert2 = (prop: IAlterProps) => {
	swal
		.fire({
			title: prop.text,
			// icon: 'question',
			showDenyButton: true,
			showCancelButton: true,
			denyButtonText: prop.denyText,
			confirmButtonText: prop.confirmText
		})
		.then(res => {
			if (res.isConfirmed) {
				prop.confirmCall!()
			} else if (res.isDenied) {
				prop.denyCall!()
			}
		})
}

/**
 * <PRE>
 * 1. Name : alert
 * 2. Comment   : 타입별 alert창 설정
 * 3. Author    : CIK
 * <PRE>
 */
// export const alert = (prop: IAlterProps) => {
export const alert = {
	open: (text: string, title?: string) => {
		defaultAlert(text, title)
	},
	icon: (prop: IAlterProps) => {
		switch (prop.type) {
			case TYPE.INFO:
				infoAlert(prop)
				break
			case TYPE.SUCCESS:
				successAlert(prop)
				break
			case TYPE.WARNING:
				warningAlert(prop)
				break
		}
	},
	confirm: (prop: IAlterProps) => {
		switch (prop.type) {
			case TYPE.CONFIRM:
				confirmAlert(prop)
				break
			case TYPE.CONFIRM_3B:
				confirmAlert2(prop)
				break
		}
	}
}
