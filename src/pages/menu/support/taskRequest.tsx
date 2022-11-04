import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { GRID_TYPE, MENU_DESC, SUPPORT } from '@common/domain'
import { useEffect, useState } from 'react'
import { supportFields } from '@pages/menu/support/grid/fields'
import { supportColumns } from '@pages/menu/support/grid/columns'
import { supportLayout } from '@pages/menu/support/grid/layout'
import { supportRows } from '@pages/menu/support/grid/rows'
import CRealGrid from '@class/realgrid/CRealGrid'

const TaskRequest = () => {
	const dispatch = useDispatch()
	const [rows, setRows] = useState(0)
	useEffect(() => {
		dispatch(setHeaderInfo(SUPPORT.SUPPORT, MENU_DESC.SUPPORT2))
		const gridParam = {
			type: GRID_TYPE.GRIDVIEW,
			grid: 'supportGrid',
			field: supportFields,
			columns: supportColumns,
			layout: supportLayout,
			height: 41,
			rows: supportRows
		}
		const RealGrid = new CRealGrid(gridParam)
		setRows(RealGrid.totalRows)
	}, [])

	return (
		<>
			<div className="topSchAreaGray">
				<div className="schLine">
					<div className="formSelect narrow">
						<label htmlFor="category">구분</label>
						<select defaultValue="" name="category" className="w200" id="category" title="구분">
							<option value="">전체</option>
							<option value="1">공지</option>
							<option value="2">요창</option>
						</select>
					</div>
					<div className="formText date">
						<label htmlFor="startDate">등록일자</label>
						<input type="text" id="startDate" name="datepicker-start" placeholder="YYYY-DD-MM" maxLength={10} />
					</div>
					<span>~</span>
					<div className="formText date">
						<label htmlFor="endDate" className="ir">
							종료일자
						</label>
						<input type="text" id="endDate" name="datepicker-end" placeholder="YYYY-DD-MM" maxLength={10} />
					</div>
				</div>
				<div className="schLine">
					<span className="formCheckbox">
						<input type="checkbox" name="schGBN1" id="schGBN1" value="title" />
						<label htmlFor="schGBN1">
							<span>제목</span>
						</label>
					</span>
					<span className="formCheckbox">
						<input type="checkbox" name="schGBN2" id="schGBN2" value="content" />
						<label htmlFor="schGBN2">
							<span>내용</span>
						</label>
					</span>
					<span className="formCheckbox">
						<input type="checkbox" name="schGBN3" id="schGBN3" value="user" />
						<label htmlFor="schGBN3">
							<span>작성자</span>
						</label>
					</span>
					<div className="formText word">
						<label htmlFor="schInput" className="ir">
							검색어
						</label>
						<input type="text" id="schInput" placeholder="검색어 입력" />
						<button className="btn-clear">
							<i className="icon-clear">지우기</i>
						</button>
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
				{/*			<col style={{ width: '5%' }} />*/}
				{/*			<col style={{ width: '7%' }} />*/}
				{/*			<col />*/}
				{/*			<col style={{ width: '10%' }} />*/}
				{/*			<col style={{ width: '10%' }} />*/}
				{/*			<col style={{ width: '5%' }} />*/}
				{/*			<col style={{ width: '5%' }} />*/}
				{/*		</colgroup>*/}
				{/*		<thead>*/}
				{/*			<tr>*/}
				{/*				<th scope="col">*/}
				{/*					<span>번호</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>구분</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>요청사항</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>작성자</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>등록일</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>조회</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>파일</span>*/}
				{/*				</th>*/}
				{/*			</tr>*/}
				{/*		</thead>*/}
				{/*		<tbody id="id_tbody">*/}
				{/*			<td colSpan={7}>*/}
				{/*				<span>결과가 없습니다.</span>*/}
				{/*			</td>*/}
				{/*		</tbody>*/}
				{/*	</table>*/}
				{/*</div>*/}
				<div id="supportGrid" style={{ width: '100%', height: '100px' }}></div>
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
export default TaskRequest
