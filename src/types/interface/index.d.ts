// 맵관련
// ================================================================ //
interface IMapProps {
	type: number
	visible?: boolean
	projection?: string
	maxZoom?: number
	scale?: ScaleType
	defaultUrl?: string
	ver?: string
}

interface ILayerProps {
	name: string
	scale?: ScaleType
	srsName: string
	namespace?: string
	service: 'WFS' | 'WMS' | 'VECTOR'
	tiled?: boolean
	style?: Style
	visible?: boolean
	env?: string
	updateInteracting?: boolean
}

interface IWFSParams {
	service: 'WFS'
	version: string
	request?: 'GetFeature'
	srsName: string
	outputFormat?: string
	filter?: string
}

interface IWMSParams {
	service: 'WMS'
	version: string
	tiled?: boolean
	layers?: string
	env?: string
	namespace?: string
}

interface IMapHistoryState {
	center?: ArrayNumber
	zoom?: number
	resoulution?: number
	proj?: Projection
}

// 라우터관련
// ================================================================ //
interface IPrivateRouteProps {
	children?: ReactElement // Router.tsx에서 PrivateRoute가 감싸고 있는 Componet Element
	authentication: boolean
}

interface ILayoutReducer {
	index?: number
	visibility?: boolean
	header?: ArrayString
	isPopup: boolean
	children: React.ReactNode
}
// interface IHeaderReducer {
// 	header: ArrayString
// }

interface IMapReducer {
	map: CMap | undefined
}

interface ISize {
	w: number
	h: number
}

// COMPONENTS
// ================================================================ //
interface ITabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

interface IPopupProps {
	id: string
	open: boolean
	children?: React.ReactNode
	styleType?: number
}

interface IOptions {
	from: number
	to: number
}

// UTILS
// ================================================================ //
interface IAlterProps {
	type: number
	text: string
	title?: string
	confirmText?: string
	confirmCall?: Callback
	denyText?: string
	denyCall?: Callback
}
