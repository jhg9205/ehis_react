import Layout from '@components/layouts/layout'
import Schedule from '@pages/menu/support/schedule'
import ConditionResult from '@pages/menu/conditionResult/conditionResult'

const CResult = () => {
	return (
		<Layout>
			<div className="contents2">
				<div className="cont" style={{ width: '100%', height: '100%' }}>
					<ConditionResult />
				</div>
			</div>
		</Layout>
	)
}
export default CResult
