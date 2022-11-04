import Footer from './footer'
import Header from './header'

import '@css/layout.css'
import { RootState } from '@modules/reducer'
import { useSelector } from 'react-redux'
import MenuList from './menulist'
import Popup from '@components/ui/popup'

const Layout = (props: { children: React.ReactNode }) => {
	const isPopup: boolean = useSelector((state: RootState) => state.layOutReducer.isPopup)
	const el: React.ReactNode = useSelector((state: RootState) => state.layOutReducer.children)

	return (
		<div id="wrap">
			<MenuList />
			<div className="container">
				<Header />
				<main>
					<div className="contents">
						<div>{props.children}</div>
					</div>
				</main>
				{/* <Footer /> */}
			</div>
			<Popup id="popupWrap" open={isPopup} styleType={0}>
				<>{el}</>
			</Popup>
		</div>
	)
}

export default Layout
