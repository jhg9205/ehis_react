import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { CONDITION_RESULT, MENU_DESC, SUPPORT } from '@common/domain'
import { useEffect } from 'react'

const ConditionResult = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(CONDITION_RESULT.RESULT, MENU_DESC.CONDITION_RESULT))
	}, [])

	return (
		<>
			<div className="formSelect narrow" style={{ marginBottom: '2rem' }}>
				<label htmlFor="select02">지역</label>
				<select name="" id="select02" title="지역선택" className="w174"></select>
				<select name="" id="select03" title="지역선택" className="w174"></select>
				<select name="" id="select04" title="지역선택" className="w174"></select>
			</div>
			<div className="pageTitSub">빈집실태조사 결과 자료(도시)</div>
			<div className="btnList">
				<ul>
					<li>
						<a href="" style={{ paddingTop: '0', height: '70px' }}>
							사전조사서
						</a>
					</li>
					<li>
						<a href="" style={{ paddingTop: '0', height: '70px' }}>
							등급산정조사서
						</a>
					</li>
					<li>
						<a href="" style={{ paddingTop: '0', height: '70px' }}>
							실태조사결과보고서
						</a>
					</li>
				</ul>
			</div>
			<div className="pageTitSub">빈집실태조사 결과 자료(농어촌)</div>
			<div className="btnList">
				<ul>
					<li>
						<a href="" style={{ paddingTop: '0', height: '70px' }}>
							사전조사서
						</a>
					</li>
					<li>
						<a href="" style={{ paddingTop: '0', height: '70px' }}>
							추정결과
						</a>
					</li>
					<li>
						<a href="" style={{ paddingTop: '0', height: '70px' }}>
							현장조사서
						</a>
					</li>
					<li>
						<a href="" style={{ paddingTop: '0', height: '70px' }}>
							현장조사결과
						</a>
					</li>
				</ul>
			</div>
			<div className="pageTitSub">자료 안내</div>
			<div className="desc">
				- 사전조사서 :전기 사용량, 상수도 사용량, 기타 에너지사용량 등의 자료 또는 정보를 취합·분석한 결과
				<br />
				- 등급산정조사서 : 빈집의 등급산정에 필요한 기본정보를 건축물대장 등을 통해 확인하고 빈집의 주요 구조부 상태와 위해성 등에 따라
				등급을 산정한 결과
				<br />
				- 현장조사서 :추정한 빈집등의 위치와 현황 등에 대하여 현장에서 확인한 빈집등의 기본정보
				<br />- 실태조사결과보고서 : 실태조사 전체에 대한 결과 보고서
			</div>
		</>
	)
}
export default ConditionResult
