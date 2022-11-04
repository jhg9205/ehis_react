import { Map } from 'ol'
import CMap from './map'
import CLayer from './layer'
import { IT_BASE, MAP } from '@common/const'
import Interaction from 'ol/interaction/Interaction'

class CInteraction {
	_map: Map
	_interaction!: any
	_isActive: boolean
	_layer: CLayer

	constructor(map: CMap) {
		debugger
		this._map = map.map
		this._interaction = null
		this._isActive = false
		this._layer = new CLayer(IT_BASE)
	}

	/**
	 * <PRE>
	 * 1. MethodName : add
	 * 2. Comment   : 맵에 인터렉션 컨트롤추가
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	add() {
		this.map.addInteraction(this._interaction)
		this._isActive = true
	}

	/**
	 * <PRE>
	 * 1. MethodName : remove
	 * 2. Comment   : 맵에 인터렉션 컨트롤삭제
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	remove() {
		if (this._isActive) {
			this.map.removeInteraction(this._interaction)
			this._isActive = false
		}
	}

	/* Getter
	 * Setter */
	get map() {
		return this._map
	}
	get interaction() {
		return this._interaction
	}
	get layer() {
		return this._layer
	}
	get isActive() {
		return this._isActive
	}
	set interaction(val) {
		this.interaction = val
	}
}

export default CInteraction
