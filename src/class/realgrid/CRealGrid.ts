import {
	ClickData,
	ConfigObject,
	DataFieldInput,
	DataValues,
	GridBase,
	GridView,
	LocalDataProvider,
	LocalTreeDataProvider,
	RowMaskType,
	TreeView
} from 'realgrid'
import { GRID_TYPE } from '@common/domain'

/**
 * <PRE>
 * 1. ClassName : CRealGrid
 * 2. Comment   : 리얼그리드 클래스
 * 3. Author    : JSH
 * <PRE>
 */
class CRealGrid {
	//공통
	type: number
	grid: string
	field: DataFieldInput[]
	columns!: ConfigObject[]
	layout: any
	rows!: DataValues[]
	height!: number

	//grid 전용
	gridProvider!: LocalDataProvider
	gridView!: GridView

	//tree 전용
	treeProvider!: LocalTreeDataProvider
	treeView!: TreeView
	treeId: string

	constructor(gridParam: GridParam) {
		this.type = gridParam.type
		this.grid = gridParam.grid
		this.field = gridParam.field
		this.columns = gridParam.columns
		this.layout = gridParam.layout
		this.rows = gridParam.rows
		this.height = gridParam.height
		this.treeId = gridParam.id!
		this.initGrid()
	}

	/**
	 * <PRE>
	 * 1. MethodName : initGrid
	 * 2. Comment    : 초기 그리드생성
	 * 3. Author     : JSH
	 * <PRE>
	 */
	private initGrid() {
		this.defaultSet()
		this.createField(this.field)
		this.createColumns(this.columns)
		this.createLayout(this.layout)
		this.addRows(this.rows, this.treeId!)
	}

	/**
	 * <PRE>
	 * 1. MethodName : createField
	 * 2. Comment    : 기본필드 생성
	 * 3. Author     : JSH
	 * <PRE>
	 */
	private createField(field: DataFieldInput[]) {
		switch (this.type) {
			case GRID_TYPE.GRIDVIEW:
				this.gridProvider.setFields(field)
				break
			case GRID_TYPE.TREEVIEW:
				this.treeProvider.setFields(field)
				break
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : createColumns
	 * 2. Comment    : 기본컬럼 생성
	 * 3. Author     : JSH
	 * <PRE>
	 */
	private createColumns(columns: ConfigObject[]) {
		switch (this.type) {
			case GRID_TYPE.GRIDVIEW:
				this.gridView.setColumns(columns)
				break
			case GRID_TYPE.TREEVIEW:
				this.treeView.setColumns(columns)
				break
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : createLayout
	 * 2. Comment    : 기본레이아웃 생성
	 * 3. Author     : JSH
	 * <PRE>
	 */
	private createLayout(layout: any) {
		switch (this.type) {
			case GRID_TYPE.GRIDVIEW:
				this.gridView.setColumnLayout(layout)
				break
			case GRID_TYPE.TREEVIEW:
				this.treeView.setColumnLayout(layout)
				break
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : defaultSet
	 * 2. Comment    : 그리드 기본테이블 세팅
	 * 3. Author     : JSH
	 * <PRE>
	 */
	private defaultSet() {
		switch (this.type) {
			case GRID_TYPE.GRIDVIEW:
				this.gridProvider = new LocalDataProvider(true)
				this.gridView = new GridView(this.grid)
				this.gridView.setDataSource(this.gridProvider)
				this.gridView.setRowIndicator({ visible: false })
				this.gridView.setFooter({ visible: false })
				this.gridView.setStateBar({ visible: false })
				this.gridView.setCheckBar({ visible: false })
				this.gridView.header.height = this.height
				this.gridView.setDisplayOptions({ focusVisible: false, rowHoverType: RowMaskType.ROW })
				break
			case GRID_TYPE.TREEVIEW:
				this.treeProvider = new LocalTreeDataProvider(true)
				this.treeView = new TreeView(this.grid)
				this.treeView.setDataSource(this.treeProvider)
				this.treeView.setRowIndicator({ visible: false })
				this.treeView.setFooter({ visible: false })
				this.treeView.setStateBar({ visible: false })
				this.treeView.setCheckBar({ visible: false })
				this.treeView.header.height = this.height
				this.treeView.setTreeOptions({ lineVisible: false })
				this.treeView.setDisplayOptions({ focusVisible: false, rowHoverType: RowMaskType.ROW })
				this.expandRow()
				break
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : expandRow
	 * 2. Comment    : row 값 가져와서 expand
	 * 3. Author     : JSH
	 * <PRE>
	 */
	private expandRow() {
		this.treeView.onCellClicked = (grid: GridBase, clickData: ClickData) => {
			if (clickData.cellType == 'data') {
				console.log(this.treeView.getValue(clickData.itemIndex!, clickData.field!))
				this.treeView.expand(clickData.itemIndex!)
			}
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : addChild
	 * 2. Comment    : 클릭 시 데이터 호출
	 * 3. Author     : JSH
	 * <PRE>
	 */
	private addChild() {
		this.treeView.onTreeItemExpanded = function (tree, itemIndex, rowId) {
			console.log('Expanded at: ' + itemIndex)
			//axios로 호출해서 데이터 받아와야함
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : createRows
	 * 2. Comment    : 기본데이터 생성
	 * 3. Author     : JSH
	 * <PRE>
	 */
	addRows(rows: DataValues[], id: string) {
		switch (this.type) {
			case GRID_TYPE.GRIDVIEW:
				this.gridProvider.setRows(rows)
				break
			case GRID_TYPE.TREEVIEW:
				this.treeProvider.setRows(rows, id, false, '', '')
				break
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : totalRows
	 * 2. Comment    : 전체 행의 갯수
	 * 3. Author     : JSH
	 * <PRE>
	 */
	get totalRows() {
		// 초기 rows가 없을 시 파라미터를 []로 넘겨줘야함
		if (this.rows == undefined) {
			return 0
		} else {
			return this.rows.length
		}
	}
}
export default CRealGrid
