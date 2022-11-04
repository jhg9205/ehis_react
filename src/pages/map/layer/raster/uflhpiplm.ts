import CLayer from '@class/layer'
import { LAYER, SRID } from '@common/const'

let layer: CLayer

export const init = () => {
	const prop: ILayerProps = {
		name: LAYER.WMS.UFL_HPIP_LM,
		service: 'WMS',
		srsName: SRID.BASE,
		scale: { min: 11, max: 21 },
		env: 'old:20100718;normal:20200718;'
	}

	layer = new CLayer(prop)

	return layer
}
