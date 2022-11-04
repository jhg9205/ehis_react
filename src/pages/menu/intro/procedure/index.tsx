import { Box, Tab, Tabs } from '@mui/material'
import useClasses from '@utils/useClasses'
import { useState } from 'react'
import { PROCEDURE } from '@common/domain'
import TabPanel from '@components/ui/panel/panel'
import IntroProResearch from '@pages/menu/intro/procedure/research'
import IntroProPlan from '@pages/menu/intro/procedure/plan'

const Intro1 = () => {
	const [value, setValue] = useState(PROCEDURE.RESEARCH)

	const defaultTab = {
		fontSize: '1.5rem',
		outline: 'none',
		fontFamily: 'Noto Sans KR',
		padding: '0 2rem 0 2rem',
		display: 'block'
	}

	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#535353', fontWeight: '500' }, defaultTab),
		activeTab: Object.assign({ color: '#5094e9', fontWeight: 'bold', border: 0 }, defaultTab),
		indicator: {
			background: '#5094e9',
			left: 0,
			width: '10px',
			color: '#fff'
		},
		sX: {
			width: '100%',
			margin: '0 auto',
			borderBottom: 1,
			borderColor: '#d5d5d5'
		}
	})

	const classes = useClasses(useStyles)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<div id="intro1">
			<Box sx={classes.sX}>
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label={<span style={value === PROCEDURE.RESEARCH ? classes.activeTab : classes.customStyleOnTab}>빈집실태조사</span>} />
					<Tab label={<span style={value === PROCEDURE.PLAN ? classes.activeTab : classes.customStyleOnTab}>빈집정비계획</span>} />
				</Tabs>
			</Box>
			<TabPanel index={PROCEDURE.RESEARCH} value={value}>
				<IntroProResearch />
			</TabPanel>
			<TabPanel index={PROCEDURE.PLAN} value={value}>
				<IntroProPlan />
			</TabPanel>
		</div>
	)
}

export default Intro1
