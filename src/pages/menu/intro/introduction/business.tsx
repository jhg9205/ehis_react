import sub_1_2_1_01 from '@images/sub/sub_1_2_1_01.png'
import sub_1_2_1_02 from '@images/sub/sub_1_2_1_02.png'
import sub_1_2_1_03 from '@images/sub/sub_1_2_1_03.png'
import sub_1_2_1_04 from '@images/sub/sub_1_2_1_04.png'
import { useDispatch } from 'react-redux'
import { setHeaderInfo, setPopupShow } from '@modules/reducer/layout'
import { BUSINESS, MENU_DESC } from '@common/domain'
import { useEffect } from 'react'
import { TestButton } from '@components/ui/button'

const IntroBusiness = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(BUSINESS.SAUP, MENU_DESC.BUSINESS1))
	}, [])

	const onClick = () => {
		const popup = (
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
							<select name="" id="select01" title="연도">
								<option value="">년도</option>
							</select>
						</div>
						<div className="formSelect narrow">
							<select name="" id="select02" title="시도 선택"></select>
						</div>
						<div className="formSelect narrow">
							<select name="" id="select03" title="구군 선택"></select>
						</div>
						<button type="button" className="btnTxt blue narrow">
							<span>검색</span>
						</button>
						<div className="unitChart">
							<h3 className="chartLabel"></h3>
							<canvas id="doughnutChart"></canvas>
						</div>
					</div>
				</div>
			</>
		)

		dispatch(setPopupShow(true, popup))
	}

	const onClick2 = () => {
		const popup2 = (
			<>
				<div className="contArea01">
					<div className="imgArea type1">
						<p className="tit">빈집특례법</p>
						<p className="cont">
							<strong>
								빈집 및 소규모주택
								<br />
								정비에 관한 특례법
							</strong>
							1년이상 미거주 미사용 주택
						</p>
						<ul className="unitList dot">
							<li>단독주택(다가구 주택)</li>
							<li>공동주택(아파트, 연립 다세대)</li>
							<li>준주택(주거용 오피스텔)</li>
						</ul>
					</div>
					<div className="imgArea">
						<i className="icon">1단계</i>
						<p className="tit">건축물에너지 정보</p>
						<p className="cont">
							<strong>건축물 에너지통합 DB</strong>한국부동산원 DB
						</p>
						<ul className="unitList dot">
							<li>월별 가구당 전기에너지 사용량 10kwh이하</li>
							<li>연간 가구당 전기에너지 사용량 120kwh이하</li>
							<li>1년간 전기사용량 동일한 경우</li>
							<li>1년간 사용 중지된 전기계량기</li>
						</ul>
					</div>
					<div className="imgArea">
						<i className="icon">2단계</i>
						<p className="tit">상수도 정보</p>
						<p className="cont">
							<strong>상수도정보 DB</strong>지방자치단체 DB
							<br />
							기타에너지 사용량
							<br />
							공폐가정보DB
						</p>
						<ul className="unitList dot">
							<li>단수된 상수도 정보</li>
						</ul>
					</div>
				</div>
			</>
		)

		dispatch(setPopupShow(true, popup2))
	}

	return (
		<div className="bodyWrap">
			<TestButton onClick={onClick}>팝업</TestButton>
			<TestButton onClick={onClick2}>팝업2</TestButton>
			<div className="pageTitSub">배경 및 필요성</div>
			<div className="desc">
				인구 고령화ㆍ저출산 등으로 인한 주택수요 공급의 불균형으로 빈집이 계속해서 증가하고 있으며, 이에 따른 안전사고, 범죄발생,
				주거환경장애 등 빈집문제에 대한 체계적인 관리가 필요
			</div>
			<div className="pageTitSub">빈집이란?</div>
			<div className="desc">
				<strong>빈집이란?</strong>특별자치시장·특별자치도지사·시장·군수등이 거주 또는 사용 여부를 확인한 날 부터 1년 이상 아무도 거주
				또는 사용하지 아니하는 주택을 말합니다.
			</div>
			<div className="desc">
				<strong>빈집제외</strong>1. 공공임대주택
				<br />
				2. 미분양주택으로서 사용검사를 받은 후 5년이 경과하지 아니한 주택
				<br />
				3. 사용승인 또는 사용검사를 받지 아니한 주택
				<br />
				4. 준주택. 다만, 오피스텔은 제외
				<br />
				5. 별장 등 일시적 거주 또는 사용을 목적으로 하는 주택
			</div>
			<div className="pageTitSub">빈집정비 사업의 개요</div>
			<div className="desc">
				<strong>개념</strong>
				<strong>빈집정비사업이란?</strong>빈집을 개량 또는 철거하거나 효율적으로 관리 또는 활용하기 위한 사업을 말합니다.
			</div>
			<div className="desc">
				<strong>절차</strong>
			</div>
			<div className="imgUnit">
				<div className="imgArea" style={{ width: 'calc(25% - 11.5rem', padding: '5rem' }}>
					<img src={sub_1_2_1_01} alt="설명" />
					<p className="tit">빈집 실태조사</p>
					<p className="desc">&nbsp;</p>
				</div>
				<div className="imgArea" style={{ width: 'calc(25% - 11.5rem', padding: '5rem' }}>
					<img src={sub_1_2_1_02} alt="설명" />
					<p className="tit">정비계획수립</p>
					<p className="desc">(시장·군수)</p>
				</div>
				<div className="imgArea" style={{ width: 'calc(25% - 11.5rem', padding: '5rem' }}>
					<img src={sub_1_2_1_03} alt="설명" />
					<p className="tit">사업시행계획인가</p>
					<p className="desc">사업시행자</p>
				</div>
				<div className="imgArea" style={{ width: 'calc(25% - 11.5rem', padding: '5rem' }}>
					<img src={sub_1_2_1_04} alt="설명" />
					<p className="tit">준공인가</p>
					<p className="desc">(정비활용)</p>
				</div>
			</div>
			<div className="pageTitSub">법적근거</div>
			<div className="unitTable">
				<table>
					<caption>상세 정보</caption>
					<colgroup>
						<col style={{ width: '30%' }} />
						<col style={{ width: '23%' }} />
						<col style={{ width: '30%' }} />
						<col style={{ width: '24%' }} />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">
								<span>수행근거</span>
							</th>
							<th scope="col">
								<span>실태조사</span>
							</th>
							<th scope="col">
								<span>정비계획수립</span>
							</th>
							<th scope="col">
								<span>정보시스템</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span>법 제50조 및 시행령 제42조 국토교통부 고시 제2022-92호</span>
							</td>
							<td>
								<span>시행령 제7조</span>
							</td>
							<td>
								<span>시행규칙 제12조</span>
							</td>
							<td>
								<span>시행령 제15조</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="pageTitSub">정비유형</div>
			<div className="contArea01">
				<div>
					<div id="mainCircle">
						<h5>빈집 정비 사업</h5>
					</div>
					<div className="subContArea">
						<div className="subCircle">
							<h5>연계</h5>
						</div>
						<div className="mainDiv">
							<div className="subDiv">
								<h6>소규모주택정비사업</h6>
								<p>자율주택정비사업</p>
							</div>
							<div className="subDiv">
								<h6>도시재생사업</h6>
								<p>도시재생뉴딜사업</p>
								<p>도시재생인정사업</p>
								<p>특화재생사업</p>
							</div>
						</div>
					</div>
					<div className="subContArea">
						<div className="subCircle">
							<h5>관리</h5>
						</div>
						<div className="mainDiv">
							<div className="subDiv">
								<h6>안전조치</h6>
								<p>안전스티커</p>
								<p>안전펜스</p>
								<p>구조보장</p>
							</div>
							<div className="subDiv">
								<h6>관리방안</h6>
								<p>모니터링</p>
								<p>경찰,소방서 연계</p>
							</div>
						</div>
					</div>
					<div className="subContArea">
						<div className="subCircle">
							<h5>철거</h5>
						</div>
						<div className="mainDiv">
							<div className="subDiv">
								<h6>직권철거</h6>
							</div>
							<div className="subDiv">
								<h6>철거비지원사업</h6>
								<p>쉼터/텃밭</p>
								<p>주차장</p>
							</div>
						</div>
					</div>
					<div className="subContArea">
						<div className="subCircle">
							<h5>활용</h5>
						</div>
						<div className="mainDiv">
							<div className="subDiv" style={{ width: '300px' }}>
								<h6>매입 및 리모델링</h6>
								<div className="subContent">
									<p>도서관</p>
									<p>주민공동시설</p>
								</div>
								<div className="subContent">
									<p>임대주택</p>
									<p>창업공간</p>
								</div>
								<div className="subContent">
									<p>공동작업장</p>
									<p>안심쉼터</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IntroBusiness
