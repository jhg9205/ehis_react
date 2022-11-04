import { RootState } from '@modules/reducer'
import { useSelector } from 'react-redux'

const Header = ({ children }: any) => {
	const onGIS = () => {
		window.location.href = '/map'
		// window.location.replace('map')
	}

	const headers: string[] = useSelector((state: RootState) => state.layOutReducer.header)

	return (
		<header>
			<div className="top">
				<div className="location">
					{headers.map((text, idx) =>
						idx !== headers.length - 1 ? <span key={idx}>{headers[idx]}</span> : <strong key={idx}>{headers[idx]}</strong>
					)}
				</div>
				<ul className="util" id="topAraeNavi"></ul>
			</div>
		</header>
	)
}

export default Header
