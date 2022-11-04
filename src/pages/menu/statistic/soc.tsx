import { MENU, MENU_DESC } from '@common/domain'
import { setHeaderInfo } from '@modules/reducer/layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Soc = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(MENU.STATISTIC, MENU_DESC.STATISTIC4))
	}, [])

	return <>tab 44444</>
}

export default Soc
