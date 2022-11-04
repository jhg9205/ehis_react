import { ALERT } from '@common/const'
import { alert } from '@utils/alert'
import html2canvas from 'html2canvas'

/**
 * <PRE>
 * 1. ClassName : CCapture
 * 2. Comment   : 화면캡쳐 클래스
 * 3. Author    : CIK
 * <PRE>
 */
class CCapture {
	imageType: string

	fileName: string

	constructor(fileName?: string) {
		this.fileName = fileName || 'map.png'
		this.imageType = 'image/png'
	}

	private download(canvas: HTMLCanvasElement) {
		let link = document.createElement('a')

		link.href = canvas.toDataURL()
		link.download = this.fileName
		link.click()

		alert.icon({ type: ALERT.SUCCESS, title: '성공', text: '지도화면이 저장 되었습니다.!' })
	}
	/**
	 * <PRE>
	 * 1. Name : saveFullImage
	 * 2. Comment   : 지도전체화면 저장
	 * 3. Author    : CIK
	 * <PRE>
	 */
	saveFullImage() {
		const elTarget = document.querySelectorAll<HTMLCanvasElement>('.ol-layer canvas')!

		const mapCanvas = document.createElement('canvas')
		const size = [elTarget[0].width, elTarget[0].height]

		let mapContext = mapCanvas.getContext('2d')!

		mapCanvas.width = size[0]
		mapCanvas.height = size[1]

		Array.prototype.forEach.call(elTarget, function (canvas: any, i: number) {
			if (canvas.width > 0) {
				let opacity = canvas.parentNode.style.opacity
				mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity)
				let transform = canvas.style.transform
				let matrix = transform
					.match(/^matrix\(([^\(]*)\)$/)[1]
					.split(',')
					.map(Number)

				if (i === 1) {
					let margin = elTarget[i].style.width
					matrix = [1, 0, 0, 1, margin, 0]
				}

				CanvasRenderingContext2D.prototype.setTransform.apply(mapContext, matrix)
				mapContext.drawImage(canvas, 0, 0)
			}
		})

		this.download(mapCanvas)
	}

	/**
	 * <PRE>
	 * 1. Name : savePartImage
	 * 2. Comment   : 사용자 영역설정 화면저장
	 * 3. Author    : CIK
	 * <PRE>
	 */
	savePartImage() {
		const height = window.innerHeight
		const width = window.innerWidth

		const elBody = document.getElementsByTagName('body')[0]
		const elMast = document.createElement('div')
		const elFocus = document.createElement('div')

		elMast.setAttribute('id', 'screenshot_mask')
		elFocus.setAttribute('id', 'screenshot_focus')
		elBody.appendChild(elMast) // dimmed 추가
		elBody.appendChild(elFocus) // 마우스 커서에 따라 캡쳐 영역을 만들 div

		let selectArea: boolean = false
		let startX: number
		let startY: number

		const mousemove = (e: MouseEvent) => {
			const x = e.clientX
			const y = e.clientY

			const elFocus = document.querySelector('#screenshot_focus') as HTMLDivElement
			const elMast = document.querySelector('#screenshot_mask') as HTMLDivElement

			// 마우스 커서 따라 좌표 포커스 이동
			elFocus.style.left = x.toString()
			elFocus.style.top = y.toString()

			if (selectArea) {
				// 캡쳐 영역 선택 그림
				const top = Math.min(y, startY)
				const right = width - Math.max(x, startX)
				const bottom = height - Math.max(y, startY)
				const left = Math.min(x, startX)
				elMast.style.borderWidth = [top + 'px', right + 'px', bottom + 'px', left + 'px'].join(' ')
			}
		}

		elBody?.addEventListener(
			'mousedown',
			(e: MouseEvent) => {
				// 캡쳐 영역 선택 시작
				e.preventDefault()
				selectArea = true
				startX = e.clientX
				startY = e.clientY
			},
			{ once: true }
		)
		elBody?.addEventListener(
			'mouseup',
			(e: MouseEvent) => {
				// 캡쳐 시작
				selectArea = false
				elBody.removeEventListener('mousemove', mousemove) // 이벤트 삭제
				document.querySelector('#screenshot_focus')?.remove() // 마우스 포커스 삭제
				document.querySelector('#screenshot_mask')?.remove() // 딤 삭제

				const x: number = e.clientX
				const y: number = e.clientY
				const top: number = Math.min(y, startY)
				const left: number = Math.min(x, startX)
				const width: number = Math.max(x, startX) - left
				const height: number = Math.max(y, startY) - top

				html2canvas(document.body).then(canvas => {
					// 전체 화면 캡쳐
					if (width === 0 || height === 0) {
						alert.icon({
							type: ALERT.INFO,
							text: '저장할 영역이 정상적으로 그려지지  않았습니다. <br />저장할 영역을 다시 그려주세요!'
						})
						return
					}
					const img = canvas.getContext('2d')!.getImageData(left, top, width, height) // 선택 영역만큼 crop
					const tempCanvas = document.createElement('canvas')

					tempCanvas.width = width
					tempCanvas.height = height
					tempCanvas.getContext('2d')!.putImageData(img, 0, 0)

					this.download(tempCanvas)
				})
			},
			{ once: true }
		)

		// 캡쳐 영역 크기 변경
		elBody?.addEventListener('mousemove', mousemove)
	}
}

export default CCapture
