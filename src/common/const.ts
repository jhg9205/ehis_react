import GeoJSON from 'ol/format/GeoJSON'
import WFS from 'ol/format/WFS'
import { click, never } from 'ol/events/condition'
import { TopoJSON } from 'ol/format'

/* ******************* 레이어 설정 ******************* */
export const MAP = {
	CENTER: [126.9784147, 37.5666805],
	MAX_EXTENT: [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244],
	VIEW_EXTENT: [12523442.714243276, 3148481.4043987663, 16277135.943792462, 5635543.613735568],
	ZOOM: 8,
	MAXRESOLUTION: 156543.03392804097,
	MINRESOLUTION: 0.07464553543474244,
	VIEWRESOLUTION: 1222.99245256282, //전도기준 + 7
	MAXZOOM: 22,
	NAVER_VER: '1665119629',
	DEFAULT_INIT_CODE: 99999
}

/* ******************* 지도 좌표 SRID ******************* */
export const SRID = {
	WGS84: 'EPSG:4326',
	BASE: 'EPSG:3857',
	CADASTRAL: 'EPSG:5174',
	LEGAL: 'EPSG:5179'
}

/* ******************* WAS URL ******************* */
const ROOT_URL: string = window.location.host
const HTTP: string = 'http://'
const SERVER: string = '211.59.68.82:8080'
const SERVER_URL: string = HTTP + SERVER

export const URL = {
	BASE_PROXY: '/common/gis/base.jsp',
	SERVER_URL: HTTP + ROOT_URL
	// SERVER_URL: ROOT_URL.indexOf('bosangdream') !== -1 ? HTTP + ROOT_URL : HTTP + SERVER
}

/* ******************* 맵서버 관련 ******************* */
const MAP_SERVER_URL: string = '/geoserver2/'
const NAMESPACE: string = 'engineer'

export const MAP_SERVICE = {
	TYPE: 'geoserver',
	URL: {
		WMS: SERVER_URL + MAP_SERVER_URL + 'wms',
		WFS: SERVER_URL + MAP_SERVER_URL + 'wfs',
		GWC: MAP_SERVER_URL + 'gwc/service/wms'
	},
	WMS: {
		VER: '1.1.1',
		SERVICE: 'WMS',
		NAMESPACE: NAMESPACE
	},
	WFS: {
		VER: '1.1.0',
		SERVICE: 'WFS',
		REQUEST: 'GetFeature',
		OUTPUT: 'application/json',
		GEOM: 'the_geom',
		STRATEGY: 'BBOX',
		NAMESPACE: NAMESPACE,
		NS: SERVER_URL + '/' + NAMESPACE,
		RENDER_BUFFER_SIZE: 0
	}
}

/* ******************* 메모정보 ******************* */
export const MEMO = {
	SELECT: './memo',
	UPDATE: './updateMemo',
	INSERT: './insertMemo',
	DELETE: './deleteMemo'
}

/* ******************* GeomFormat ******************* */
export const FORMAT = {
	TopoJSON: new TopoJSON(),
	GeoJSON: new GeoJSON(),
	WFS: new WFS()
}

/* ******************* 인터렉션 관련 ******************* */
export enum IT_MODE {
	SINGLE,
	MULTI
}
export const IT_TYPE = {
	//<-- WFS 트랜젝션타입
	INSERT: 'Insert',
	UPDATE: 'Update',
	DELETE: 'Delete'
}

/* ******************* 지오메트리 타입 ******************* */
export const GEOM_TYPE = {
	GEOM_TYPE_LINESTRING: 'LineString',
	GEOM_TYPE_POLYGON: 'Polygon',
	GEOM_TYPE_CIRCLE: 'Circle',
	GEOM_TYPE_MULTIPOLYGON: 'MultiPolygon'
}

/* ******************* 메시지 박스티입 ******************* */
export enum ALERT {
	DEFAULT,
	WARNING,
	INFO,
	SUCCESS,
	CONFIRM,
	CONFIRM_3B
}

/* ******************* 레이어 리스트 ******************* */
export const LAYER = {
	WFS: {
		UFL_HPIP_LM: 'UFL_HPIP_LM'
	},
	WMS: {
		UFL_HPIP_LM: 'UFL_HPIP_LM'
	}
}

/* ******************* 인터렉션 관련 ******************* */
export const IT_BASE: ILayerProps = {
	name: 'IT_LAYER',
	service: 'VECTOR',
	srsName: SRID.BASE
}

export const IT_SELECT_TYPE: any = {
	click: click,
	single: never,
	multi: click
}

/*****************공통함수**************** */
export let getCurrentDate = function () {
	const date = new Date()
	const year = date.getFullYear()
	const month = ('0' + (date.getMonth() + 1)).slice(-2)
	const day = ('0' + date.getDate()).slice(-2)
	const hour = ('0' + date.getHours()).slice(-2)
	const min = ('0' + date.getMinutes()).slice(-2)
	const sec = ('0' + date.getSeconds()).slice(-2)

	return {
		year: year,
		month: month,
		day: day,
		full: year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
	}
}

export const IT_MODE_SINGLE = 0x00 //<- 단일선택
export const IT_MODE_MULTI = 0x01 //<- 다중선택
