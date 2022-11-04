import { useDispatch } from 'react-redux'
import { setHeaderInfo } from '@modules/reducer/layout'
import { MENU_DESC, SUPPORT } from '@common/domain'
import { useEffect } from 'react'

const Schedule = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderInfo(SUPPORT.SUPPORT, MENU_DESC.SUPPORT1))
	}, [])

	return (
		<div className="contInner">
			<div className="left">
				<p className="pageTitSub">관리 정보</p>
				<div className="rowTable v2">
					<table>
						<caption>관리번호 항목으로 구성된 관리 정보 표 입니다.</caption>
						<colgroup>
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row">관리번호</th>
								<td>
									<div className="formSelect narrow">
										<select name="" id="select01" title="관리번호 선택" className="w150"></select>
										<select name="" id="select02" title="도시 선택" className="w100">
											<option value="0">도시</option>
											<option value="1">농어촌</option>
										</select>
										<select name="" id="select03" title="차수 선택" className="w100">
											<option value="1">1차</option>
											<option value="2">2차</option>
										</select>
										<select name="" id="select04" title="조사 선택" className="w150">
											<option value="0">기본조사</option>
											<option value="1">추가조사</option>
										</select>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="pageTitSub">기본 정보</p>
				<div className="rowTable v2">
					<table>
						<caption>
							구분(광역), 구분(기초), 계약번호, 계약구분, 계약일, 착수일, 준공일, 준공(예정)일, 준공(연장)일, 용역중지, 용역중지종료,
							특이사항 항목으로 구성된 기본 정보 표 입니다.
						</caption>
						<colgroup>
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row">구분(광역)</th>
								<td>
									<div className="formSelect narrow">
										<select name="" id="select05" title="구분(광역) 선택"></select>
									</div>
								</td>
								<th scope="row">구분(기초)</th>
								<td>
									<div className="formSelect narrow">
										<select name="" id="select06" title="구분(기초) 선택"></select>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">계약번호</th>
								<td id="contractNo"></td>
								<th scope="row">계약구분</th>
								<td>
									<div className="formSelect narrow">
										<select name="" id="select07" title="계약구분 선택">
											<option value="1">실태조사</option>
											<option value="2">정비계획</option>
											<option value="3">실태조사+정비계획</option>
										</select>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">계약일</th>
								<td>
									<div className="formText date">
										<input type="text" id="contractDt" name="datepicker01" placeholder="YYYY-DD-MM" />
									</div>
								</td>
								<th scope="row">착수일</th>
								<td>
									<div className="formText date">
										<input type="text" id="initiationDt" name="datepicker02" placeholder="YYYY-DD-MM" />
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">준공일</th>
								<td colSpan={3}>
									<div className="formText date">
										<input type="text" id="rcptComplitionDt" name="datepicker03" placeholder="YYYY-DD-MM" />
									</div>
									<div className="formSelect narrow viewSel">
										<span className="formCheckbox">
											<input type="checkbox" id="rcptComplitionYn" />
											<label htmlFor="rcptComplitionYn">
												<span>준공여부</span>
											</label>
										</span>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">준공(예정)일</th>
								<td>
									<div className="formText date">
										<input type="text" id="complitionScheduleDt" name="" placeholder="YYYY-DD-MM" />
									</div>
								</td>
								<th scope="row">준공(연장)일</th>
								<td>
									<div className="formText date">
										<input type="text" id="complitionExtensionDt" name="datepicker04" placeholder="YYYY-DD-MM" />
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">용역중지</th>
								<td>
									<div className="formText date">
										<input type="text" id="serviceStopDt" name="datepicker05" placeholder="YYYY-DD-MM" />
									</div>
								</td>
								<th scope="row">용역중지종료</th>
								<td>
									<div className="formText date">
										<input type="text" id="serviceRestartDt" name="datepicker06" placeholder="YYYY-DD-MM" />
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">특이사항</th>
								<td colSpan={3}>
									<textarea id="rcptBigo" title="특이사항 입력"></textarea>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="pageTitSub">담당자 정보</p>
				<div className="rowTable v2">
					<table>
						<caption>사업 담당자, 지자제 담당자, 지자체 연락처, 지자체 이메일 항목으로 구성된 담당자 정보 표 입니다.</caption>
						<colgroup>
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row">사업 담당자</th>
								<td id="businessManagerName"></td>
								<th scope="row">지자제 담당자</th>
								<td id="localManagerName"></td>
							</tr>
							<tr>
								<th scope="row">지자체 연락처</th>
								<td id="localManagerTel"></td>
								<th scope="row">지자체 이메일</th>
								<td id="localManagerEmail"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="pageTitSub">계약 정보(단위: 원)</p>
				<div className="rowTable v2">
					<table>
						<caption>
							계약금액, 선금, 기성금액, 확정금액, 정산금액, 계약금액(실태), 계약금액(계획), 실태조사단가, 공정률, 수익금액 항목으로
							구성된 계약 정보 표 입니다.
						</caption>
						<colgroup>
							<col style={{ width: '152px' }} />
							<col style={{ width: '180px' }} />
							<col style={{ width: 'auto' }} />
						</colgroup>
						<thead>
							<tr>
								<th scope="col">내용</th>
								<th scope="col">부가세 포함</th>
								<th scope="col">부가세 제외</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">계약금액</th>
								<td id="constractAmt" className="txtR">
									0
								</td>
								<td id="constractAmt2" className="txtR">
									0
								</td>
							</tr>
							<tr>
								<th scope="row">선금</th>
								<td id="depositAmt" className="txtR">
									0
								</td>
								<td className="txtR">
									<span id="depositAmt2">0</span>
									<div className="block">
										<div className="formSelect narrow viewSel">
											<span className="formCheckbox">
												<input type="checkbox" id="depositAmtYn" />
												<label htmlFor="depositAmtYn">
													<span>입금여부</span>
												</label>
											</span>
										</div>
										<div className="formText date">
											<input type="text" id="depositAmtDt" name="datepicker07" placeholder="YYYY-DD-MM" />
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">기성금액</th>
								<td id="completeAmt" className="txtR">
									0
								</td>
								<td className="txtR">
									<span id="completeAmt2">0</span>
									<div className="block">
										<div className="formSelect">
											<span className="formCheckbox">
												<input type="checkbox" id="completeAmtYn" />
												<label htmlFor="completeAmtYn">
													<span>입금여부</span>
												</label>
											</span>
										</div>
										<div className="formText date">
											<input type="text" id="completeAmtDt" name="datepicker08" placeholder="YYYY-DD-MM" />
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">확정금액</th>
								<td id="confirmAmt" className="txtR">
									0
								</td>
								<td id="confirmAmt2" className="txtR">
									0
								</td>
							</tr>
							<tr>
								<th scope="row">정산금액</th>
								<td className="txtR">0</td>
								<td className="txtR">
									<span>0</span>
									<div className="block">
										<div className="formSelect">
											<span className="formCheckbox">
												<input type="checkbox" id="settlementAmtYn" />
												<label htmlFor="settlementAmtYn">
													<span>입금여부</span>
												</label>
											</span>
										</div>
										<div className="formText date">
											<input type="text" id="settlementAmtDt" name="datepicker09" placeholder="YYYY-DD-MM" />
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">계약금액(실태)</th>
								<td id="contractTypeAmt" className="txtR">
									0
								</td>
								<td id="contractTypeAmt2" className="txtR">
									0
								</td>
							</tr>
							<tr>
								<th scope="row">계약금액(계획)</th>
								<td id="planContractTypeAmt" className="txtR">
									0
								</td>
								<td id="planContractTypeAmt2" className="txtR">
									0
								</td>
							</tr>
							<tr>
								<th scope="row">실태조사단가</th>
								<td id="surveyUnitPrice" className="txtR">
									0
								</td>
								<td id="surveyUnitPrice2" className="txtR">
									0
								</td>
							</tr>
							<tr>
								<th scope="row">공정률</th>
								<td colSpan={2} className="txtR">
									0
								</td>
							</tr>
							<tr>
								<th scope="row">수익금액</th>
								<td className="txtR">0</td>
								<td className="txtR">0</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="right">
				<p className="pageTitSub">실태조사정보 공정표</p>
				<div className="rowTable v2">
					<table>
						<caption>
							실태조사기간, 실태조사 착수, 조사물량정리, 조사계획고시, 소유자정보 요청, 출입통지, 현장조사시작, 현장조사종료 항목으로
							구성된 실태조사정보 공정표 입니다.
						</caption>
						<colgroup>
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row">실태조사기간</th>
								<td id="surveyDt"></td>
								<th scope="row">실태조사 착수</th>
								<td id="surveyBeginDt"></td>
							</tr>
							<tr>
								<th scope="row">조사물량정리</th>
								<td id="arrangementDt"></td>
								<th scope="row">조사계획고시</th>
								<td id="planDt"></td>
							</tr>
							<tr>
								<th scope="row">소유자정보 요청</th>
								<td id="ownerRequestDt"></td>
								<th scope="row">출입통지</th>
								<td id="entranceNoticeDt"></td>
							</tr>
							<tr>
								<th scope="row">현장조사시작</th>
								<td id="fieldSurveyStartDt"></td>
								<th scope="row">현장조사종료</th>
								<td id="fieldSurveyEndDt"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="pageTitSub">정비계획 정보 공정표</p>
				<div className="rowTable v2">
					<table>
						<caption>
							정비계획, 자료취합, 중간보고, 주민공람, 도계위심의, 최종보고, 결정고시, 준공 항목으로 구성된 정비계획 정보 공정표 입니다.
						</caption>
						<colgroup>
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
							<col style={{ width: '152px' }} />
							<col style={{ width: 'auto' }} />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row">정비계획</th>
								<td id="planDt2"></td>
								<th scope="row">자료취합</th>
								<td id="planGetheringDt"></td>
							</tr>
							<tr>
								<th scope="row">중간보고</th>
								<td id="planInterimReportDt"></td>
								<th scope="row">주민공람</th>
								<td id="publicInspectionDt"></td>
							</tr>
							<tr>
								<th scope="row">도계위심의</th>
								<td id="deliberationDt"></td>
								<th scope="row">최종보고</th>
								<td id="planFinalReportDt"></td>
							</tr>
							<tr>
								<th scope="row">결정고시</th>
								<td id="publicAnnouncementDt"></td>
								<th scope="row">준공</th>
								<td id="planComplitionDt"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
export default Schedule
