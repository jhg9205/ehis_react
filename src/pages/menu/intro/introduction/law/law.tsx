import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { BUSINESS, MENU_DESC } from '@common/domain'
import { useEffect } from 'react'
import { Link, Route } from 'react-router-dom'

const IntroLaw = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(BUSINESS.LAW, MENU_DESC.BUSINESS5))
	}, [])

	return (
		<div className="bodyWrap5">
			<div className="btnArea al-r" id="btnLaw">
				<Link to={'/intro/lawManage'} type="button" className="btnTxt blue">
					<span>법령정보관리</span>
				</Link>
			</div>
			<ul className="listRule">
				<li>
					<i className="icon-rule_01"></i>
					<p className="tit"></p>
					<p className="cont">4234456</p>
					<div className="btnArea">
						<button type="button" className="btnTxt blue">
							<span>자세히 보기</span>
						</button>
						<div className="formText">
							<input type="text" id="textUrl01" value="http://223.171.78.71:8080/geoserver/wfs1" readOnly title="url" />
						</div>
						<button type="button" className="btnTxt darkGray">
							<span>복사</span>
						</button>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default IntroLaw
