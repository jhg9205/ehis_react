const BizState = () => {
	return (
		<div className="tradeMapArea">
			<div className="left">
				<div className="contArea">
					<div className="btnArea">
						<button type="button" className="mapTabBtn01 current">
							<span>빈집밀집구역</span>
						</button>
						<button type="button" className="mapTabBtn02">
							<span>자율주택정비 사업준공지</span>
						</button>
					</div>

					<div className="mapTab01 current">
						<h3 className="ir">빈집밀집구역</h3>
						<div className="resultTxt" id="crwdCount">
							<p>
								<strong className="co-blue">총 223건</strong>이 검색 되었습니다.
								<br />
								(지도화면 범위내 빈집 수)
							</p>
						</div>
						<hr className="line" />
						<div className="complexList" id="crwdList"></div>
						<ul className="pagin xs" id="pagination-container1"></ul>
					</div>
					<div className="mapTab02">
						<h3 className="ir">자율주택정비 사업준공지</h3>
						<div className="resultTxt" id="bsnsCount">
							<p>
								<strong className="co-blue">총 223건</strong>이 검색 되었습니다.
								<br />
								(지도화면 범위내 빈집 수)
							</p>
						</div>
						<hr className="line" />
						<div className="complexList" id="bsnsList"></div>
						<ul className="pagin xs" id="pagination-container2"></ul>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="contArea">
					<div className="location">
						<i className="icon-pin_blue2"></i>
						<span className="land" id="sidoName">
							충청북도
						</span>
						<i className="icon-arrow_right2"></i>
						<span className="land" id="sigName">
							영동군
						</span>
						<i className="icon-arrow_right2"></i>
						<span className="land" id="emdName">
							상촌면
						</span>
						<button type="button">
							<i className="icon-arrow_down2">지역선택</i>
						</button>
						<div className="selectArea">
							<ul className="selLand" id="sidoList"></ul>
							<ul className="selLand" id="sigList"></ul>
							<ul className="selLand" id="emdList"></ul>
							<div className="btnArea">
								<button type="button" className="btnTxt mid blue locatinDtlClose">
									<span>닫기</span>
								</button>
							</div>
						</div>
					</div>
					{/*```````````````맵 띄우는 공간```````````````*/}
					<div className="mapArea" id="umap">
						<div className="dtlInfoPop dtl01">
							<button className="btn-close">
								<img src="/ehis/static/images/common/pop_btn_close.png" alt="팝업닫기" />
								<span className="ir">팝업닫기</span>
							</button>
							<h4 className="tit" id="cluNm">
								남구일대#1
							</h4>
							<div className="unitTable">
								<table>
									<caption>상제정보</caption>
									<colgroup>
										<col style={{ width: '32%' }} />
										<col style={{ width: '18%' }} />
										<col style={{ width: '32%' }} />
										<col style={{ width: '18%' }} />
									</colgroup>
									<tbody id="crwddata">
										<tr>
											<th>
												<span>주택수</span>
											</th>
											<td>
												<span id="numberH"></span>
											</td>
											<th>
												<span>주택면적</span>
											</th>
											<td>
												<span id="hArea"></span>
											</td>
										</tr>
										<tr>
											<th>
												<span>노후불량주택수</span>
											</th>
											<td>
												<span id="numOldH"></span>
											</td>
											<th>
												<span>노후불량주택면적</span>
											</th>
											<td>
												<span id="oldHArea"></span>
											</td>
										</tr>
										<tr>
											<th>
												<span>주택수대비 노후불량주택비율</span>
											</th>
											<td>
												<span id="oldHR"></span>
											</td>
											<th>
												<span></span>
											</th>
											<td>
												<span></span>
											</td>
										</tr>
										<tr>
											<th>
												<span>빈집수</span>
											</th>
											<td>
												<span id="numVh"></span>
											</td>
											<th>
												<span>빈집유형</span>
											</th>
											<td>
												<span id="vhType"></span>
											</td>
										</tr>
										<tr>
											<th>
												<span>빈집면적</span>
											</th>
											<td>
												<span id="vhArea"></span>
											</td>
											<th>
												<span>주택수대비 빈집비율</span>
											</th>
											<td>
												<span id="vhR"></span>
											</td>
										</tr>
										<tr>
											<th>
												<span>노후불량주택수대비 빈집비율</span>
											</th>
											<td>
												<span id="vhPerOld">12%</span>
											</td>
											<th>
												<span>노후불량주택유형</span>
											</th>
											<td>
												<span id="oldHType">단독</span>
											</td>
										</tr>
									</tbody>
									<tbody id="crwdNodata" style={{ display: 'none' }}>
										<tr>
											<td colSpan={4} className="noData">
												<span>데이터가 없습니다.</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="dtlInfoPop dtl02">
							<button className="btn-close">
								<img src="/ehis/static/images/common/pop_btn_close.png" alt="팝업닫기" />
								<span className="ir">팝업닫기</span>
							</button>
							<h4 className="pageTitSub">건축개요</h4>
							<div className="unitTable">
								<table>
									<caption>상제정보</caption>
									<colgroup>
										<col style={{ width: '20%' }} />
										<col style={{ width: '30%' }} />
										<col style={{ width: '20%' }} />
										<col style={{ width: '30%' }} />
									</colgroup>
									<tbody>
										<tr>
											<th className="addr" colSpan={4}>
												<span id="BIZ_NAME">서울시 영등로구 당산동 1갈 158-10</span>
											</th>
										</tr>
										<tr>
											<th>
												<span>사업유형</span>
											</th>
											<td>
												<span id="BIZ_TYPE"></span>
											</td>
											<th>
												<span>대지면적</span>
											</th>
											<td>
												<span id="PLOT_AREA">㎡</span>
											</td>
										</tr>
										{/*<tr>*/}
										{/*     <th><span>연면적</span></th>*/}
										{/*     <td><span id="TOTAL_AREA">142.1㎡</span></td>*/}
										{/*     <th><span>용적률</span></th>*/}
										{/*     <td><span id="CPCTY_RATE">232.14%</span></td>*/}
										{/* </tr>*/}
										{/* <tr>*/}
										{/*     <th><span>규모</span></th>*/}
										{/*     <td><span id="SCALE_CNT"></span></td>*/}
										{/*     <th><span>건폐율</span></th>*/}
										{/*     <td><span id="BTL_RATE">59.91%</span></td>*/}
										{/* </tr> */}
										<tr>
											<th>
												<span>용도</span>
											</th>
											<td>
												<span id="PUR_POSE">다가구주택</span>
											</td>
											<th>
												<span>세대수</span>
											</th>
											<td>
												<span id="RMTS_CNT">주택6가구, 근생3호</span>
											</td>
										</tr>
										<tr>
											<th>
												<span>착공일</span>
											</th>
											<td>
												<span id="BSNS_PD"></span>
											</td>
											<th>
												<span>준공일</span>
											</th>
											<td>
												<span id="COMPET_DATE"></span>
											</td>
										</tr>
										{/*<tr>*/}
										{/*    <td colspan="4" class="noData"><span>데이터가 없습니다.</span></td>*/}
										{/*</tr>*/}
									</tbody>
								</table>
							</div>
							<h4 className="pageTitSub">건물전경사진</h4>
							<div className="imgArea">
								<img id="bsnsImageSrc" alt="임시이미지" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default BizState
