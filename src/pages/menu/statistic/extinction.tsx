import { MENU, MENU_DESC } from '@common/domain'
import { setHeaderInfo } from '@modules/reducer/layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Extinction = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(MENU.STATISTIC, MENU_DESC.STATISTIC5))
	}, [])

	return <>tab 55555</>
}

export default Extinction
