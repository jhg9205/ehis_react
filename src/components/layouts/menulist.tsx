import { MENU, MENU_DESC, MENU_NAME } from '@common/domain'
import { Box, Tab, Tabs } from '@mui/material'
import useClasses from '@utils/useClasses'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { URL } from '@common/const'

const MenuList = () => {
	const getMenuIndex = () => {
		const pathname = location.pathname
		let idx: number = 0
		let menudesc: ArrayString = []

		switch (pathname) {
			case MENU_NAME.INTRO:
				idx = 0
				menudesc = MENU_DESC.BUSINESS1
				break
			case MENU_NAME.STATISTIC:
				idx = 1
				menudesc = MENU_DESC.STATISTIC
				break
			case MENU_NAME.CONDITION:
				idx = 2
				menudesc = MENU_DESC.BUSINESS1
				break
			case MENU_NAME.CONDITION_RESULT:
				idx = 3
				menudesc = MENU_DESC.CONDITION_RESULT
				break
			case MENU_NAME.REPAIRPLAN:
				idx = 4
				menudesc = MENU_DESC.REPAIRPLAN
				break
			case MENU_NAME.REPAIRPLAN_RESULT:
				idx = 5
				menudesc = MENU_DESC.REPAIRPLAN_RESULT
				break
			case MENU_NAME.SUPPORT:
				idx = 6
				menudesc = MENU_DESC.SUPPORT1
				break
		}

		console.log('getMenuIndex === >')

		return idx
	}

	const dispatch = useDispatch()
	const [value, setValue] = useState(getMenuIndex())

	const tabProps = (index: number) => {
		return {
			id: `vertical-tab-${index}`,
			'aria-controls': `vertical-tabpanel-${index}`
		}
	}

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)

		if (newValue === MENU.CONDITION) {
			window.open(URL.SERVER_URL + '/map', 'map', 'location=no')
			// const popup = window.open(url, name, `width=${width}, height=${height}, top=${top}, left=${left}, toolbar=no, menubar=no, location=no`);
		}
	}

	const defaultTab = {
		fontSize: '18px',
		lineHeight: '40px',
		width: '1035px',
		fontFamily: 'Noto Sans KR',
		letterSpacing: '-1px'
	}

	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#fff', fontWeight: '400' }, defaultTab),
		activeTab: Object.assign({ color: '#b4f9ff', fontWeight: '500' }, defaultTab),
		indicator: {
			background: '#b4f9ff',
			left: 0,
			width: '10px',
			color: '#fff'
		},
		sxProps: {
			flexGrow: 1,
			bgcolor: '#5094e9',
			display: 'flex',
			height: '100%'
		}
	})

	const classes = useClasses(useStyles)

	return (
		<div className="lnb">
			<h1>
				<img src="/src/assets/images/common/logo2.png" alt="빈집정보시스템" />
			</h1>
			<Box sx={classes.sxProps}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					TabIndicatorProps={{ style: classes.indicator }}
				>
					<Tab
						href="/intro"
						label={<span style={value === MENU.INTRO ? classes.activeTab : classes.customStyleOnTab}>업무소개</span>}
						{...tabProps(MENU.INTRO)}
					/>
					<Tab
						href="/statistic"
						label={<span style={value === MENU.STATISTIC ? classes.activeTab : classes.customStyleOnTab}>빈집통계</span>}
						{...tabProps(MENU.STATISTIC)}
					/>
					<Tab
						label={<span style={value === MENU.CONDITION ? classes.activeTab : classes.customStyleOnTab}>빈집실태조사</span>}
						{...tabProps(MENU.CONDITION)}
					/>
					<Tab
						href="/condition_result"
						label={
							<span style={value === MENU.CONDITION_RESULT ? classes.activeTab : classes.customStyleOnTab}>빈집실태조사 결과</span>
						}
						{...tabProps(MENU.CONDITION_RESULT)}
					/>
					<Tab
						href="/map"
						label={<span style={value === MENU.REPAIRPLAN ? classes.activeTab : classes.customStyleOnTab}>빈집정비계획수립</span>}
						{...tabProps(MENU.REPAIRPLAN)}
					/>
					<Tab
						href="/repairplan_result"
						label={
							<span style={value === MENU.REPAIRPLAN_RESULT ? classes.activeTab : classes.customStyleOnTab}>
								빈집정비계획수립 결과
							</span>
						}
						{...tabProps(MENU.REPAIRPLAN_RESULT)}
					/>
					<Tab
						href="/support"
						label={<span style={value === MENU.SUPPORT ? classes.activeTab : classes.customStyleOnTab}>사업지원</span>}
						{...tabProps(MENU.SUPPORT)}
					/>
				</Tabs>
			</Box>
		</div>
	)
}

export default MenuList
