import { GRID_TYPE, MENU, MENU_DESC } from '@common/domain'
import { setHeaderInfo } from '@modules/reducer/layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { yearFields } from '@pages/menu/statistic/grid/fields'
import { yearColumns } from '@pages/menu/statistic/grid/columns'
import { yearRows } from '@pages/menu/statistic/grid/rows'
import { yearLayout } from '@pages/menu/statistic/grid/layout'
import CRealGrid from '@class/realgrid/CRealGrid'

const Year = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(MENU.STATISTIC, MENU_DESC.STATISTIC3))
		const gridParam = {
			type: GRID_TYPE.GRIDVIEW,
			grid: 'yearGrid',
			field: yearFields,
			columns: yearColumns,
			layout: yearLayout,
			height: 41,
			rows: yearRows
		}
		const RealGrid = new CRealGrid(gridParam)
	}, [])

	return (
		<>
			<h4 className="pageTitSub">산정방법</h4>

			<div className="unitBox">
				<ul className="unitList dot">
					<li>총 주택수 (통계청 인구주택총조사, 2020년 기준)</li>
					<li>전기 : 국가건축물에너지정보시스템 추출(전기사용량 기준)</li>
				</ul>
				<ul className="unitList bili co-blue">
					<li>해당 통계는 추정 통계로서 실제 수치와 상이 할 수 있습니다.</li>
					<li>통계 생성 기준시점(2020)</li>
				</ul>
				<div className="chartArea">
					<div className="unitLegend">
						<span className="bar">
							<i></i>빈집수(호)
						</span>
						<span className="bar2">
							<i></i>빈집추정물량(호)
						</span>
						<span className="line">
							<i></i>빈집추정물량증가율(%)
						</span>
					</div>
					<div className="unitChart">
						<canvas id="barChart"></canvas>
					</div>
				</div>
			</div>

			<div className="bothType type2 v3">
				<div className="left">
					<div className="formSelect narrow">
						<select defaultValue="1" name="" id="select01" title="연도">
							<option value="1" disabled>
								연도
							</option>
							<option value="">2020년</option>
						</select>
					</div>
					<div className="formSelect narrow">
						<select defaultValue="1" name="" id="select03" title="지역">
							<option value="1" disabled>
								지역
							</option>
						</select>
					</div>
					<div className="formSelect narrow">
						<select defaultValue="1" name="" id="select04" title="시/군/구">
							<option value="1" disabled>
								시/군/구
							</option>
						</select>
					</div>

					<button type="button" className="btnTxt blue narrow">
						<span>검색</span>
					</button>
				</div>
				<div className="right al-r">
					<button type="button">
						<i className="icon-icon_exel">엑셀다운로드</i>
					</button>
					<button type="button">
						<i className="icon-icon_print">프린트</i>
					</button>
				</div>
			</div>
			<form name="frm" method="post">
				<input type="hidden" id="reg1" name="reg1" />
				<input type="hidden" id="reg2" name="reg2" />
				<input type="hidden" id="year" name="year" />
				{/*<div className="unitTable">*/}
				{/*	<table>*/}
				{/*		<caption>검색결과</caption>*/}
				{/*		<colgroup>*/}
				{/*			<col style={{ width: '20rem' }} />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col style={{ width: '20rem' }} />*/}
				{/*		</colgroup>*/}
				{/*		<thead>*/}
				{/*			<tr>*/}
				{/*				<th scope="col">*/}
				{/*					<span>지역</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>총 주택수(a)</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>전기</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>상수도</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>소개</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>빈집추정물량(b)</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col">*/}
				{/*					<span>비율 (총 주택수 대비) (b)/(a)</span>*/}
				{/*				</th>*/}
				{/*			</tr>*/}
				{/*		</thead>*/}
				{/*		<tbody id="yearList"></tbody>*/}
				{/*	</table>*/}
				{/*</div>*/}
				<div id="yearGrid" style={{ width: '100%', height: '200px' }}></div>
			</form>
		</>
	)
}

export default Year
