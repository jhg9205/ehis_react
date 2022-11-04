import { Link } from 'react-router-dom'
import React, {useState} from "react";


const Error = () => {
	const [err, setErr] = useState({
		errCode: localStorage.getItem("isAuthenticated")!.substring(0,3),
		errMsg: localStorage.getItem("isAuthenticated")!.substring(3)
	})
	console.log(err)
	return (

		<div id="wrap" className="errorPage">
			<div className="errorWrap">
				<p>
					<strong>
						{err.errCode}
					</strong>
					<br />
					{err.errMsg}
				</p>
				<div className="btnWrap">
					<Link to="/login">
						<button type="button" className="btn btnBg01">
							로그인 페이지 이동
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Error
