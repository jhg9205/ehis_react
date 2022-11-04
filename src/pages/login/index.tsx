import '@css/contents.css'
import '@css/common.css'
import React, { KeyboardEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { alert } from '@utils/alert'
import { ALERT } from '@common/const'
import { $POST } from '@utils/request'
import { AxiosResponse } from 'axios'

const Login = () => {
	const [defaultUser, setDefaultUser] = useState(true)
	const [account, setAccount] = useState({
		id: "",
		password: "",
	})
	const showStyle = { display: '' }
	const hiddenStyle = { display: 'none' }

	localStorage.clear()

	const onLogin = () => {
		console.log(account)
		//로그인 및 jwt토큰 발급
		$POST('/api/login/jwt.do', {userId:account.id,password:account.password}, (res: AxiosResponse<any, any>) => {
			if (res.data.error != null) {
				alert.icon({ type: ALERT.WARNING, title: '접속정보오류', text: res.data.error })
			} else {
				window.location.href = '/intro'
			}
		})

	}

	const onChangeAccount = (e:any) => {
		setAccount({
			...account,
			[e.target.name]: e.target.value,
		})
	}

	const serviceTest = () => {
		$POST('api/getData', {}, (res: any) => {
			console.log('data')
		})
	}

	return (
		// mainWrap
		<div className="mainWrap">
			{/* inner */}
			<div className="inner">
				<h1>
					<img src="./src/assets/images/common/logo-main.png" alt="REB 한국부동산원" />
				</h1>
				<p>
					정확한 빈집정보, 최적의 빈집정비! <br />
					한국부동산원은 빈집을 활용한 사회적 가치 실현에 앞장서겠습니다.
				</p>
				{/* innerBox */}
				<div className="innerBox">
					<div className="left">
						<h2>
							<img src="./src/assets/images/common/logo-main02.png" alt="소규모&빈집정보 알림e" />
						</h2>
						<Link to="/" className="btn">
							<span>이동하기</span>
						</Link>
						<div className="btn" onClick={serviceTest}>
							서비스 요청
						</div>
					</div>
					<form name="loginForm" method="post">
						<input type="hidden" name="message" value="${message}" />
						<input type="hidden" id="csrfToken" name="csrfToken" value="${sessionScope.csrfToken}" />
						<div className="right">
							{/* tab */}
							<div className="tabArea">
								<ul>
									<li
										onClick={() => {
											setDefaultUser(true)
										}}
										className={defaultUser ? 'curr' : ''}
									>
										아이디 로그인
									</li>
									<li
										onClick={() => {
											setDefaultUser(false)
										}}
										className={defaultUser ? '' : 'curr'}
									>
										GPKI 로그인
									</li>
								</ul>
								<div className="tabBox">
									{/* 아이디 로그인 */}
									<div style={defaultUser ? showStyle : hiddenStyle}>
										<p>등록한 아이디/패스워드를 통한 로그인</p>
										<ul>
											<li>
												<input type="text" title="아이디 입력" name="id" id="loginId" placeholder="아이디" onChange={onChangeAccount} required />
											</li>
											<li>
												<input
													type="password"
													title="비밀번호 입력"
													name="password"
													id="passWd"
													onChange={onChangeAccount}
													placeholder="비밀번호"
													required
												/>
											</li>
										</ul>
										<button type="button" className="btn btnNavy" onClick={onLogin}>
											로그인
										</button>
									</div>
									<div style={defaultUser ? hiddenStyle : showStyle}>
										<p>행정전자서명 GPKI를 통한 로그인</p>
										<button type="button" className="btn btnNavy">
											GPKI 로그인
										</button>
										<button type="button" className="btn btnGray">
											GPKI 안내
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
