import { Box, Typography } from '@mui/material'

const TabPanel = (props: ITabPanelProps) => {
	const { children, value, index } = props

	return (
		<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography component={'span'}>{children}</Typography>
				</Box>
			)}
		</div>
	)
}
export default TabPanel
