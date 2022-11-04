import Layout from '@components/layouts/layout'
import useClasses from '@utils/useClasses'
import { Box, Tab, Tabs } from '@mui/material'
import { BUSINESS } from '@common/domain'

const LawManage = () => {
	return (
		<>
			<div className="bothType">
				<div className="left">
					<div className="pageTitSub">법령정보관리</div>
				</div>
				<div className="right al-r">
					<button type="button" className="btnTxt">
						<span>목록</span>
					</button>
				</div>
			</div>
			<form name="frm" method="post">
				<input type="hidden" name="lawSeq" value="" />
				<input type="hidden" name="lawProject" value="" />
				<input type="hidden" name="lawTitle" value="" />
				<input type="hidden" name="lawNum" value="" />
				<input type="hidden" name="lawUrl" value="" />
				<input type="hidden" name="lawSort" value="" />
				<div className="topSchAreaGray type3">
					<div className="schLine">
						<div className="formSelect narrow sel">
							<select defaultValue="" name="project" id="select01" title="사업선택">
								<option value="" disabled>
									사업선택
								</option>
								<option value="1">빈집정비사업</option>
								<option value="2">소규모주택정비사업</option>
							</select>
						</div>
						<div className="formText tit">
							<input type="text" name="title" placeholder="제목입력" title="제목입력" />
							<button className="btn-clear">
								<i className="icon-clear">지우기</i>
							</button>
						</div>
						<div className="formSelect narrow view">
							<select name="sort" title="노출선택">
								<option value="1">1번 노출</option>

								<option value="2">2번 노출</option>
							</select>
						</div>
						<hr className="space" />
						<div className="formText date">
							<input type="text" name="enforceNum" placeholder="시행번호" title="시행번호" />
						</div>
						<div className="formText url">
							<input type="text" name="url" placeholder="URL" title="url" />
							<button className="btn-clear">
								<i className="icon-clear">지우기</i>
							</button>
						</div>
						<button type="button" className="btnTxt blue add">
							<span>신규등록</span>
						</button>
					</div>

					<div className="schLine type2" data-seq="1">
						<div className="formSelect narrow sel">
							<select defaultValue="" name="" id="select02" title="사업선택">
								<option value="1">빈집정비사업</option>
								<option value="2">소규모주택정비사업</option>
							</select>
						</div>
						<div className="formText tit">
							<input type="text" id="text02" placeholder="제목입력" title="제목입력" defaultValue="4234456" />
							<button className="btn-clear">
								<i className="icon-clear">지우기</i>
							</button>
						</div>
						<button type="button" className="btnTxt gray move up">
							<span>
								<i className="icon-btn_up"></i>
							</span>
						</button>
						<button type="button" className="btnTxt blue modify">
							<span>수정</span>
						</button>
						<hr className="space" />
						<div className="formText date">
							<input type="text" id="text02-1" placeholder="시행번호" title="시행번호" defaultValue="111" />
						</div>
						<div className="formText url">
							<input type="text" id="text02-2" placeholder="URL" title="url" defaultValue="http://223.171.78.71:8080/geoserver/wfs1" />
							<button className="btn-clear">
								<i className="icon-clear">지우기</i>
							</button>
						</div>
						<button type="button" className="btnTxt gray move down">
							<span>
								<i className="icon-btn_down"></i>
							</span>
						</button>
						<button type="button" className="btnTxt darkGray del">
							<span>삭제</span>
						</button>
					</div>
				</div>
			</form>
		</>
	)
}
export default LawManage
