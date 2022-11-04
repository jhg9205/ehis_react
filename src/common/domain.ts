/**
 * <PRE>
 * 1. Name : PATH
 * 2. Comment   : 도메인 주소 ENUM 관리
 * 3. Author    : CIK
 * <PRE>
 */
export enum PATH {
	//메인
	MAIN = '/',

	LOGIN = '/login',
	ERROR = '/*',

	//지도
	MAP = '/map',

	//메뉴
	INTRO = '/intro/*', // 업무 소개
	LAW = '/law',

	STATISTIC = '/statistic', // 빈집통계

	CONDITION = '/condition', // 빈집실태조사
	CONDITION_RESULT = '/condition_result', // 빈집실태조사 결과

	REPAIRPLAN = '/repairplan', // 빈집정비계획
	REPAIRPLAN_RESULT = '/repairplan_result', // 빈집정비계획 ㅕㄹ과

	SUPPORT = '/support' // 사업지원
}

/* ******************* 메뉴 리스트 ******************* */
export enum MENU {
	INTRO, //업무소개
	STATISTIC, //빈집통계
	CONDITION, //빈집실태조사
	CONDITION_RESULT, //빈집실태조사결과
	REPAIRPLAN, //빈집정비계획수립
	REPAIRPLAN_RESULT, //빈집정비계획수립 결과
	SUPPORT //사업지원
}

export enum MENU_NAME {
	INTRO = '/intro/*', //업무소개
	STATISTIC = '/statistic', //빈집통계
	CONDITION = '/condition', //빈집실태조사
	CONDITION_RESULT = '/condition_result', //빈집실태조사결과
	REPAIRPLAN = '/repairplan', //빈집정비계획수립
	REPAIRPLAN_RESULT = '/repairplan_result', //빈집정비계획수립 결과
	SUPPORT = '/support' //사업지원
}

export const MENU_DESC = {
	//업무소개 - 빈집정비사업
	BUSINESS1: ['Home', '업무 소개', '빈집정비사업', '빈집정비사업'],
	BUSINESS2: ['Home', '업무 소개', '빈집정비사업', '빈집실태조사'],
	BUSINESS3: ['Home', '업무 소개', '빈집정비사업', '빈집정비계획'],
	BUSINESS4: ['Home', '업무 소개', '빈집정비사업', '빈집정보시스템'],
	BUSINESS5: ['Home', '업무 소개', '빈집정비사업', '빈집관련법규'],

	//업무소개 - 절차도
	PROCEDURE1: ['Home', '업무 소개', '절차도', '빈집실태조사'],
	PROCEDURE2: ['Home', '업무 소개', '절차도', '빈집정비계획'],

	//빈집통계
	STATISTIC: ['Home', '빈집통계', '빈집발생원인'],
	STATISTIC2: ['Home', '빈집통계', '빈집현황조회'],
	STATISTIC3: ['Home', '빈집통계', '추정빈집추이'],
	STATISTIC4: ['Home', '빈집통계', '빈집의생활 SOC분석'],
	STATISTIC5: ['Home', '빈집통계', '지방소멸지수'],

	// 빈집실태조사
	CONDITION: ['Home', '빈집실태조사'], //빈집실태조사
	CONDITION_RESULT: ['Home', '빈집실태조사결과'], //빈집실태조사결과

	// 빈집정비계획수립
	REPAIRPLAN: ['Home', '빈집정비계획수립'], //빈집정비계획수립
	REPAIRPLAN_RESULT: ['Home', '빈집정비계획수립 결과'], //빈집정비계획수립 결과
	REPAIRPLAN_RESULT2: ['Home', '빈집정비계획수립 결과'],

	// 사업지원
	SUPPORT1: ['Home', '사업지원', '사업공정표'],
	SUPPORT2: ['Home', '사업지원', '업무요청사항'],
	SUPPORT3: ['Home', '사업지원', '활용사례']
}

// 빈집통계 탭메뉴구성
export enum STATISTIC {
	CAUSE,
	STATE,
	YEAR,
	SOC,
	EXTINCTION
}
// 업무소개 탭메뉴구성
export enum INTRO {
	BUSINESS, //빈집정비사업
	PROCEDURE //절차도
}
// 업무소개-빈집정비사업 탭메뉴구성
export enum BUSINESS {
	SAUP,
	RESEARCH,
	PLAN,
	SYSTEM,
	LAW
}
// 업무소개-절차도 탭메뉴구성
export enum PROCEDURE {
	RESEARCH,
	PLAN
}

// 빈집실태조사
export enum CONDITION {
	CONDITION
}

// 빈집실태조사 결과
export enum CONDITION_RESULT {
	RESULT
}

// 빈집정비계획수립
export enum REPAIRPLAN {
	REPAIRPLAN
}
// 빈집정비계획수립 결과
export enum REPAIRPLAN_RESULT {
	RESULT,
	BIZSTATE
}

// 사업지원
export enum SUPPORT {
	SUPPORT,
	REQUEST,
	USECASE
}

// 그리드 타입지정
export enum GRID_TYPE {
	GRIDVIEW,
	TREEVIEW
}
