const popupOpen: string = 'REDUCER_LAYOUT/POPUP_OPEN' as const
const popupClose: string = 'REDUCER_LAYOUT/POPUP_CLOSE' as const
const header: string = 'REDUCER_LAYOUT/HEADER_INFO' as const

const header1: string = 'REDUCER_LAYOUT/HEADER_INFO1' as const
const header2: string = 'REDUCER_LAYOUT/HEADER_INFO2' as const

export const setPopupShow = (val: boolean, children?: React.ReactNode) => ({
	type: val ? popupClose : popupOpen,
	payload: val,
	payload2: children
})

export const setHeaderInfo = (index: number, headers: ArrayString) => ({
	type: header,
	index: index,
	payload: headers
})

const initState: ILayoutReducer = {
	header: ['Home', '업무소개'],
	index: 0,
	visibility: false,
	isPopup: false,
	children: null
}

/**
 * <PRE>
 * 1. Name : layOutReducer
 * 2. Comment   : 화면관리 리듀서
 * 3. Author    : CIK
 * <PRE>
 */
const layOutReducer = (state: ILayoutReducer = initState, action: MenuAction) => {
	switch (action.type) {
		case popupOpen:
			return {
				...state,
				isPopup: action.payload,
				children: action.payload2
			}
		case popupClose:
			return {
				...state,
				isPopup: action.payload,
				children: action.payload2
			}
		case header:
			return {
				...state,
				header: action.payload,
				index: action.index
			}
		default:
			return state
	}
}

export default layOutReducer
