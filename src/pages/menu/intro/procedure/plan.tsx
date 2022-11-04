import procedure2_02 from '@images/sub/procedure2_02.jpg'
import procedure2_03 from '@images/sub/procedure2_03.jpg'
import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { MENU_DESC, PROCEDURE } from '@common/domain'
import { useEffect } from 'react'
import PlanCity from '@pages/menu/intro/module/planCity'
import PlanRural from '@pages/menu/intro/module/planRural'

const IntroProResearch = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(PROCEDURE.PLAN, MENU_DESC.PROCEDURE2))
	}, [])

	return (
		<div className="procedureWrap1 smallCont" style={{ padding: '30px' }}>
			<PlanCity />
			<PlanRural />
		</div>
	)
}

export default IntroProResearch
