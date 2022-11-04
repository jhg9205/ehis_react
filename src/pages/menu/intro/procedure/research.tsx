import procedure1_02 from '@images/sub/procedure1_02.jpg'
import procedure1_03 from '@images/sub/procedure1_03.jpg'
import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { MENU_DESC, PROCEDURE } from '@common/domain'
import { useEffect } from 'react'
import ResearchCity from '@pages/menu/intro/module/researchCity'
import ResearchRural from '@pages/menu/intro/module/researchRural'

const IntroProResearch = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(PROCEDURE.RESEARCH, MENU_DESC.PROCEDURE1))
	}, [])

	return (
		<div className="procedureWrap2 smallCont" style={{ padding: '30px' }}>
			<ResearchCity />
			<ResearchRural />
		</div>
	)
}

export default IntroProResearch
