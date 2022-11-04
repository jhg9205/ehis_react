import { BrowserRouter } from 'react-router-dom'
import Router from '@modules/routes'
import { useEffect } from 'react'

const Main = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	)
}

export default Main
