const style = {
	color: '#fff'
}

const userNm = '보상관리자'

const Footer = () => {
	return (
		<footer>
			<div className="footInfo">
				<div className="left">
					<ul>
						<li id="sessionBsnsNm">bsnsNm</li>
						<li style={style}>`${userNm}</li>
						<li>empCode</li>
						<li>Copyright (c) 한국부동산원 ALL RIGHTS RESERVED.</li>]
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
