import { STATISTIC } from '@common/domain'
import Layout from '@components/layouts/layout'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cause from './cause'
import Extinction from './extinction'
import Soc from './soc'
import State from './state'
import Year from './year'

const Statistic = () => {
	const [index, setIndex] = useState(STATISTIC.CAUSE)
	const tabList: TabList = {
		[STATISTIC.CAUSE]: <Cause />,
		[STATISTIC.STATE]: <State />,
		[STATISTIC.YEAR]: <Year />,
		[STATISTIC.SOC]: <Soc />,
		[STATISTIC.EXTINCTION]: <Extinction />
	}

	const changeTab = (idx: number) => {
		setIndex(idx)
	}

	return (
		<Layout>
			<div className="tab">
				<ul>
					<li className={index === STATISTIC.CAUSE ? 'curr' : ''} onClick={() => changeTab(STATISTIC.CAUSE)}>
						<Link to={''}>빈집 발생 원인</Link>
					</li>
					<li className={index === STATISTIC.STATE ? 'curr' : ''} onClick={() => changeTab(STATISTIC.STATE)}>
						<Link to={''}>빈집현황 조회</Link>
					</li>
					<li className={index === STATISTIC.YEAR ? 'curr' : ''} onClick={() => changeTab(STATISTIC.YEAR)}>
						<Link to={''}>추정 빈집 추이</Link>
					</li>
					<li className={index === STATISTIC.SOC ? 'curr' : ''} onClick={() => changeTab(STATISTIC.SOC)}>
						<Link to={''}>빈집의 생활 SOC 분석</Link>
					</li>
					<li className={index === STATISTIC.EXTINCTION ? 'curr' : ''} onClick={() => changeTab(STATISTIC.EXTINCTION)}>
						<Link to={''}>지방소멸지수</Link>
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

export default Statistic
