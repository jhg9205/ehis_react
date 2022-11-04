import { GRID_TYPE, MENU, MENU_DESC } from '@common/domain'
import { setHeaderInfo } from '@modules/reducer/layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { stateFields } from '@pages/menu/statistic/grid/fields'
import { stateColumns } from '@pages/menu/statistic/grid/columns'
import { stateLayout } from '@pages/menu/statistic/grid/layout'
import { stateRows } from '@pages/menu/statistic/grid/rows'
import CRealGrid from '@class/realgrid/CRealGrid'

const State = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(MENU.STATISTIC, MENU_DESC.STATISTIC2))
		const gridParam = {
			type: GRID_TYPE.TREEVIEW,
			grid: 'stateGrid',
			field: stateFields,
			columns: stateColumns,
			layout: stateLayout,
			height: 146,
			rows: stateRows,
			id: 'Area'
		}
		const RealGrid = new CRealGrid(gridParam)
	}, [])

	return (
		<>
			<form name="excelForm" method="post">
				<input type="hidden" name="reg1" />
				<input type="hidden" name="reg2" />
				<input type="hidden" name="eub" />
				<input type="hidden" name="aptType" />
				<input type="hidden" name="grade" />
				<input type="hidden" name="giyuk" />
				<div className="unitSchbox">
					<ul className="schArea">
						<li>
							<div className="formSelect">
								<p className="tit">시점</p>
								<div className="formSelect">
									<label htmlFor="year" className="ir">
										고시일
									</label>
									<select defaultValue="2020" name="year" id="year" title="조사시점" style={{ width: '240px' }}>
										<option value="2020">조사연차 1기(2018~2022)</option>
									</select>
								</div>
							</div>
							<div className="formSelect">
								<p className="tit">지역</p>
								<select name="" id="select02-01" title="전국"></select>
								<select name="" id="select02-02" title="시/군/구"></select>
								<select name="" id="select02-03" title="읍/면/동"></select>
							</div>
						</li>
						<li>
							<div className="formCheckbox typeBtn">
								<p className="tit">주택유형</p>
								<input type="checkbox" id="checkbox01-01" className="apt" value="1" />
								<label htmlFor="checkbox01-01">
									<span>아파트</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" id="checkbox01-02" className="apt" value="2" />
								<label htmlFor="checkbox01-02">
									<span>연립주택</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" id="checkbox01-03" className="apt" value="3" />
								<label htmlFor="checkbox01-03">
									<span>다세대주택</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" id="checkbox01-04" className="apt" value="4" />
								<label htmlFor="checkbox01-04">
									<span>단독주택</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" id="checkbox01-05" className="apt" value="5" />
								<label htmlFor="checkbox01-05">
									<span>다가구주택</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" id="checkbox01-06" className="apt" value="6" />
								<label htmlFor="checkbox01-06">
									<span>준주택(주거형오피스텔)</span>
								</label>
							</div>
						</li>
						<li>
							<div className="formCheckbox typeBtn">
								<p className="tit">등급별</p>

								<input type="checkbox" className="grd" value="1" id="checkbox02-01" />
								<label htmlFor="checkbox02-01">
									<span>1등급</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" className="grd" value="2" id="checkbox02-02" />
								<label htmlFor="checkbox02-02">
									<span>2등급</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" className="grd" value="3" id="checkbox02-03" />
								<label htmlFor="checkbox02-03">
									<span>3등급</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" className="grd" value="4" id="checkbox02-04" />
								<label htmlFor="checkbox02-04">
									<span>4등급</span>
								</label>
							</div>
						</li>
						<li>
							<div className="formCheckbox typeBtn">
								<p className="tit">용도지역</p>

								<input type="checkbox" className="giyuk" value="1" id="checkbox03-02" />
								<label htmlFor="checkbox03-02">
									<span>주거지역</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" className="giyuk" value="2" id="checkbox03-03" />
								<label htmlFor="checkbox03-03">
									<span>일반상업지역</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" className="giyuk" value="3" id="checkbox03-04" />
								<label htmlFor="checkbox03-04">
									<span>근린상업지역</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" className="giyuk" value="4" id="checkbox03-05" />
								<label htmlFor="checkbox03-05">
									<span>준공업지역</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" className="giyuk" value="5" id="checkbox03-06" />
								<label htmlFor="checkbox03-06">
									<span>자연녹지지역</span>
								</label>
							</div>
							<div className="formCheckbox typeBtn">
								<input type="checkbox" className="giyuk" value="6" id="checkbox03-07" />
								<label htmlFor="checkbox03-07">
									<span>용도 미지정</span>
								</label>
							</div>
						</li>
						<li>
							<div className="formSelect">
								<p className="tit">건축연수</p>

								<select defaultValue="1" name="bulidYear" id="bulidYear" title="건축연수">
									<option value="1">전체</option>
									<option value="0,20">20년 이하</option>
									<option value="20,30">20년 이상~30년미만</option>
									<option value="30,40">30년 이상~40년미만</option>
									<option value="40">40년이상</option>
								</select>
							</div>
							<div className="formSelect">
								<p className="tit">대지면적(㎡)</p>

								<select defaultValue="1" name="siteArea" id="siteArea" title="대지면적">
									<option value="1">전체</option>
									<option value="0,100">0㎡~100㎡</option>
									<option value="101,200">101㎡~200㎡</option>
									<option value="201,300">201㎡~300㎡</option>
									<option value="301">301㎡이상</option>
								</select>
							</div>
							<div className="formSelect">
								<p className="tit">건축면적(㎡)</p>

								<select defaultValue="1" name="buildArea" id="buildArea" title="건축면적">
									<option value="1">전체</option>
									<option value="0,20">0㎡~20㎡</option>
									<option value="21,50">20㎡~50㎡</option>
									<option value="51,80">51㎡~80㎡</option>
									<option value="81,110">81㎡~110㎡</option>
									<option value="111,200">111㎡~200㎡</option>
									<option value="201">201㎡이상</option>
								</select>
							</div>
						</li>
					</ul>
					<div className="unitBtn">
						<div className="unitBtn line">
							<button type="button">
								<span>검색</span>
							</button>
							<button type="button" className="white">
								<span>초기화</span>
							</button>
						</div>
					</div>
				</div>

				<div className="bothType">
					<div className="left">※ 총 주택수 (통계청 인구주택총조사, 2020년 기준)</div>
					<div className="right al-r">
						<button type="button">
							<i className="icon-icon_exel">엑셀다운로드</i>
						</button>
						<button type="button">
							<i className="icon-icon_print">프린트</i>
						</button>
					</div>
				</div>
				{/*<div className="unitTable">*/}
				{/*	<table style={{ width: 'auto' }}>*/}
				{/*		<caption>검색결과</caption>*/}
				{/*		<colgroup>*/}
				{/*			<col style={{ width: '110px' }} />*/}
				{/*			<col style={{ width: '85px' }} />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col style={{ width: '130px' }} />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col />*/}
				{/*			<col style={{ width: '100px' }} />*/}
				{/*			<col style={{ width: '100px' }} />*/}
				{/*			<col style={{ width: '100px' }} />*/}
				{/*		</colgroup>*/}
				{/*		<thead>*/}
				{/*			<tr>*/}
				{/*				<th scope="col" rowSpan={3}>*/}
				{/*					<span>지역</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col" rowSpan={3}>*/}
				{/*					<span>*/}
				{/*						전체*/}
				{/*						<br />*/}
				{/*						빈집수 (a)*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col" colSpan={9}>*/}
				{/*					<span>주택유형별</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col" colSpan={4}>*/}
				{/*					<span>등급별</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col" colSpan={6}>*/}
				{/*					<span>용도지역</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col" rowSpan={3}>*/}
				{/*					<span>*/}
				{/*						주택*/}
				{/*						<br />총 수 (a)*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th scope="col" rowSpan={3}>*/}
				{/*					<span>*/}
				{/*						비율(%)*/}
				{/*						<br />*/}
				{/*						(a/b)*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*			</tr>*/}
				{/*			<tr>*/}
				{/*				<th colSpan={3}>*/}
				{/*					<span>단독</span>*/}
				{/*				</th>*/}
				{/*				<th colSpan={4}>*/}
				{/*					<span>공동</span>*/}
				{/*				</th>*/}
				{/*				<th>*/}
				{/*					<span>준주거</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						그외*/}
				{/*						<br />*/}
				{/*						주택*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						1등급*/}
				{/*						<br />*/}
				{/*						(양호)*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						2등급*/}
				{/*						<br />*/}
				{/*						(일반)*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						3등급*/}
				{/*						<br />*/}
				{/*						(불량)*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						4등급*/}
				{/*						<br />*/}
				{/*						(철거대상)*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>주거지역</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						일반상업*/}
				{/*						<br />*/}
				{/*						지역*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						근린상업*/}
				{/*						<br />*/}
				{/*						지역*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						준공업*/}
				{/*						<br />*/}
				{/*						지역*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						자연녹지*/}
				{/*						<br />*/}
				{/*						지역*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*				<th rowSpan={2}>*/}
				{/*					<span>*/}
				{/*						용도*/}
				{/*						<br />*/}
				{/*						미지정*/}
				{/*					</span>*/}
				{/*				</th>*/}
				{/*			</tr>*/}
				{/*			<tr>*/}
				{/*				<th>*/}
				{/*					<span>소계</span>*/}
				{/*				</th>*/}
				{/*				<th>*/}
				{/*					<span>단독</span>*/}
				{/*				</th>*/}
				{/*				<th>*/}
				{/*					<span>다가구</span>*/}
				{/*				</th>*/}
				{/*				<th>*/}
				{/*					<span>소계</span>*/}
				{/*				</th>*/}
				{/*				<th>*/}
				{/*					<span>다세대</span>*/}
				{/*				</th>*/}
				{/*				<th>*/}
				{/*					<span>연립</span>*/}
				{/*				</th>*/}
				{/*				<th>*/}
				{/*					<span>아파트</span>*/}
				{/*				</th>*/}
				{/*				<th>*/}
				{/*					<span>주거용 오피스텔</span>*/}
				{/*				</th>*/}
				{/*			</tr>*/}
				{/*		</thead>*/}
				{/*		<tbody id="stateBody"></tbody>*/}
				{/*	</table>*/}
				{/*</div>*/}
				<div id="stateGrid" style={{ width: '100%', height: '400px' }}></div>
			</form>
		</>
	)
}

export default State
