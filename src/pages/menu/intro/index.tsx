import Layout from '@components/layouts/layout'
import { Link } from 'react-router-dom'
import Intro1 from '@pages/menu/intro/introduction'
import Intro2 from '@pages/menu/intro/procedure'
import React, { useState } from 'react'
import { INTRO } from '@common/domain'
import '@css/intro/intro.css'
import '@css/contents.css'
import '@css/common.css'
import '@css/ui/ui.css'
import '@css/realgrid.css'

const Intro = () => {
	const [index, setIndex] = useState(INTRO.BUSINESS)

	const tab: TabList = {
		[INTRO.BUSINESS]: <Intro1 />,
		[INTRO.PROCEDURE]: <Intro2 />
	}

	const clickTab = (index: number) => setIndex(index)

	return (
		<Layout>
			<div className="tab">
				<ul>
					<li className={index === INTRO.BUSINESS ? 'curr' : ''} onClick={() => clickTab(INTRO.BUSINESS)}>
						<Link to="">빈집정비사업</Link>
					</li>
					<li className={index === INTRO.PROCEDURE ? 'curr' : ''} onClick={() => clickTab(INTRO.PROCEDURE)}>
						<Link to="">절차도</Link>
					</li>
				</ul>
			</div>
			<div className="contents2">
				<div className="cont" style={{ width: '100%', height: '100%' }}>
					{tab[index]}
				</div>
			</div>
		</Layout>
	)
}

export default Intro
