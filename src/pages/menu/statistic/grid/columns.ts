import { GridColumn, SeriesColumn, ValueColumn } from 'realgrid'

export const causeColumns = [
	{
		name: 'Area',
		fieldName: 'Area',
		type: 'data',
		width: '299',
		styles: {
			textAlignment: 'center'
		},
		header: '지역'
	},
	{
		name: 'Cause1',
		fieldName: 'Cause1',
		type: 'data',
		width: '280',
		styles: {
			textAlignment: 'center'
		},
		header: '개인적 요인'
	},
	{
		name: 'Cause2',
		fieldName: 'Cause2',
		type: 'data',
		width: '280',
		styles: {
			textAlignment: 'center'
		},
		header: '경제적 요인'
	},
	{
		name: 'Cause3',
		fieldName: 'Cause3',
		type: 'data',
		width: '170',
		styles: {
			textAlignment: 'center'
		},
		header: '지역적 요인'
	},
	{
		name: 'Agree1',
		fieldName: 'Agree1',
		type: 'data',
		width: '147',
		styles: {
			textAlignment: 'center'
		},
		header: '빈집 공개 동의'
	},
	{
		name: 'Agree2',
		fieldName: 'Agree2',
		type: 'data',
		width: '297',
		styles: {
			textAlignment: 'center'
		},
		header: '공공 지원 동의'
	}
]

export const stateColumns = [
	{
		name: 'Area',
		fieldName: 'Area',
		type: 'data',
		width: '75',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '지역'
	},
	{
		name: 'TotalEmpty',
		fieldName: 'TotalEmpty',
		type: 'data',
		width: '70',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '전체 빈집수(a)'
	},
	{
		name: 'SingleEa',
		fieldName: 'SingleEa',
		type: 'data',
		width: '47',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '소계'
	},
	{
		name: 'Single',
		fieldName: 'Single',
		type: 'data',
		width: '47',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '단독'
	},
	{
		name: 'MultiFamily',
		fieldName: 'MultiFamily',
		type: 'data',
		width: '60',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '다가구'
	},
	{
		name: 'PublicEa',
		fieldName: 'PublicEa',
		type: 'data',
		width: '47',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '소계'
	},
	{
		name: 'MultiHousehold',
		fieldName: 'MultiHousehold',
		type: 'data',
		width: '60',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '다세대'
	},
	{
		name: 'Alliance',
		fieldName: 'Alliance',
		type: 'data',
		width: '47',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '연립'
	},
	{
		name: 'Apartment',
		fieldName: 'Apartment',
		type: 'data',
		width: '60',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '아파트'
	},
	{
		name: 'OfficeTel',
		fieldName: 'OfficeTel',
		type: 'data',
		width: '97',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '주거용 오피스텔'
	},
	{
		name: 'Else',
		fieldName: 'Else',
		type: 'data',
		width: '47',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '그외주택'
	},
	{
		name: 'Grade1',
		fieldName: 'Grade1',
		type: 'data',
		width: '56.7',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '1등급(양호)'
	},
	{
		name: 'Grade2',
		fieldName: 'Grade2',
		type: 'data',
		width: '56.7',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '2등급(일반)'
	},
	{
		name: 'Grade3',
		fieldName: 'Grade3',
		type: 'data',
		width: '56.7',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '3등급(불량)'
	},
	{
		name: 'Grade4',
		fieldName: 'Grade4',
		type: 'data',
		width: '82.7',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '4등급(철거대상)'
	},
	{
		name: 'ResidentArea',
		fieldName: 'ResidentArea',
		type: 'data',
		width: '73',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '주거지역'
	},
	{
		name: 'GeneralCommercial',
		fieldName: 'GeneralCommercial',
		type: 'data',
		width: '73',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '일반상업지역'
	},
	{
		name: 'NeighborCommercial',
		fieldName: 'NeighborCommercial',
		type: 'data',
		width: '73',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '근린상업지역'
	},
	{
		name: 'Industrial',
		fieldName: 'Industrial',
		type: 'data',
		width: '60',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '준공업지역'
	},
	{
		name: 'Natural',
		fieldName: 'Natural',
		type: 'data',
		width: '73',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '자연녹지지역'
	},
	{
		name: 'Unspecified',
		fieldName: 'Unspecified',
		type: 'data',
		width: '76.8',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '용도미지정'
	},
	{
		name: 'TotalHouse',
		fieldName: 'TotalHouse',
		type: 'data',
		width: '69.3',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '주택 총 수(a)'
	},
	{
		name: 'Rate',
		fieldName: 'Rate',
		type: 'data',
		width: '72.3',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '비율(%)(a/b)'
	}
]

export const yearColumns = [
	{
		name: 'Area',
		fieldName: 'Area',
		type: 'data',
		width: '200',
		styles: {
			textAlignment: 'center',
			borderLeft: ' 1px solid #5583bc'
		},
		header: '지역'
	},
	{
		name: 'TotalHouse',
		fieldName: 'TotalHouse',
		type: 'data',
		width: '215.89',
		styles: {
			textAlignment: 'center'
		},
		header: '총 주택수(a)'
	},
	{
		name: 'Electric',
		fieldName: 'Electric',
		type: 'data',
		width: '215.89',
		styles: {
			textAlignment: 'center'
		},
		header: '전기'
	},
	{
		name: 'Waterworks',
		fieldName: 'Waterworks',
		type: 'data',
		width: '215.89',
		styles: {
			textAlignment: 'center'
		},
		header: '상수도'
	},
	{
		name: 'Introduce',
		fieldName: 'Introduce',
		type: 'data',
		width: '215.89',
		styles: {
			textAlignment: 'center'
		},
		header: '소개'
	},
	{
		name: 'TotalEmpty',
		fieldName: 'TotalEmpty',
		type: 'data',
		width: '215.94',
		styles: {
			textAlignment: 'center'
		},
		header: '빈집추정물량(b)'
	},
	{
		name: 'Rate',
		fieldName: 'Rate',
		type: 'data',
		width: '200',
		styles: {
			textAlignment: 'center'
		},
		header: '비율(총 주택수 대비)(b)/(a)'
	}
]
