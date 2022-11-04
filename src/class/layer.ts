import { MAP_SERVICE, MAP, SRID, FORMAT } from '@common/const'

import VectorSource from 'ol/source/Vector'
import { bbox } from 'ol/loadingstrategy'
import VectorLayer from 'ol/layer/Vector'
import Geometry from 'ol/geom/Geometry'
import { WriteGetFeatureOptions } from 'ol/format/WFS'
import { $POST } from '@utils/request'
import { AxiosResponse } from 'axios'
import Feature from 'ol/Feature'
import TileLayer from 'ol/layer/Tile'
import TileSource from 'ol/source/Tile'
import TileWMS from 'ol/source/TileWMS'

/**
 * <PRE>
 * 1. ClassName : CLayer
 * 2. Comment   : 레이어 클래스
 * 3. Author    : CIK
 * <PRE>
 */
class CLayer {
	name: string

	vectorLayer!: VectorLayer<VectorSource<Geometry>>

	tileLayer!: TileLayer<TileSource>

	scale: ScaleType

	srsName: string

	service: 'WFS' | 'WMS' | 'VECTOR'

	resolutions!: ArrayNumber

	constructor(prop: ILayerProps) {
		this.name = prop.name || 'LAYER'
		debugger
		this.scale = prop.scale || { min: 7, max: 20 }

		this.srsName = prop.srsName || SRID.BASE

		this.service = prop.service || 'VECTOR'

		this.initResolutions()

		switch (prop.service) {
			case 'WFS':
				debugger
				this.createWFSLayer(prop.name, prop)
				break
			case 'WMS':
				this.createWMSLayer(prop.name, prop)
				break
			case 'VECTOR':
				this.createVectorLayer(prop.name, prop)
				break
		}
	}

	/**
	 * <PRE>
	 * 1. Name : initResolutions
	 * 2. Comment   : resolutions 생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private initResolutions() {
		this.resolutions = []
		for (let i = 0; i < MAP.MAXZOOM; ++i) {
			this.resolutions.push(MAP.MAXRESOLUTION / Math.pow(2, i))
		}
	}

	/**
	 * <PRE>
	 * 1. Name : createWFSLayer
	 * 2. Comment   : WFS레이어 생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private createWFSLayer(name: string, prop: ILayerProps) {
		const source = new VectorSource({
			loader(extent, resolutions, projection) {
				const layer = this as VectorSource<Geometry>
				const opt: WriteGetFeatureOptions = {
					featureNS: MAP_SERVICE.WFS.NS,
					featurePrefix: MAP_SERVICE.WFS.NAMESPACE,
					featureTypes: [name],
					outputFormat: MAP_SERVICE.WFS.OUTPUT,
					geometryName: MAP_SERVICE.WFS.GEOM,
					srsName: SRID.BASE,
					bbox: extent
				}

				const node = FORMAT.WFS.writeGetFeature(opt)
				const el: Element = node as Element
				const filter = el.getElementsByTagName('Filter')[0]
				const data = '(' + new XMLSerializer().serializeToString(filter) + ')'
				const params = new URLSearchParams()

				params.append('REQUEST', MAP_SERVICE.WFS.REQUEST)
				params.append('TYPENAME', MAP_SERVICE.WFS.NAMESPACE + ':' + name)
				params.append('SRSNAME', SRID.BASE)
				params.append('OUTPUTFORMAT', MAP_SERVICE.WFS.OUTPUT)
				params.append('FILTER', data)

				$POST(MAP_SERVICE.URL.WFS, params, function (res: AxiosResponse<any, any>) {
					const featerse: Feature<any>[] = FORMAT.GeoJSON.readFeatures(res.request.responseText)

					layer.clear()
					layer.addFeatures(featerse)
				})
			},
			strategy: bbox
		})

		this.vectorLayer = new VectorLayer({
			source: source,
			minResolution: this.resolutions[this.scale.max],
			maxResolution: this.resolutions[this.scale.min],
			renderBuffer: 0,
			style: prop.style,
			updateWhileInteracting: prop.updateInteracting || false,
			visible: prop.visible || false
		})
	}

	/**
	 * <PRE>
	 * 1. Name : createWMSLayer
	 * 2. Comment   : WMS레이어 생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private createWMSLayer(name: string, prop: ILayerProps) {
		const params: IWMSParams = {
			service: 'WMS',
			layers: MAP_SERVICE.WMS.NAMESPACE + ':' + name,
			version: MAP_SERVICE.WMS.VER,
			tiled: true
		}
		if (prop.env) {
			params.env = prop.env
		}

		this.tileLayer = new TileLayer({
			source: new TileWMS({
				url: MAP_SERVICE.URL.WMS,
				params: params,
				crossOrigin: 'anonymous',
				projection: SRID.BASE
			}),
			minResolution: this.resolutions[this.scale.max],
			maxResolution: this.resolutions[this.scale.min],
			visible: prop.visible || false
		})
	}

	/**
	 * <PRE>
	 * 1. Name : createVectorLayer
	 * 2. Comment   : 벡터 레이어 생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private createVectorLayer(name: string, prop: ILayerProps) {
		this.vectorLayer = new VectorLayer({
			source: new VectorSource({}),
			visible: prop.visible || false
		})
	}

	private get layer() {
		return this.service === 'WFS' ? this.vectorLayer : this.tileLayer
	}

	show() {
		this.layer.setVisible(true)
	}

	close() {
		this.layer.setVisible(false)
	}
}

export default CLayer
