type ArrayNumber = number[]
type ArrayString = string[]
type Callback = Function
type ScaleType = { min: number; max: number }

type ArrayLayer = { [key: string]: VectorLayer<VectorSource<Geometry>> }
type TabList = { [key: number]: JSX.Element }
type OptinoType = { value: string; name: string }

// 리듀서관련
type MapAction = ReturnType<typeof mapInstance> //| ReturnType<typeof getMapOBJ>
type MenuAction = ReturnType<typeof setMenuListShow> | ReturnType<typeof setHeaderInfo>
// type HeaderAction = ReturnType<typeof setHeaderInfo>

// 그리드관련
type GridParam = {
	type: number
	grid: string
	field: DataFieldInput[]
	columns: ConfigObject[]
	layout: any
	rows: DataValues[]
	height: number
	id?: string
}

// d3관련