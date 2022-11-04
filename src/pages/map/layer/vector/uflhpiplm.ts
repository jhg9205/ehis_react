import CLayer from '@class/layer'
import { LAYER, MAP_SERVICE, SRID } from '@common/const'
import Feature from 'ol/Feature'
import Geometry from 'ol/geom/Geometry'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Style from 'ol/style/Style'
import Text from 'ol/style/Text'

let layer: CLayer

export const init = () => {
	const prop: ILayerProps = {
		name: LAYER.WFS.UFL_HPIP_LM,
		namespace: MAP_SERVICE.WFS.NAMESPACE,
		service: 'WFS',
		srsName: SRID.BASE,
		style: style,
		// visible: false,
		scale: { min: 14, max: 21 }
	}

	layer = new CLayer(prop)

	return layer
}

const style = (feature: Feature<Geometry>) => {
	const desc: string = feature.getProperties()['STD_LEN'] + ''

	return new Style({
		stroke: new Stroke({
			color: '#f00',
			width: 3
		}),
		fill: new Fill({
			color: '#0f0'
		}),
		text: new Text({
			font: '12px Verdana',
			text: desc,
			placement: 'line',
			offsetY: -8,
			fill: new Fill({ color: '#fff' }),
			stroke: new Stroke({ color: '#f00', width: 3 })
		})
	})
}
