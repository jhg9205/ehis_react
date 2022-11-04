import Layout from '@components/layouts/layout'
import RepairPlanResult from '@pages/menu/repairPlanResult/repairPlanResult'
import { REPAIRPLAN_RESULT, SUPPORT } from '@common/domain'
import { Link } from 'react-router-dom'
import Schedule from '@pages/menu/support/schedule'
import TaskRequest from '@pages/menu/support/taskRequest'
import UseCase from '@pages/menu/support/useCase'
import { useState } from 'react'
import BizState from '@pages/menu/repairPlanResult/bizState'

const PResult = () => {
	const [index, setIndex] = useState(REPAIRPLAN_RESULT.RESULT)

	const tabList: TabList = {
		[REPAIRPLAN_RESULT.RESULT]: <RepairPlanResult />,
		[REPAIRPLAN_RESULT.BIZSTATE]: <BizState />
	}

	const changeTab = (idx: number) => {
		setIndex(idx)
	}
	return (
		<Layout>
			<div className="tab">
				<ul>
					<li className={index === REPAIRPLAN_RESULT.RESULT ? 'curr' : ''} onClick={() => changeTab(REPAIRPLAN_RESULT.RESULT)}>
						<Link to={''}>수립결과</Link>
					</li>
					<li className={index === REPAIRPLAN_RESULT.BIZSTATE ? 'curr' : ''} onClick={() => changeTab(REPAIRPLAN_RESULT.BIZSTATE)}>
						<Link to={''}>빈집밀집구역</Link>
					</li>
				</ul>
			</div>
			<div className="contents2">
				<div className="cont" style={{ width: '100%', height: '100%' }}>
					{tabList[index]}
				</div>
			</div>
		</Layout>
	)
}
export default PResult
