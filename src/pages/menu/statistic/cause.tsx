import { GRID_TYPE, MENU, MENU_DESC } from '@common/domain'
import { setHeaderInfo, setPopupShow } from '@modules/reducer/layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { causeColumns } from '@pages/menu/statistic/grid/columns'
import { causeFields } from '@pages/menu/statistic/grid/fields'
import { causeLayout } from '@pages/menu/statistic/grid/layout'
import { causeRows } from '@pages/menu/statistic/grid/rows'
import CRealGrid from '@class/realgrid/CRealGrid'
import SelectYear from '@components/ui/button/selectbox'
import { TestButton } from '@components/ui/button'
import {$GET, $POST} from "@utils/request";
import {AxiosResponse} from "axios";

const Cause = () => {
	const dispatch = useDispatch()

	let RealGrid: CRealGrid
	useEffect(() => {
		dispatch(setHeaderInfo(MENU.STATISTIC, MENU_DESC.STATISTIC))
		const gridParam = {
			type: GRID_TYPE.TREEVIEW,
			grid: 'causeGrid',
			field: causeFields,
			columns: causeColumns,
			layout: causeLayout,
			height: 83,
			rows: causeRows,
			id: 'Area'
		}
		RealGrid = new CRealGrid(gridParam)
	}, [])

	const test = () => {
		$POST('/api/jwt/test.do',{},(res:AxiosResponse) => {
		})
	}


	return (
		<>
			<h4 className="pageTitSub">빈집 발생 원인</h4>
			<div className="bothType">
				<div className="left">
					<p className="tit">빈집 발생 원인을 ‘개인적 요인’, ‘경제적 요인’, ‘지역적 요인’ 으로 구분</p>
					<ul className="unitList dash">
						<li>
							개인적 요인
							<br />
							소유권 문제로 인한 방치, 임차인과의 갈등 요인 해당
						</li>
						<li>
							경제적 요인
							<br />
							경제적 어려움(파산, 세금 체납, 수리비 부담 등), 부동산 거래 중단 해당
						</li>
						<li>
							지역적 요인
							<br />
							재개발·재건축 기대, 주요 기반시설의 이전, 사업지역 쇠퇴 등 해당
						</li>
					</ul>
				</div>
				<div className="right al-r">
					<div className="formSelect narrow">
						<SelectYear from={2015} to={2025} />
					</div>
					<div className="formSelect narrow">
						<select name="" id="select02" title="시도 선택"></select>
					</div>
					<div className="formSelect narrow">
						<select name="" id="select03" title="구군 선택"></select>
					</div>
					<button type="button" className="btnTxt blue narrow" onClick={test}>
						<span>검색</span>
					</button>
					<div className="unitChart">
						<h3 className="chartLabel"></h3>
						<canvas id="doughnutChart"></canvas>
					</div>
				</div>
			</div>
			{/*<div className="unitTable">*/}
			{/*	<table>*/}
			{/*		<caption>검색결과</caption>*/}
			{/*		<colgroup>*/}
			{/*			<col style={{ width: '20%' }} />*/}
			{/*			<col style={{ width: '20%' }} />*/}
			{/*			<col style={{ width: '20%' }} />*/}
			{/*			<col style={{ width: '10%' }} />*/}
			{/*			<col style={{ width: '10%' }} />*/}
			{/*		</colgroup>*/}
			{/*		<thead>*/}
			{/*			<tr>*/}
			{/*				<th rowSpan={2}>*/}
			{/*					<span>지역</span>*/}
			{/*				</th>*/}
			{/*				<th colSpan={3}>*/}
			{/*					<span>빈집 발생원인</span>*/}
			{/*				</th>*/}
			{/*				<th rowSpan={2}>*/}
			{/*					<span>빈집 공개 동의</span>*/}
			{/*				</th>*/}
			{/*				<th rowSpan={2}>*/}
			{/*					<span>공공 지원 동의</span>*/}
			{/*				</th>*/}
			{/*			</tr>*/}
			{/*			<tr>*/}
			{/*				<th>*/}
			{/*					<span>개인적 요인</span>*/}
			{/*				</th>*/}
			{/*				<th>*/}
			{/*					<span>경제적 요인</span>*/}
			{/*				</th>*/}
			{/*				<th>*/}
			{/*					<span>지역적 요인</span>*/}
			{/*				</th>*/}
			{/*			</tr>*/}
			{/*		</thead>*/}
			{/*		<tbody id="causeBody"></tbody>*/}
			{/*	</table>*/}
			{/*</div>*/}
			<div id="causeGrid" style={{ width: '100%', height: '200px' }}></div>
			<p className="tblInfo al-r">※ 빈집 소유자 설문조사시 회신한 집계자료</p>
		</>
	)
}

export default Cause
