import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { GRID_TYPE, MENU_DESC, REPAIRPLAN_RESULT } from '@common/domain'
import { useEffect, useState } from 'react'
import { planColumns } from '@pages/menu/repairPlanResult/grid/columns'
import { planFields } from '@pages/menu/repairPlanResult/grid/fields'
import { planRows } from '@pages/menu/repairPlanResult/grid/rows'
import { planLayout } from '@pages/menu/repairPlanResult/grid/layout'
import CRealGrid from '@class/realgrid/CRealGrid'

const RepairPlanResult = () => {
	const dispatch = useDispatch()
	const [rows, setRows] = useState(0)
	useEffect(() => {
		dispatch(setHeaderInfo(REPAIRPLAN_RESULT.RESULT, MENU_DESC.REPAIRPLAN_RESULT))
		const gridParam = {
			type: GRID_TYPE.GRIDVIEW,
			grid: 'planGrid',
			field: planFields,
			columns: planColumns,
			layout: planLayout,
			height: 41,
			rows: planRows
		}
		const RealGrid = new CRealGrid(gridParam)
		setRows(RealGrid.totalRows)
	}, [])
	return (
		<>
			<div className="topSchAreaGray">
				<div className="schLine">
					<div className="formSelect narrow">
						<label htmlFor="select02">지역</label>
						<select defaultValue="1" name="" id="select02" title="지역선택" className="w174">
							<option value="1">지역을 선택하세요</option>
						</select>
						<select defaultValue="1" name="" id="select03" title="지역선택" className="w174">
							<option value="1">지역을 선택하세요</option>
						</select>
					</div>
					<div className="formText word">
						<label htmlFor="schOrgan" className="ir">
							Label
						</label>
						<input type="text" id="schOrgan" placeholder="기관 검색" className="w595" />
					</div>
				</div>
				<div className="schLine">
					<div className="formText word">
						<label htmlFor="schTitle">제목</label>
						<input type="text" id="schTitle" placeholder="검색어 입력" className="w360" />
					</div>
					<div className="formText date">
						<label htmlFor="startDate">등록일자</label>
						<input type="text" id="startDate" name="datepicker-start" placeholder="YYYY-DD-MM" maxLength={10} />
					</div>
					<span>~</span>
					<div className="formText date" style={{ marginRight: '10px' }}>
						<label htmlFor="endDate" className="ir">
							종료일자
						</label>
						<input type="text" id="endDate" name="datepicker-end" placeholder="YYYY-DD-MM" maxLength={10} />
					</div>
					<button type="button" className="btnTxt blue">
						<span>검색</span>
					</button>
				</div>
			</div>
			<div className="boardListArea">
				<div className="bothType">
					<div className="left">
						전체{' '}
						<strong className="co-blue" id="totCnt">
							{rows}
						</strong>
						건
					</div>
					<div className="right">
						<div className="formSelect">
							<label htmlFor="selectSort01" className="ir">
								갯수
							</label>
							<select name="dataPerPage" id="dataPerPage" title="갯수">
								<option value="10">10</option>
								<option value="20">20</option>
								<option value="50">50</option>
							</select>
						</div>
					</div>
				</div>
				{/*<div className="unitTable">*/}
				{/*	<table>*/}
				{/*		<caption>테이블 타이틀</caption>*/}
				{/*		<colgroup>*/}
				{/*			<col style={{ width: '10%' }} />*/}
				{/*			<col style={{ width: '10%' }} />*/}
				{/*			<col style={{ width: '15%' }} />*/}
				{/*			<col />*/}
				{/*			<col style={{ width: '15%' }} />*/}
				{/*			<col style={{ width: '10%' }} />*/}
				{/*		</colgroup>*/}
				{/*		<thead>*/}
				{/*			<tr>*/}
				{/*				<th scope="col">*/}
				{/*					<span>광역</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>기초</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>기관</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>제목</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>등록일</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>파일</span>*/}
				{/*				</th>*/}
				{/*			</tr>*/}
				{/*		</thead>*/}
				{/*		<tbody id="id_tbody">*/}
				{/*			<tr>*/}
				{/*				<td colSpan={6}>*/}
				{/*					<span>결과가 없습니다.</span>*/}
				{/*				</td>*/}
				{/*			</tr>*/}
				{/*		</tbody>*/}
				{/*	</table>*/}
				{/*</div>*/}
				<div id="planGrid" style={{ width: '100%', height: '200px' }}></div>
				<div className="btnArea submit">
					<button type="button" className="btnTxt blue">
						<span>등록</span>
					</button>
				</div>
				<div className="paging">
					<div id="pagination-01"></div>
				</div>
			</div>
		</>
	)
}
export default RepairPlanResult
