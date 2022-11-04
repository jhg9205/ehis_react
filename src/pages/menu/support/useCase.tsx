import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { MENU_DESC, SUPPORT } from '@common/domain'
import { useEffect } from 'react'

const UseCase = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(SUPPORT.SUPPORT, MENU_DESC.SUPPORT3))
	}, [])
	return (
		<>
			<div className="topSchArea">
				<div className="formSelect narrow">
					<select defaultValue="" name="project" id="project" title="사업선택">
						<option value="">사업선택</option>
						<option value="1">빈집지원사업</option>
						<option value="2">소규모주택정비사업</option>
					</select>
				</div>
				<div className="formSelect narrow">
					<select defaultValue="" name="category" id="category" title="유형선택">
						<option value="">유형선택</option>
						<option value="1">철거형</option>
						<option value="2">리모델링형</option>
						<option value="3">합필형</option>
						<option value="4">자율형</option>
						<option value="5">협정형</option>
					</select>
				</div>
				<div className="formSelect narrow">
					<select defaultValue="" name="example" id="example" title="사례선택">
						<option value="">사례선택</option>
						<option value="1">예술가 레지던시</option>
						<option value="2">작은(장난감)도서관</option>
						<option value="3">임대주택</option>
						<option value="4">공동작업장(공구함)</option>
						<option value="5">창업인큐베이터</option>
					</select>
				</div>
				<div className="formText">
					<label htmlFor="text01" className="ir">
						Label
					</label>
					<input type="text" id="text01" placeholder="검색어 입력" />
					<button className="btn-clear">
						<i className="icon-clear">지우기</i>
					</button>
				</div>
				<button type="button" className="btnTxt blue" id="btn_sch">
					<span>검색</span>
				</button>
				<button type="button" className="btnTxt darkGray" id="btn_regist">
					<span>등록</span>
				</button>
			</div>
			<div className="boardListArea">
				<ul className="imgType" id="id_ul_content"></ul>
				<div className="paging">
					<div id="pagination-01"></div>
				</div>
			</div>
		</>
	)
}
export default UseCase
