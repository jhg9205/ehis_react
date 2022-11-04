import CMap from '@class/map'

const initmap: string = 'REDUCER_MAP/INIT_MAP_OBJECT' as const

export const mapInstance = (map: CMap) => ({
	type: initmap,
	payload: map
})

const initState: IMapReducer = {
	map: undefined
}

/**
 * <PRE>
 * 1. Name : mapReducer
 * 2. Comment   : 맵관리 리듀서
 * 3. Author    : CIK
 * <PRE>
 */
const mapReducer = (state: IMapReducer = initState, action: MapAction) => {
	switch (action.type) {
		case initmap:
			return {
				...state,
				map: action.payload
			}
		default:
			return state
	}
}

export default mapReducer
