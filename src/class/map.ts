import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import TileSourceType from 'ol/source/Tile'
import View from 'ol/View'
import Baselayer from 'ol/layer/Base'

import { defaults } from 'ol/control'
import { register } from 'ol/proj/proj4'
import { MAP, SRID } from '../common/const'
import CNaverMap from './navermap'

import proj4 from 'proj4'
import Point from 'ol/geom/Point'
import Geometry from 'ol/geom/Geometry'
import CCapture from './capture'
import CHistoryControl from './history'
import VectorLayer from "ol/layer/Vector";

/**
 * <PRE>
 * 1. ClassName : CMap
 * 2. Comment   : 지도 클래스
 * 3. Author    : CIK
 * <PRE>
 */
class CMap {
	map!: Map

	base?: TileLayer<TileSourceType>

	sattle?: TileLayer<TileSourceType>

	cadastral?: TileLayer<TileSourceType>

	historyControl?: CHistoryControl

	constructor(historyProp?: IMapHistoryState) {
		this.initMap()
	}

	/**
	 * <PRE>
	 * 1. Name : initMap
	 * 2. Comment   : 지도생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private initMap() {
		this.setProjection()

		this.map = new Map({
			layers: [this.createBaseLayer()],
			target: 'map',
			controls: this.createControls(),
			view: this.createView()
		})

		this.historyControl = new CHistoryControl(this, 'btnReq6', 'btnReq7')
	}

	/**
	 * <PRE>
	 * 1. Name : createBaseLayer
	 * 2. Comment   : 기본지도생성(네이버)
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private createBaseLayer() {
		const naver: CNaverMap = new CNaverMap({ type: 0 })

		this.base = naver.createLayer()

		return this.base
	}

	/**
	 * <PRE>
	 * 1. Name : createSattleLayer
	 * 2. Comment   : 항공지도생성(네이버)
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private createSattleLayer(visible: boolean = false) {
		const naver: CNaverMap = new CNaverMap({ type: 1, visible: visible })
		this.sattle = naver.createLayer()

		return this.sattle
	}

	/**
	 * <PRE>
	 * 1. Name : createCadastralLayer
	 * 2. Comment   : 지적도(네이버)
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private createCadastralLayer() {
		const naver: CNaverMap = new CNaverMap({ type: 2, visible: false })
		this.cadastral = naver.createLayer()

		return this.cadastral
	}

	/**
	 * <PRE>
	 * 1. Name : createView
	 * 2. Comment   : 지도뷰생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private createView() {
		const geom: Geometry = new Point(MAP.CENTER).transform(SRID.WGS84, SRID.BASE)
		const point = geom as Point

		const view = new View({
			zoom: MAP.ZOOM,
			center: point.getCoordinates(),
			projection: SRID.BASE,
			extent: MAP.VIEW_EXTENT,
			maxResolution: MAP.VIEWRESOLUTION,
			minResolution: MAP.MINRESOLUTION,
			constrainResolution: true
		})

		return view
	}

	/**
	 * <PRE>
	 * 1. Name : createControls
	 * 2. Comment   : 지도기본 컨트를롤 생성
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private createControls() {
		return defaults({
			zoom: false,
			attribution: false,
			rotate: false
		})
	}

	/**
	 * <PRE>
	 * 1. Name : setProjection
	 * 2. Comment   : 5174, 5179, 5186 좌표계등록
	 * 3. Author    : CIK
	 * <PRE>
	 */
	private setProjection() {
		proj4.defs(
			'EPSG:5174',
			'+proj=tmerc +lat_0=38 +lon_0=127.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43'
		)
		proj4.defs(
			'EPSG:5179',
			'+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
		)
		proj4.defs(
			'EPSG:5186',
			'+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
		)

		register(proj4)
	}

	/**
	 * <PRE>
	 * 1. Name : moveToExtent
	 * 2. Comment   : 해당영역이 포함되는 레벨로 지도이동
	 * 3. Author    : CIK
	 * <PRE>
	 */
	moveToExtent(extent: ArrayNumber, offset: ArrayNumber) {
		const padding = offset != undefined ? offset : [50, 50, 50, 50]

		this.getView().fit(extent, {
			padding: padding
		})
	}

	/**
	 * <PRE>
	 * 1. Name : moveToCenter
	 * 2. Comment   : 해당위치로 지도이동
	 * 3. Author    : CIK
	 * <PRE>
	 */
	moveToCenter(point: ArrayNumber) {
		this.getView().setCenter(point)
	}

	/**
	 * <PRE>
	 * 1. Name : addLayer
	 * 2. Comment   : 레이어를 지도에 등록
	 * 3. Author    : CIK
	 * <PRE>
	 */
	addLayer(layer: Baselayer) {
		this.map.addLayer(layer)
	}

	/**
	 * <PRE>
	 * 1. Name : removeLayer
	 * 2. Comment   : 레이어를 지도에서 삭제
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 04.
	 * <PRE>
	 */
	removeLayer(layer: Baselayer) {
		this.map.removeLayer(layer)
	}

	/**
	 * <PRE>
	 * 1. Name : fullSave
	 * 2. Comment   : 전체화면 저장
	 * 3. Author    : CIK
	 * <PRE>
	 */
	fullSave(fileName: string) {
		const capture = new CCapture(fileName + '.png')
		capture.saveFullImage()
	}

	/**
	 * <PRE>
	 * 1. Name : customSave
	 * 2. Comment   : 사용자정의 영역 저장
	 * 3. Author    : CIK
	 * <PRE>
	 */
	customSave(fileName: string) {
		const capture = new CCapture(fileName + '.png')
		capture.savePartImage()
	}

	getView() {
		return this.map.getView()
	}

	/**
	 * <PRE>
	 * 1. Name : getCoordinateFromPixel
	 * 2. Comment   : 화면좌표를 실좌표료(3857)로 변환하여 가져온다
	 * 3. Author    : CIK
	 * <PRE>
	 */
	getCoordinateFromPixel(pixel: ArrayNumber) {
		return this.map.getCoordinateFromPixel(pixel)
	}

	/**
	 * <PRE>
	 * 1. Name : getCenter
	 * 2. Comment   : 현재보고있는 지도의 가운데 좌표
	 * 3. Author    : CIK
	 * <PRE>
	 */
	getCenter() {
		return this.getView().getCenter()
	}

	/**
	 * <PRE>
	 * 1. Name : getZoom
	 * 2. Comment   : 지도 레벨을 이동한다
	 * 3. Author    : CIK
	 * <PRE>
	 */
	getZoom() {
		return this.getView().getZoom()
	}

	/**
	 * <PRE>
	 * 1. Name : setZoom
	 * 2. Comment   : 지도 레벨을 이동한다
	 * 3. Author    : CIK
	 * <PRE>
	 */
	setZoom(val: number) {
		this.getView().setZoom(val)
	}

	/**
	 * <PRE>
	 * 1. Name : setCenter
	 * 2. Comment   :  지도의 가운데 좌표설정
	 * 3. Author    : CIK
	 * <PRE>
	 */
	setCenter(val: ArrayNumber) {
		this.map.getView().setCenter(val)
	}

	/**
	 * <PRE>
	 * 1. Name : zoomIn
	 * 2. Comment   :  지도확대
	 * 3. Author    : CIK
	 * <PRE>
	 */
	zoomIn() {
		this.setZoom(this.getZoom()! + 1)
	}

	/**
	 * <PRE>
	 * 1. Name : zoomOut
	 * 2. Comment   :  지도축소
	 * 3. Author    : CIK
	 * <PRE>
	 */
	zoomOut() {
		this.setZoom(this.getZoom()! - 1)
	}

	/**
	 * <PRE>
	 * 1. Name : updateSize
	 * 2. Comment   :  지도를 다시렌더링한다
	 * 3. Author    : CIK
	 * <PRE>
	 */
	updateSize() {
		this.map.updateSize()
	}

	/**
	 * <PRE>
	 * 1. MethodName : next
	 * 2. Comment    : 이전 위치로 이동하기 전의 위치로이동
	 * 3. Author     : CIK
	 * <PRE>
	 */
	next() {
		this.historyControl?.next()
	}

	/**
	 * <PRE>
	 * 1. MethodName : previous
	 * 2. Comment    : 마지막으로 이동했던 위치로 이동
	 * 3. Author     : CIK
	 * <PRE>
	 */
	previous() {
		this.historyControl?.previous()
	}

	/* Getter
	 * Setter */
	get sattleLayer() {
		return this.sattle
	}
	get baseLayer() {
		return this.base
	}
	get cadastralLayer() {
		return this.cadastral
	}
}

export default CMap
