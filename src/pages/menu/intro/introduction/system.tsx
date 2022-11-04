import sub_1_2_4_01 from '@images/sub/sub_1_2_4_01.png'
import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { BUSINESS, MENU_DESC } from '@common/domain'
import { useEffect } from 'react'

const IntroSys = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(BUSINESS.SYSTEM, MENU_DESC.BUSINESS4))
	}, [])

	return (
		<div className="bodyWrap4">
			<div className="pageTitSub">개요</div>
			<div className="desc">
				<strong>개념</strong>빈집의 효율적 정비를 위해 빈집추정 및 현황관리를 위한 정보시스템 구축
			</div>
			<div className="desc">
				<strong>위탁</strong>시행령 제15조에 의해 시·도의 위탁을 받아 빈집추정 및 실태조사 지원, 빈집활용 지원 등 빈집 확인부터
				빈집정비까지 원스톱 지원
				<br />- 한국부동산원의 전기에너지DB와 지자체 상수도DB를 기초로 빈집을 추정하여 ICT기반의 실태조사체계를 지원하기 위한 시스템
				구축 대행
			</div>
			<div className="pageTitSub">빈집정보시스템 구조</div>
			<div className="desc">
				<strong>
					<em>1단계</em>
				</strong>
				빈집추정 : 빈집추정 DB를 활용하여 지자체별 빈집물량 산출
				<br />- GIS기반의 공간정보와 감정원의 가격정보 등 다양한 부동산 DB 연동
			</div>
			<div className="contArea01">
				<p className="tit">빈집정보 DB</p>
				<div className="circle">
					<img src={sub_1_2_4_01} alt="" />
					<p className="tit">
						국가건물
						<br />
						에너지통합 DB
					</p>
					<p className="desc">한국부동산원 위탁관리</p>
				</div>
				<div className="circle">
					<img src={sub_1_2_4_01} alt="" />
					<p className="tit">주택가격 DB</p>
					<p className="desc">한국부동산원 조사운영</p>
				</div>
				<div className="circle">
					<img src={sub_1_2_4_01} alt="" />
					<p className="tit">상수도 DB</p>
					<p className="desc">지자체</p>
				</div>
				<div className="circle">
					<img src={sub_1_2_4_01} alt="" />
					<p className="tit">공폐가 DB</p>
					<p className="desc">기타에너지 사용량</p>
				</div>
			</div>
			<div className="desc">
				<strong>
					<em>2단계</em>
				</strong>
				실태조사 지원체계 : 시스템을 통해 빈집기초정보 및 실태조사목록 자동추출, 모바일 현장조사앱을 통한 효율적인 실태조사 지원
			</div>
			<div className="desc">
				<strong>
					<em>3단계</em>
				</strong>
				정비계획 현황 : 빈집정비계획 수립현황 모니터링 및 관련 자료 열람
			</div>
			<div className="desc">
				<strong>
					<em>4단계</em>
				</strong>
				빈집활용 : 빈집은행 구축, 통계표 제공, 빈집활용사업모델 발굴 지원
			</div>
		</div>
	)
}

export default IntroSys
