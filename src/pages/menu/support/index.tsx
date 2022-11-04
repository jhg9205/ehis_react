import Layout from '@components/layouts/layout'
import Schedule from '@pages/menu/support/schedule'
import { SUPPORT } from '@common/domain'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import TaskRequest from '@pages/menu/support/taskRequest'
import UseCase from '@pages/menu/support/useCase'

const Support = () => {
	const [index, setIndex] = useState(SUPPORT.SUPPORT)

	const tabList: TabList = {
		[SUPPORT.SUPPORT]: <Schedule />,
		[SUPPORT.REQUEST]: <TaskRequest />,
		[SUPPORT.USECASE]: <UseCase />
	}

	const changeTab = (idx: number) => {
		setIndex(idx)
	}
	return (
		<Layout>
			<div className="tab">
				<ul>
					<li className={index === SUPPORT.SUPPORT ? 'curr' : ''} onClick={() => changeTab(SUPPORT.SUPPORT)}>
						<Link to={''}>사업공정표</Link>
					</li>
					<li className={index === SUPPORT.REQUEST ? 'curr' : ''} onClick={() => changeTab(SUPPORT.REQUEST)}>
						<Link to={''}>업무요청사항</Link>
					</li>
					<li className={index === SUPPORT.USECASE ? 'curr' : ''} onClick={() => changeTab(SUPPORT.USECASE)}>
						<Link to={''}>활용사례</Link>
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
export default Support
