import Tile from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import TileGrid from 'ol/tilegrid/TileGrid'
import { MAP, SRID } from '@common/const'

/**
 * <PRE>
 * 1. ClassName : CNaverMap
 * 2. Comment   : 네이버맵 클래스
 *    options.type : 0 -> 기본도, 1 -> 항공사진 , 2 -> 지적도
 *    ver : 네이버 타일버전값
 * 3. Author    : CIK
 * <PRE>
 */
class CNaverMap {
	mapType: number

	visible: boolean

	projection: string

	maxZoom: number

	scale: {}

	defaultUrl: string

	ver: string

	tileGrid?: TileGrid

	constructor(prop: IMapProps) {
		this.mapType = prop.type !== undefined ? prop.type : 0
		this.visible = prop.visible !== undefined ? prop.visible : true
		this.projection = SRID.BASE
		this.maxZoom = MAP.MAXZOOM
		this.scale = prop.scale!
		// this.defaultUrl = 'http://nrbe.map.naver.net/styles/'
		// https://map.pstatic.net/nrb/styles/terrain/1655974504/17/111796/50806.png?mt=bg.ol.ts.lp
		this.defaultUrl = 'https://map.pstatic.net/nrb/styles/'
		this.ver = prop.ver !== undefined ? prop.ver : MAP.NAVER_VER

		this.initGrid()
	}

	/**
	 * <PRE>
	 * 1. Name : initGrid
	 * 2. Comment   : 네이버 전용 타일그리드생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private initGrid() {
		let resolutions = []

		for (let z = 0; z < this.maxZoom; ++z) {
			resolutions.push(MAP.MAXRESOLUTION / Math.pow(2, z))
		}

		this.tileGrid = new TileGrid({
			extent: MAP.MAX_EXTENT,
			resolutions: resolutions
		})
	}

	/**
	 * <PRE>
	 * 1. Name : changeTile
	 * 2. Comment   : 네이버 타일인덱스설정
	 *    bg 	: 배경
	 *    ol 	: 도로
	 *    sw	: 지하철
	 *    ar 	: 등산경로
	 *    lko	: POI
	 *    lp	: 지적도
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private changeTile(source: XYZ) {
		const mt = 'bg.ol.sw.ar.lko'
		const mt2 = 'bg.ol.sw.lp'
		const urls = [
			this.defaultUrl + 'basic/' + this.ver + '/{z}/{x}/{y}.png?mt=' + mt,
			this.defaultUrl + 'satellite/' + this.ver + '/{z}/{x}/{y}.png?mt=' + mt,
			this.defaultUrl + 'basic/' + this.ver + '/{z}/{x}/{y}.png?mt=' + mt2
		]
		let url = urls[this.mapType]

		source.setUrl(url)
	}

	/**
	 * <PRE>
	 * 1. Name : createLayer
	 * 2. Comment   : 네이버 레이어생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	createLayer() {
		const layer = new Tile({
			source: new XYZ({
				wrapX: true,
				opaque: true,
				maxZoom: this.maxZoom,
				tileGrid: this.tileGrid,
				projection: this.projection,
				crossOrigin: 'anonymous',
				attributionsCollapsible: false
			}),
			visible: this.visible
		})

		this.changeTile(layer.getSource())

		return layer
	}
}

export default CNaverMap
