import IntroPlan from '@pages/menu/intro/introduction/plan'
import IntroBusiness from '@pages/menu/intro/introduction/business'
import IntroResearch from '@pages/menu/intro/introduction/research'
import IntroSys from '@pages/menu/intro/introduction/system'
import IntroLaw from '@pages/menu/intro/introduction/law/law'
import { Box, Tab, Tabs } from '@mui/material'
import useClasses from '@utils/useClasses'
import { useState } from 'react'
import { BUSINESS } from '@common/domain'
import TabPanel from '@components/ui/panel/panel'
import LawIndex from '@pages/menu/intro/introduction/law'
import { Link } from 'react-router-dom'

const Intro1 = () => {
	const [value, setValue] = useState(BUSINESS.SAUP)

	const defaultTab = {
		fontSize: '1.5rem',
		outline: 'none',
		fontFamily: 'Noto Sans KR',
		padding: '0 4rem 0 4rem',
		display: 'block',
		width: '100%'
	}

	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#666' }, defaultTab),
		activeTab: Object.assign({ color: '#5094e9', fontWeight: 'bold', border: 0 }, defaultTab),
		indicator: {
			background: '#5094e9',
			left: 0,
			width: '10px',
			color: '#fff'
		},
		sX: {
			width: '100%',
			margin: '0 0 40',
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
					<Tab
						label={
							<Link to="">
								<span style={value === BUSINESS.SAUP ? classes.activeTab : classes.customStyleOnTab}>빈집정비사업</span>
							</Link>
						}
					/>
					<Tab
						label={
							<Link to="">
								<span style={value === BUSINESS.RESEARCH ? classes.activeTab : classes.customStyleOnTab}>빈집실태조사</span>
							</Link>
						}
					/>
					<Tab
						label={
							<Link to="">
								<span style={value === BUSINESS.PLAN ? classes.activeTab : classes.customStyleOnTab}>빈집정비계획</span>
							</Link>
						}
					/>
					<Tab
						label={
							<Link to="">
								<span style={value === BUSINESS.SYSTEM ? classes.activeTab : classes.customStyleOnTab}>빈집정보시스템</span>
							</Link>
						}
					/>
					<Tab
						label={
							<Link to="">
								<span style={value === BUSINESS.LAW ? classes.activeTab : classes.customStyleOnTab}>빈집관련법규</span>
							</Link>
						}
					/>
				</Tabs>
			</Box>
			<TabPanel index={BUSINESS.SAUP} value={value}>
				<IntroBusiness />
			</TabPanel>
			<TabPanel index={BUSINESS.RESEARCH} value={value}>
				<IntroResearch />
			</TabPanel>
			<TabPanel index={BUSINESS.PLAN} value={value}>
				<IntroPlan />
			</TabPanel>
			<TabPanel index={BUSINESS.SYSTEM} value={value}>
				<IntroSys />
			</TabPanel>
			<TabPanel index={BUSINESS.LAW} value={value}>
				<LawIndex />
			</TabPanel>
		</div>
	)
}

export default Intro1
