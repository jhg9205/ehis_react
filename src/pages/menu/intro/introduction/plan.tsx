import binzibPlan_01 from '@images/sub/binzibPlan_01.jpg'
import binzibPlan_02 from '@images/sub/binzibPlan_02.jpg'
import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { BUSINESS, MENU_DESC } from '@common/domain'
import { useEffect } from 'react'
import PlanRural from '@pages/menu/intro/module/planRural'

const IntroPlan = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(BUSINESS.PLAN, MENU_DESC.BUSINESS3))
	}, [])

	return (
		<div className="bodyWrap3 bigCont">
			<div className="pageTitSub">[도시지역]</div>
			<div className="pageTitSub">개요</div>
			<div className="desc">
				<strong>개념</strong>빈집을 효율적으로 정비 또는 활용하기 위해 빈집정비에 관한 계획을 수립 시행하는 업무
			</div>
			<div className="desc">
				<strong>위탁</strong>시행규칙 제12조에 의해 시·군·구의 정비계획수립 업무 위탁
			</div>
			<div className="pageTitSub">개요</div>
			<div className="unitTable">
				<table>
					<caption>상세 내용</caption>
					<colgroup>
						<col style={{ width: '25%' }} />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">
								<span>업무구분</span>
							</th>
							<th scope="col">
								<span>세부내용</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span>계획의 개요</span>
							</td>
							<td>
								<span>빈집정비계획의 목표</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>현황분석</span>
							</td>
							<td>
								<span>대상구역의 인구, 기업, 빈집 현황(도) 및 위치도</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>계획의 기본구상</span>
							</td>
							<td>
								<span>기본구상도, 빈집밀집구역</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>빈집정비사업의 시행 계획</span>
							</td>
							<td>
								<span>
									빈집 철거계획, 안전조치 및 관리계획, 매입계획, 정비기반시설 설치계획, 임대주택의 건설 및 공급계획 등 빈집활용 계획
								</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>재원조달계획</span>
							</td>
							<td>
								<span>사업시행의 시급성, 주변지역에 미치는 파급효과 등을 고려하여 재원조달 계획과 연차별 집행계획수립</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>예산지원계획</span>
							</td>
							<td>
								<span>
									사회적기업, 협동조합, 공익법인이 시행하는 빈집정비사업 비용, 임대주택 공급비용, 정비기반시설 및 공동이용시설 설치비용
									등
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="pageTitSub">수립 절차</div>
			<div className="desc">
				실태조사 결과를 토대로 빈집 공급자, 이해관계자 등의 상호협력을 바탕으로 빈집정비계획 수립
				<br />- 도시·군기본계획, 지구단위계획 등 상위 계획과 연계 시·군·구 도시계획위원회 심의 진행
			</div>
			<div className="contArea01">
				<div className="tit">
					<span>빈집실태조사</span>
					<span>상위계획검토</span>
					<span>빈집정비계획 (안)</span>
					<span>주민공람 (14일이상)</span>
					<span>이해관계자의견수렴</span>
				</div>
				<div className="desc">
					<span>시·군·구</span>
					<span>시·군·구</span>
					<span>ㆍ착수보고 ㆍ자문회의 ㆍ사례연구 ㆍ중간보고 ㆍ최종보고</span>
					<span>시·군·구</span>
					<span>시·군·구</span>
				</div>
				<div className="tit">
					<span>
						의견반영여부심사
						<br />
						(시·군·구)
					</span>
					<span>
						심의
						<br />
						(시·군·구 도계위)
					</span>
					<span>결정(시·군·구)</span>
					<span>
						고시 및<br />
						시도지사 보고
					</span>
					<span>국토부장관 보고</span>
				</div>
				<div className="desc">
					<span></span>
					<span></span>
					<span></span>
					<span>시·군·구</span>
					<span>시·군·구</span>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="pageTitSub">[농촌지역]</div>
			<div className="researchCont">
				<div className="researchTit">
					<p>「농어촌정비법」 제64조</p>
				</div>
				<p>💠빈집정비계획의 수립</p>
				<ul>
					<li>
						<span>●</span> 빈집의 정비 및 활용의 기본방향·빈집의 현황 및 실태
					</li>
					<li>
						<span>●</span> 빈집의 철거·개축·수리·활용 등 빈집정비사업의 추진계획 및 시행방법
					</li>
					<li>
						<span>●</span> 빈집의 정비 및 활용을 위한 재원조달계획·빈집의 매입 및 활용에 관한 사항
					</li>
					<li>
						<span>●</span> 그 밖에 빈집정비를 위하여 필요한 사항으로서 대통령령으로 정하는 사항
					</li>
				</ul>
			</div>
			{/*<img src={binzibPlan_01} alt="빈집정비계획수립" className="forWin" />*/}
			{/*<img src={binzibPlan_02} alt="빈집정비계획수립 절차" className="forWin" />*/}
			<PlanRural />
		</div>
	)
}

export default IntroPlan
