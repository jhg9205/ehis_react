import sub_1_2_2_01 from '@images/sub/sub_1_2_2_01.png'
import sub_1_2_2_02 from '@images/sub/sub_1_2_2_02.png'
import sub_1_2_2_03 from '@images/sub/sub_1_2_2_03.png'
import sub_1_2_2_04 from '@images/sub/sub_1_2_2_04.png'
import sub_1_2_2_05 from '@images/sub/sub_1_2_2_05.png'
import sub_1_2_2_06 from '@images/sub/sub_1_2_2_06.png'
import sub_1_2_2_07 from '@images/sub/sub_1_2_2_07.png'
import binzibCondition_01 from '@images/sub/binzibCondition_01.jpg'
import binzibCondition_02 from '@images/sub/binzibCondition_02.jpg'
import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { BUSINESS, MENU_DESC } from '@common/domain'
import { useEffect } from 'react'
import ResearchRural from '@pages/menu/intro/module/researchRural'
const IntroResearch = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(BUSINESS.RESEARCH, MENU_DESC.BUSINESS2))
	}, [])

	return (
		<div className="bodyWrap2 bigCont">
			<div className="pageTitSub">[도시지역]</div>
			<div className="pageTitSub">개요</div>
			<div className="desc">
				<strong>개념</strong>법 제5조 및 시행령 제6조에 따라 빈집으로 추정되는 주택의 물리적·권리적 현황, 소유자 의견 등을 조사하여
				빈집확인 및 등급 산정 업무
			</div>
			<div className="desc">
				<strong>위탁</strong>시행령 제7조에 의해 시·군·구의 실태조사 업무 위탁
			</div>
			<div className="pageTitSub">조사 내용</div>
			<div className="desc">
				<strong>빈집 추정</strong>
			</div>
			<div className="contArea01">
				<div className="imgArea type1">
					<p className="tit">빈집특례법</p>
					<img src={sub_1_2_2_01} alt="" />
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
					<img src={sub_1_2_2_02} alt="" />
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
					<img src={sub_1_2_2_03} alt="" />
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
			<div className="desc">
				<strong>사전조사</strong>
				<strong>자료 또는 정보를 통해 빈집 등 여부를 확인하고, 현장조사 대상을 선별하기 위한 조사</strong>
			</div>
			<div className="desc">
				<strong>등급산정조사</strong>
				<strong>확인된 빈집의 상태 및 위해 수준 등을 조사하여 빈집의 등급을 산정하는 조사</strong>
			</div>
			<div className="desc">
				<strong>현장조사</strong>
				<strong>빈집 등에 대하여 현장 관찰 및 면담 등을 통해 빈집 여부를 확인하는 조사</strong>
			</div>
			<div className="pageTitSub">조사 절차</div>
			<div className="desc">
				빈집실태조사 목록 추출 &gt; 조사자 배정 및 DM발송 &gt; 빈집 공급자 의견수렴 &gt; 실태조사 계획 및 알림 공고 &gt; 실태조사 수행
				&gt; 확인점검 및 재조사
			</div>
			<div className="contArea02">
				<div className="imgArea">
					<p className="tit">
						1단계<strong>조사목록 추출</strong>
					</p>
					<img src={sub_1_2_2_04} alt="" />
					<p className="subTit">비집실태조사 목록추출</p>
					<ul className="unitList dot">
						<li>건물에너지사용</li>
						<li>상수도 정보</li>
						<li>제외대상</li>
						<li>5면 미만 미분양주택</li>
						<li>공공임대주택</li>
					</ul>
				</div>
				<div className="imgArea">
					<p className="tit">
						2단계<strong>조사자 배정 및 DM발송</strong>
					</p>
					<img src={sub_1_2_2_05} alt="" />
					<p className="subTit">
						REB(한국부동산원)
						<br />
						전문조사인력
					</p>
				</div>
				<div className="imgArea">
					<p className="tit">
						3단계<strong>실태조사 및 결과통지</strong>
					</p>
					<img src={sub_1_2_2_06} alt="" />
					<p className="subTit">실태조사 및 결과통지</p>
					<ul className="unitList dot">
						<li>실태조사 알림공고 출입일 7일전 실태조사 계획 14일간</li>
						<li>
							빈집판정 및 등급산정
							<br />- 빈집여부 등급(1~4) 확인
							<br />
							(빈집정보시스템 자동동기화)
						</li>
						<li>조사결과 통지</li>
					</ul>
				</div>
				<div className="imgArea">
					<p className="tit">
						4단계<strong>확인점검 및 재조사</strong>
					</p>
					<img src={sub_1_2_2_07} alt="" />
					<p className="subTit">
						실태조사 결과확인 및<br />
						재조사 의뢰·실시
					</p>
					<ul className="unitList dot">
						<li>확인점검 대상 접수</li>
						<li>재조사 실시</li>
						<li>변동사항 통지</li>
					</ul>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<div className="pageTitSub">[농촌지역]</div>
			<div id="research01" style={{ display: 'inline-flex' }}>
				<div className="researchCont">
					<div className="researchTit">
						<p>「농어촌정비법」 제64조의2</p>
					</div>
					<p>💠빈집실태조사</p>
					<ul>
						<li>
							<span>●</span> 빈집의 소재 현황
						</li>
						<li>
							<span>●</span> 빈집의 관리 상황 및 방치기간
						</li>
						<li>
							<span>●</span> 빈집의 소유자 및 권리관계
						</li>
						<li>
							<span>●</span> 빈집 및 그 대지에 설치된 시설 또는 인공구조물 등의 현황
						</li>
						<li>
							<span>●</span> 그 밖에 빈집 발생 사유 등 대통령령으로 정하는 사항
						</li>
					</ul>
				</div>
				<div className="researchCont">
					<div className="researchTit">
						<p>「농어촌정비법」 시행령 제59조의3</p>
					</div>
					<p>💠빈집실태조사의 내용</p>
					<ul>
						<li>
							<span>●</span> 빈집의 발생 사유
						</li>
						<li>
							<span>●</span> 빈집 및 그 대지에 인접한 도로 및 건축물 등의 현황
						</li>
						<li>
							<span>●</span> 빈집 및 그 대지의 물리적 안전상태
						</li>
						<li>
							<span>●</span> 빈집의 설계도서 현황
						</li>
						<li>
							<span>●</span> 빈집의 관리·정비 방법에 대한 소유자,점유자 또는 관리인의 의견
						</li>
						<li>
							<span>●</span> 그 밖에 시장·군수·구청장 등이 빈집정비계획 수립·시행 및 빈집의 관리·정비를 위해 필요하다고 인정하는 사항
						</li>
					</ul>
				</div>
			</div>
			<ResearchRural />
		</div>
	)
}

export default IntroResearch
