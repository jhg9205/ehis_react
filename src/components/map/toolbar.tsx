import { useSelector } from 'react-redux'
import CMap from '@class/map'
import { RootState } from '@modules/reducer'
import { visibility } from '@pages/map/layer/mng'
import { ALERT, LAYER } from '@common/const'
import { alert } from '@utils/alert'
import { TestButton } from '@components/ui/button'
import { useState } from 'react'
import * as d3 from "d3";
import {TopoJSON} from "ol/format";
import Cd3 from "@class/d3/Cd3";
import VectorLayer from "ol/layer/Vector";
import BaseLayer from "ol/layer/Base";
import Baselayer from "ol/layer/Base";

const Toolbar = () => {
	const map: CMap = useSelector((state: RootState) => state.mapReducer.map)

	const [color, setColor] = useState('#000')

	const Onclick = () => {
		map.zoomIn()
	}
	let HoverLayer:Baselayer
	let BubbleLayer:BaseLayer
	let wfs = true
	let wms = true
	const Onclick2 = () => {
		// visibility(LAYER.WFS.UFL_HPIP_LM, wfs)
		visibility(LAYER.WFS.UFL_HPIP_LM, wfs)
		wfs = !wfs
	}

	const Onclick3 = () => {
		// visibility(LAYER.WMS.UFL_HPIP_LM, wms)
		visibility('bb', wms)
		wms = !wms

		// wms ? setColor('#f00') : setColor('#000')
	}

	const Onclick4 = () => {
		// map.fullSave('base')
		map.customSave('ssss')
	}

	const Onclick5 = () => {
		alert.open('테스트내용')
	}
	const Onclick6 = () => {
		alert.confirm({
			// type: ALERT.CONFIRM,
			type: ALERT.CONFIRM_3B,
			text: '알림내용\r\n내용',
			confirmText: '저장',
			confirmCall: () => {
				alert.icon({ type: ALERT.SUCCESS, text: '저장완료' })
			},
			denyText: '삭제',
			denyCall: () => {
				alert.icon({ type: ALERT.WARNING, text: '삭제완료' })
			}
		})
	}

	const Onclick7 = () => {
		map.previous()
	}
	const Onclick8 = () => {
		map.next()
	}
	const Onclick9 = () => {
		const check = document.getElementById('btnReq8')
		d3.json('/src/assets/data/test2.json').then(function (data: TopoJSON|unknown) {
			if(!check!.classList.contains('active')){
				HoverLayer = new Cd3(data,map,'hover')
					map.addLayer(HoverLayer)
				check!.classList.add('active')
			}else {
				map.removeLayer(HoverLayer)
				check!.classList.remove('active')
			}
		})
	}
	const Onclick10 = () => {
		const check = document.getElementById('btnReq9')
			d3.json('/src/assets/data/test2.json').then(function (data: TopoJSON|unknown) {
				if(!check!.classList.contains('active')){
					BubbleLayer = new Cd3(data,map,'bubble')
					map.addLayer(BubbleLayer)
					check!.classList.add('active')
				}else {
					map.removeLayer(BubbleLayer)
					check!.classList.remove('active')
				}
			})
	}
	
	return (
		<div className="map_toolbar">
			<TestButton id="btnReq" color={color} onClick={Onclick}>
				+
			</TestButton>
			<TestButton id="btnReq" onClick={Onclick2}>
				WFS
			</TestButton>
			<TestButton id="btnReq2" color={color} onClick={Onclick3}>
				WMS
			</TestButton>
			<TestButton id="btnReq3" onClick={Onclick4}>
				Capture
			</TestButton>
			<TestButton id="btnReq4" onClick={Onclick5}>
				Alert 1
			</TestButton>
			<TestButton id="btnReq5" onClick={Onclick6}>
				Alert 2
			</TestButton>
			<TestButton id="btnReq6" onClick={Onclick7}>
				prev
			</TestButton>
			<TestButton id="btnReq7" onClick={Onclick8}>
				next
			</TestButton>
			<TestButton id="btnReq8" onClick={Onclick9}>
				맵Hover
			</TestButton>
			<TestButton id="btnReq9" onClick={Onclick10}>
				버블차트
			</TestButton>
		</div>
	)
}

export default Toolbar
