import { useEffect } from 'react'
import CMap from '@class/map'

import '@css/map.css'
import { mapInstance } from '@modules/reducer/map'
import { useDispatch } from 'react-redux'
import Toolbar from '@components/map/toolbar'
import { initLayer } from './layer/mng'

const Map = () => {
	let _map!: CMap

	const dispatch = useDispatch()

	useEffect(() => {
		init()
		initEvent()
	}, [])

	const init = () => {
		_map = new CMap()
		// _map.initMap()

		initLayer(_map)
		dispatch(mapInstance(_map))
	}

	const initEvent = () => {
		window.addEventListener('resize', () => {
			resize()
		})
	}

	const resize = () => {
		const size = getWindowSize()
		const elMap = document.querySelector<HTMLDivElement>('#map')!

		elMap.style.width = size.w.toString() + 'px'
		elMap.style.height = size.h.toString() + 'px'
		console.log('resize')
		_map.updateSize()
	}

	const getWindowSize = () => {
		const size: ISize = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		return size
	}

	const size = getWindowSize()

	const style = {
		width: size.w,
		height: size.h
	}

	return (
		<div id="map" className="map" style={style}>
			<Toolbar />
		</div>
	)
}

export default Map
