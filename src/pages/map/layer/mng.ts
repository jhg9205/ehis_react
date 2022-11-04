import CLayer from '@class/layer'
import CMap from '@class/map'
import { LAYER } from '@common/const'
import { init as HPIP } from './vector/uflhpiplm'
import { init as HPIPWMS } from './raster/uflhpiplm'

let _map: CMap
let _layers: ArrayLayer

/**
 * <PRE>
 * 1. Name : initLayer
 * 2. Comment   : 지도에 올려질 레이어 생성
 * 3. Author    : CIK
 * <PRE>
 */
export const initLayer = (map: CMap) => {
	_map = map

	_layers = {
		[LAYER.WFS.UFL_HPIP_LM]: HPIP()//,
		//[LAYER.WMS.UFL_HPIP_LM]: HPIPWMS()
		// ['aa']: HPIP(),
		// ['bb']: HPIPWMS()
	}
}

/**
 * <PRE>
 * 1. Name : getLayer
 * 2. Comment   : 타입별 레이어가져오기
 * 3. Author    : CIK
 * <PRE>
 */
const getLayer = (type: string) => {
	return _layers[type] as CLayer
}

/**
 * <PRE>
 * 1. Name : source
 * 2. Comment   : 타입별 source레이어 가져오기
 * 3. Author    : CIK
 * <PRE>
 */
const source = (clayer: CLayer) => {
	debugger;
	return clayer.service === 'WMS' ? clayer.tileLayer : clayer.vectorLayer
}

/**
 * <PRE>
 * 1. Name : addLayer
 * 2. Comment   : 레이어추가
 * 3. Author    : CIK
 * <PRE>
 */
const addLayer = (type: string) => {
	const layer: CLayer = getLayer(type)

	_map.addLayer(source(layer))
}

/**
 * <PRE>
 * 1. Name : removeLayer
 * 2. Comment   : 레이어삭제
 * 3. Author    : CIK
 * <PRE>
 */
const removeLayer = (type: string) => {
	const layer: CLayer = getLayer(type)

	_map.removeLayer(source(layer))
}

/**
 * <PRE>
 * 1. Name : show
 * 2. Comment   : 레이어 활성화
 * 3. Author    : CIK
 * <PRE>
 */
const show = (type: string) => {
	getLayer(type).show()
}

/**
 * <PRE>
 * 1. Name : close
 * 2. Comment   : 레이어 비활성화
 * 3. Author    : CIK
 * <PRE>
 */
const close = (type: string) => {
	getLayer(type).close()
}

/**
 * <PRE>
 * 1. Name : visibility
 * 2. Comment   : 레이어 활성화/비활성화 설정
 * 3. Author    : CIK
 * <PRE>
 */
export const visibility = (type: string, visible: boolean) => {
	if (visible) {
		addLayer(type)
		show(type)
	} else {
		close(type)
		removeLayer(type)
	}
}
