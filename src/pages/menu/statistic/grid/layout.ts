import { ColumnLayoutDirection, GroupShowMode, LayoutItem } from 'realgrid'

export const causeLayout = [
	'Area',
	{
		items: ['Cause1', 'Cause2', 'Cause3'],
		header: {
			text: '빈집발생원인'
		},
		direction: ColumnLayoutDirection.HORIZONTAL,
		groupShowMode: GroupShowMode.ALWAYS
	},
	'Agree1',
	'Agree2'
]

export const stateLayout = [
	'Area',
	'TotalEmpty',
	{
		name: 'Category',
		direction: 'horizon',
		width: '400',
		items: [
			{
				name: 'SingleGroup',
				direction: 'horizon',
				width: '154',
				items: ['SingleEa', 'Single', 'MultiFamily'],
				header: '단독'
			},
			{
				name: 'PublicGroup',
				direction: 'horizon',
				width: '150',
				items: ['PublicEa', 'MultiHousehold', 'Alliance', 'Apartment'],
				header: '공동'
			},
			{
				name: 'OfficeGroup',
				direction: 'horizon',
				width: '100',
				items: ['OfficeTel'],
				header: '준주거'
			},
			'Else'
		],
		header: '주택유형별'
	},
	{
		name: 'GradeGroup',
		direction: 'horizon',
		width: '240',
		items: ['Grade1', 'Grade2', 'Grade3', 'Grade4'],
		header: '등급별'
	},
	{
		name: 'PurposeGroup',
		direction: 'horizon',
		width: '480',
		items: ['ResidentArea', 'GeneralCommercial', 'NeighborCommercial', 'Industrial', 'Natural', 'Unspecified'],
		header: '용도지역'
	},
	'TotalHouse',
	'Rate'
]

export const yearLayout = ['Area', 'TotalHouse', 'Electric', 'Waterworks', 'Introduce', 'TotalEmpty', 'Rate']
