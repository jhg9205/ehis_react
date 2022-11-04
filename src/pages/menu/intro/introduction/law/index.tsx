import { Route, Routes } from 'react-router-dom'
import Law from '@pages/menu/intro/introduction/law/law'
import LawManage from '@pages/menu/intro/introduction/law/lawManage'

const LawIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Law />} />
			<Route path="/lawManage" element={<LawManage />} />
		</Routes>
	)
}
export default LawIndex
