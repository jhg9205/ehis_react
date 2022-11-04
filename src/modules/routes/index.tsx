import { Routes, Route } from 'react-router-dom'

import { PATH } from '@common/domain'
import Main from '@pages/main'
import Login from '@pages/login'
import Map from '@pages/map'
import Error from '@pages/error'
import PrivateRoute from './private'
import Intro from '@pages/menu/intro'
import Statistic from '@pages/menu/statistic'
import Support from '@pages/menu/support'
import CResult from '@pages/menu/conditionResult'
import PResult from '@pages/menu/repairPlanResult'

const Router = () => {
	return (
		<>
			<Routes>
				<Route path={PATH.LOGIN} element={<Login />} />
				<Route element={<PrivateRoute authentication={true} />}>
					<Route path={PATH.MAIN} element={<Main />} />
					<Route path={PATH.MAP} element={<Map />} />
					<Route path={PATH.INTRO} element={<Intro />} />
					<Route path={PATH.STATISTIC} element={<Statistic />} />
					<Route path={PATH.CONDITION_RESULT} element={<CResult />} />
					<Route path={PATH.REPAIRPLAN_RESULT} element={<PResult />} />
					<Route path={PATH.SUPPORT} element={<Support />} />
				</Route>

				<Route path={PATH.ERROR} element={<Error />} />
			</Routes>
		</>
	)
}

export default Router
