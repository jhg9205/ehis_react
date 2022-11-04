import { FORMAT, GEOM_TYPE, getCurrentDate, IT_MODE_SINGLE, IT_SELECT_TYPE, LAYER } from '@common/const'
import CInteraction from './interaction'
import Select from 'ol/interaction/Select'
import { createBox } from 'ol/interaction/Draw'
import Snap from 'ol/interaction/Snap'
import Modify from 'ol/interaction/Modify'
import CMap from './map'
import Geometry from 'ol/geom/Geometry'
import Feature from 'ol/Feature'
import turf from '@turf/turf'
import { alert } from '@utils/alert'

/**
 * <PRE>
 * 1. ClassName : CSelectInteraction
 * 2. Comment   : 셀렉트 인터렉션 클래스(인터렉션관리)
 * 3. Author    : CIK
 * 4. Date      : 2021. 05.
 * <PRE>
 */
class CSelectInteraction extends CInteraction {
	_mode: any
	_type: any
	_format: any
	_itModify!: any
	_itSnap!: any
	_itTranslate!: any
	_itDivideLine!: any
	_itAddPolygon!: any
	_itAddRectangle!: any
	_movedFeature: any[]
	_trans: any
	_unClick: boolean
	_layers: any[]
	_memoCb: any
	_callCustomSetLadRealFunc: any
	_targetLayer?: any
	_selectedPolygon?: any

	constructor(map: CMap) {
		super(map)

		this._mode = IT_MODE_SINGLE
		this._type = IT_SELECT_TYPE
		this._format = FORMAT.GeoJSON
		this._itModify = null
		this._itSnap = null
		this._itTranslate = null
		this._itDivideLine = null
		this._itAddPolygon = null
		this._itAddRectangle = null
		this._movedFeature = []
		this._trans = new CTransaction()
		this._unClick = false
		this._layers = [LAYER.WMS.UFL_HPIP_LM]
		this._memoCb = null
		this._callCustomSetLadRealFunc = null
		this._targetLayer = null
		this._selectedPolygon = null
	}

	/**
	 * <PRE>
	 * 1. MethodName : init
	 * 2. Comment   : 셀렉트 인터렉션 생성
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	init(callback?: Function, memoCb?: any, targetLayer?: any) {
		if (memoCb != undefined && memoCb != null) {
			this._memoCb = memoCb
		}

		if (targetLayer) {
			this._targetLayer = targetLayer
		}

		this.interaction = new Select({
			condition: this._type.click,
			toggleCondition: this._type.single
		})

		this.add()

		if (callback !== undefined) {
			this.onSelect(callback)
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : checkGeometry
	 * 2. Comment   : 병합할 지오메트리를 체크한다
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	checkGeometry(features: /* Array<Feature<Geometry>> */ any) {
		let intersect, tempFea
		let check = true
		let txt

		if (features.getLength() < 2) {
			check = false
			txt = '병합은 최소 2개의 객체가 필요합니다.'
		} else {
			for (let i = 0; i < features.getLength(); ++i) {
				if (i == 0) {
					tempFea = features.getArray()[0]
				} else {
					const fea1 = this._format.writeFeatureObject(tempFea)
					const fea2 = this._format.writeFeatureObject(features.getArray()[i])

					intersect = turf.lineIntersect(fea1, fea2)

					if (intersect.features.length < 2) {
						check = false
						txt = '병합은 최소 교차점이 2개이상이 필요합니다.'
						break
					} else if (
						(fea1.geometry.type !== GEOM_TYPE.GEOM_TYPE_POLYGON && fea1.geometry.type !== GEOM_TYPE.GEOM_TYPE_MULTIPOLYGON) ||
						(fea2.geometry.type !== GEOM_TYPE.GEOM_TYPE_POLYGON && fea2.geometry.type !== GEOM_TYPE.GEOM_TYPE_MULTIPOLYGON)
					) {
						check = false
						txt = '병합은 폴리곤 및 멀티폴리곤만 가능합니다.'
						break
					} else {
						tempFea = features.getArray()[i]
					}
				}
			}
		}

		return {
			check: check,
			txt: txt
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : union
	 * 2. Comment   : 선택된 폴리곤객체를 병합한다.
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	union(response: any) {
		try {
			const features = this.interaction.getFeatures()
			const flag = this.checkGeometry(features)

			if (!flag.check) {
				alert.open('알림', flag.txt)
				return
			}

			let union_fea: any, feature: any
			let layer

			features.forEach((fea: any, idx: number) => {
				if (idx == 0) {
					union_fea = fea
				} else {
					const fea1 = this._format.writeFeatureObject(union_fea)
					const fea2 = this._format.writeFeatureObject(fea)

					feature = turf.union(fea1, fea2)
					union_fea = this._format.readFeature(feature)
				}
			})

			layer = this._layers[this._targetLayer]

			//layer = _layermgr.getLayer((target === LAYER_TYPE_CADASTRAL_A) ? LAYER_TYPE_CADASTRAL_EDIT_A : target).getLayer();
			//layer = _layermgr.getLayer((target === LAYER_TYPE_AREA_A) ? LAYER_TYPE_CADASTRAL_EDIT_A : target).getLayer();

			//프로퍼티 세팅
			//union_fea.setProperties(_cadastral_up.getField());

			this.setUnionData(this._targetLayer, features, union_fea)

			this.interaction.getFeatures().clear()

			if (response !== undefined) {
				response(this._targetLayer)
			}

			union_fea.setStyle(/* CStyle.SHAPE_STYLE */)
			layer.getSource().addFeature(union_fea)
		} catch (e: any) {
			console.log('CSelectInteraction union  ->>>>>>>  ' + e.message)
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : divide
	 * 2. Comment   : 선택된 객체를 분할한다.
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 06.
	 * <PRE>
	 *
	 */
	// 	divide() {

	// 		try {

	// 			//기존 인터렉션 제거
	// 			_itSelect.removeInteractionCtrls();

	// 			let selectedPolygon = _itSelect.getFeature()[0];
	// 			let target = _itSelect._layers[parseInt($('#slTargetLayer').val())];
	// //			let layer = _layermgr.getLayer((target === LAYER_TYPE_CADASTRAL_A) ? LAYER_TYPE_CADASTRAL_EDIT_A : target).getLayer();
	// 			let layer = _layermgr.getLayer((target === LAYER_TYPE_AREA_A) ? LAYER_TYPE_CADASTRAL_EDIT_A : target).getLayer();

	// 			_selectedPolygon = selectedPolygon;

	// 			if(!selectedPolygon) {
	// 				_alert.open("알림	","선택된 객체가 없습니다.");
	// 				$('.editIcon04').removeClass('current');
	// 				return;
	// 			}

	// 			/*분할그리기*/
	// 			this._itDivideLine = new CDrawInteraction(GEOM_TYPE_LINESTRING, _map, true);
	// 			this._itDivideLine.init();

	// 			/*
	// 			//선택된 피쳐 스타일 추가
	// 			selectedPolygon.setStyle(_layermgr.getLayer(target).getSelectedStyle(selectedPolygon));

	// 			//툴바 모든 인터렉션 제거
	// 			this.clear();
	// 			 */

	// 			//이벤트 추가
	// 			this._itDivideLine.interaction.on('drawstart', function(e) {
	// 				_itSelect._itDivideLine.isDrawLine = true;
	// 			});
	// 			this._itDivideLine.interaction.on('drawend', this._itDivideLine.divideDrawEnd);

	// 			//분할라인 시작
	// 			this._itDivideLine.start();

	// 			//해당 레이어에 Snap 추가
	// 			if(parseInt( $('#slTargetLayer').val()) > 0) {

	// 				_map.getMap().removeInteraction(this._itSnap);

	// 				this._itSnap = new ol.interaction.Snap({
	// 					source: _layermgr.getLayer(target).getSource()
	// 				});

	// 				_map.getMap().addInteraction(this._itSnap);
	// 			}
	// 		} catch (e) {
	// 			console.log('CSelectInteraction divide  ->>>>>>>  ' + e.message);
	// 		}
	// 	}

	/**
	 * <PRE>
	 * 1. MethodName : drawPolygonCtrl
	 * 2. Comment   : 객체 그리기 기능을 실행.
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	drawPolygonCtrl(val: any) {
		if (val) {
			this.drawPolygon()
		} else {
			if (this._itAddPolygon !== null) {
				//				this.map.getMap().removeInteraction(_itSelect._itAddPolygon._interaction);
				this._itAddPolygon.removeInteraction()
				this._itAddPolygon.removeCustomDrawEnd(this.callDrawFeatureEnd)
				this._itAddPolygon = null
			}
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : drawRectangleCtrl
	 * 2. Comment   : 객체 그리기 기능을 실행.
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	drawRectangleCtrl(val: boolean) {
		if (val) {
			this.drawRectangle()
		} else {
			if (this._itAddRectangle !== null) {
				this._itAddRectangle.removeInteraction()
				this._itAddRectangle.removeCustomDrawEnd(this.callDrawFeatureEnd)
				this._itAddRectangle = null
			}
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : drawPolygon
	 * 2. Comment   : 객체를 그린다(다각형).
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	drawPolygon() {
		try {
			this.clear()
			this._itAddPolygon = new CDrawInteraction(GEOM_TYPE.GEOM_TYPE_POLYGON, this.map, true)
			this._itAddPolygon.init()

			this._itAddPolygon.addCustomDrawEnd(this.callDrawFeatureEnd)

			this._itAddPolygon.start()
			this.addSnap()
		} catch (e: any) {
			console.log('CSelectInteraction drawPolygon  ->>>>>>>  ' + e.message)
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : drawRectangle
	 * 2. Comment   : 객체를 그린다(사각형).
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	drawRectangle() {
		try {
			this.clear()
			this._itAddRectangle = new CDrawInteraction(GEOM_TYPE.GEOM_TYPE_CIRCLE, _map, true)
			this._itAddRectangle._geoFunc = createBox()
			this._itAddRectangle.init()

			this._itAddRectangle.addCustomDrawEnd(this.callDrawFeatureEnd)

			this._itAddRectangle.start()
			this.addSnap()
		} catch (e: any) {
			console.log('CSelectInteraction drawRectangle  ->>>>>>>  ' + e.message)
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : addSnap
	 * 2. Comment   : 해당 레이어에 스냅 추가.
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	addSnap() {
		//스냅 있다면 제거
		this.map.removeInteraction(this._itSnap)

		//let target = _itSelect._layers[parseInt($('#slTargetLayer').val())];
		let target = this._layers[this._targetLayer]

		//타겟이 토지실제이용이라면 필지레이어에 스냅추가
		if (target == 'LAYER_TYPE_LAD_REALNGR_VIEW_A') {
			target = 'LAYER_TYPE_AREA_A'
		}
		let layer = _layermgr.getLayer(target).getLayer()

		this._itSnap = new Snap({
			source: layer.getSource()
		})

		this.map.addInteraction(this._itSnap)
	}

	/**
	 * <PRE>
	 * 1. MethodName : callDrawFeatureEnd
	 * 2. Comment   : 사용자정의 Feature DRaw End 콜백이벤트
	 * 				: 객체를 레이어별 속성으로 설정하여 저장
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	callDrawFeatureEnd(e: any) {
		//const idx = parseInt($('#slTargetLayer').val());
		let it_draw: any = null
		let target = this._layers[this._targetLayer]
		let layer = _layermgr.getLayer(target).getLayer()

		e.feature.setStyle(/* CStyle.SHAPE_STYLE */)

		layer.getSource().addFeature(e.feature)
		this.setDrawData(layer, e.feature)

		it_draw = this._itAddRectangle !== null ? this._itAddRectangle._drawLayer : this._itAddPolygon._drawLayer
		it_draw.setStyle(null)

		setTimeout(function () {
			it_draw.getSource().clear()
		}, 500)
	}

	/**
	 * <PRE>
	 * 1. MethodName : remove
	 * 2. Comment   : 선택된 객체를 삭제한다.
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	remove() {
		/*
		//기존 인터렉션 제거
		this.removeInteractionCtrls();
		
		const features = this.interaction.getFeatures();
		//const idx = parseInt($('#slTargetLayer').val());
		const layer = this._layers[this._targetLayer]; 
		
		//객체한개만 삭제가능		
		if(features.getLength() === 1) {
			
			const feature = features.getArray()[0];
			const prop = feature.getProperties();
			
			//토지실제이용일경우는 삭제시 공간정보만 삭제되므로 업데이트 처리
			if(layer === LAYER_TYPE_LAD_REALNGR_VIEW_A) {
				if(!feature.getId()) {
					_layermgr.getLayer(layer).getSource().removeFeature(feature);
					return;
				}
					
				let feaId = this.getFeature()[0].getProperties().ID;
				let targetTag = $('button[data-no="'+feaId+'"]');
				
				//해당 필지 geom값 제거 (저장 될 때 geom값 유무로 버튼 활성/비활성화)
				targetTag.attr('data-geoms', 'null');
				
				const today = getCurrentDate();
				const newfea = new Feature({ GEOM: null });
				
				if(feaId) {
					newfea.setId( LAYER_TYPE_LAD_REALNGR_A + '.' + feature.getProperties().ID );
				}
				newfea.set('UPDDE', today.full);
				
				//작업내역에 동일한 객체가 연속으로 수정되었을경우 작업내역에 추가하지않음
				let flag = true;
				let updateArr = this._trans._update;
				for(let i=0; i< updateArr.length; ++i) {
					if(updateArr[i].getId() === feature.getId()) {
						updateArr[i] = newfea
						flag = false;
						break;
					}
				}
				
				if(flag) {
					this._trans.add(ITRANSACTION.UPDATE, LAYER_TYPE_LAD_REALNGR_A, newfea);
				}
			} else {
				let insertArr =  _itSelect._trans.insert;
				let flag = true;
				for(let i=0; i < insertArr.length; i++) {
				    if(insertArr[i].getId() == 'new_'+feature.ol_uid) {
				        insertArr.splice(i,1);
				        flag = false;
				        break;
				    }
				}
				if(flag) {
					this._trans.add(ITRANSACTION.DELETE, layer, feature);
				}
			}
			
			_layermgr.removeFeature(layer, feature);
			this.interaction.getFeatures().clear();						
		} */
	}

	/**
	 * <PRE>
	 * 1. MethodName : createModify
	 * 2. Comment   : 수정인터렉션을 생성한다
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	createModify() {
		//const type = this._layers[this._targetLayer];
		const layer = _layermgr.getLayer(this._targetLayer).getLayer()

		this._itModify = new Modify({
			features: this.interaction.getFeatures()
		})

		this.interaction.getFeatures().clear()

		//수정이 발생할때마다 퓨처를 재설정해야됨(지옴값이 변경됨)
		this._itModify.on('modifyend', (evt: any) => {
			const feature = evt.features.getArray()[0]
			const features = this._trans.update
			//const idx = parseInt($('#slTargetLayer').val());
			const today = getCurrentDate()

			let flag = true
			let newfea: Feature<Geometry>
			let id: string

			id = feature.getId()
			newfea = new Feature({ GEOM: feature.getGeometry().clone().transform('EPSG:3857', 'EPSG:5174') })

			newfea.setId(id)
			newfea.setGeometryName('GEOM')
			newfea.set('UPDDE', today.full)

			for (let i = 0; i < features.length; ++i) {
				if (features[i].getId() === feature.getId()) {
					features[i] = newfea
					flag = false
					break
				}
			}

			if (flag) {
				//아이디가없을 경우는 새로만든 객체이므로 지옴값만 변경
				id === undefined ? this.updateInsertData(feature, newfea) : this._trans.add(ITRANSACTION.UPDATE, layer, newfea)
			}
		})

		this.map.addInteraction(this._itModify)
	}

	/**
	 * <PRE>
	 * 1. MethodName : removeStyle
	 * 2. Comment   : divide 종료 후 선택 스타일 제거
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 09.
	 * <PRE>
	 */
	removeStyle() {
		const insertArr = this._trans.insert
		//		const layer = _layermgr.getLayer((target === LAYER_TYPE_CADASTRAL_A) ? LAYER_TYPE_CADASTRAL_EDIT_A : target).getLayer();
		const layer = this._targetLayer
		let flag = true

		for (let i = 0; i < this._trans.insert.length; i++) {
			if (insertArr[i].getId() === 'new_' + this._selectedPolygon.ol_uid) {
				flag = false
				layer.getSource().getFeatureByUid(this._selectedPolygon.ol_uid).setStyle(CStyle.SHAPE_STYLE)
				break
			}
		}

		if (flag) {
			layer.getSource().getFeatureByUid(this._selectedPolygon.ol_uid).setStyle(layer.getStyle())
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : createTranslate
	 * 2. Comment   : 이동인터렉션을 생성한다
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	createTranslate() {
		const type = this._layers[parseInt($('#slTargetLayer').val())]
		const layer = _layermgr.getLayer(type).getLayer()
		const update = this._trans._update

		this._itTranslate = new ol.interaction.Translate({
			features: this.interaction.getFeatures()
		})

		this.interaction.getFeatures().clear()
		this.map.getMap().addInteraction(this._itTranslate)
		this._itTranslate.on(
			'translateend',
			function (e) {
				const idx = parseInt($('#slTargetLayer').val())
				const target = e.features.getArray()[0]
				const today = getCurrentDate()

				let id = null,
					isSame = null
				let newfea = null

				//토지실제이용일경우 아이디를 따로설정
				if (idx === 4) {
					if (target.getProperties().ID) {
						id = LAYER_TYPE_LAD_REALNGR_A + '.' + target.getProperties().ID
					} else {
						id = target.getId()
					}

					newfea = new ol.Feature({ GEOM: target.getGeometry().clone() })
				} else {
					id = target.getId()
					newfea = new ol.Feature({ GEOM: target.getGeometry().clone().transform('EPSG:3857', 'EPSG:5174') })
				}

				newfea.setId(id)
				newfea.setGeometryName('GEOM')
				newfea.set('UPDDE', today.full)

				//현재 이동한 피쳐가 기존 update내역에 있는지 확인
				for (let i = 0; i < update.length; i++) {
					if (newfea.getId() == update[i].getId()) {
						update[i] = newfea
						isSame = !isSame
						break
					}
				}

				if (!isSame) {
					//아이디가없을 경우는 새로만든 객체이므로 지옴값만 변경
					id === undefined ? this.updateInsertData(target, newfea) : this._trans.add(ITRANSACTION.UPDATE, layer, newfea)
				}
			}.bind(this)
		)
	}

	/**
	 * <PRE>
	 * 1. MethodName : modify
	 * 2. Comment   : 객체 수정기능을 실행한다.
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	modify(val) {
		if (val) {
			this.clear()
			this.createModify()
		} else {
			if (this._itModify !== null) {
				this.map.getMap().removeInteraction(this._itModify)
				this._itModify = null
			}
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : move
	 * 2. Comment   : 객체 이동기능을 실행한다.
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	move(val) {
		if (val) {
			this.clear()
			this.createTranslate()
		} else {
			if (this._itTranslate !== null) {
				this.map.getMap().removeInteraction(this._itTranslate)
				this._itTranslate = null
			}
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : singleMode
	 * 2. Comment   : 객체 단일선택
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	singleMode() {
		this._mode = IT_MODE_SINGLE
		this.interaction.getFeatures().clear()
		this.interaction.toggleCondition_ = this._type.single
		this.removeInteractionCtrls()
	}

	/**
	 * <PRE>
	 * 1. MethodName : multiMode
	 * 2. Comment   : 객체 멀티선택
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	multiMode() {
		this._mode = IT_MODE_MULTI
		this.interaction.getFeatures().clear()
		this.interaction.toggleCondition_ = this._type.multi
		this.removeInteractionCtrls()
	}

	/**
	 * <PRE>
	 * 1. MethodName : onSelect
	 * 2. Comment   : 객체선택 이벤트 설정
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 05.
	 * <PRE>
	 */
	onSelect(callback: Function) {
		this.interaction.on('select', callback)
	}

	/**
	 * <PRE>
	 * 1. MethodName : removeInteractionCtrls
	 * 2. Comment   : 인터렉션 초기화
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	removeInteractionCtrls() {
		if (this._itModify !== null) {
			this.modify(false)
		}
		if (this._itTranslate !== null) {
			this.move(false)
		}
		if (this._itAddPolygon !== null) {
			this.drawPolygonCtrl(false)
		}
		if (this._itAddRectangle !== null) {
			this.drawRectangleCtrl(false)
		}
		if (this._itDivideLine !== null) {
			this._itDivideLine.end()
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : clear
	 * 2. Comment   : 선택된 객체삭제
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 06.
	 * <PRE>
	 */
	clear() {
		this.singleMode()
		this.interaction.getFeatures().clear()
	}

	/**
	 * <PRE>
	 * 1. MethodName : clearHistory
	 * 2. Comment   : 작업내역 삭제
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	clearHistory() {
		this._trans.clear()
	}

	/**
	 * <PRE>
	 * 1. MethodName : save
	 * 2. Comment   : 추가수정된 객체를 업데이트한다
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	async save(response) {
		if (this._trans.insert.length > 0 || this._trans.update.length > 0 || this._trans.delete.length > 0) {
			const confirm = new CConfirm('알림', '작업 내역을 저장하시겠습니까?')
			if (!(await confirm.open(confirm))) {
				return
			}

			let layer = this._layers[parseInt($('#slTargetLayer').val())]

			//SRS

			this._trans.request(
				layer,
				function (res) {
					if (res.readyState === 'complete') {
						_alert.open('알림', '저장되었습니다.')
						this.clear()
						this.clearHistory()
						if (response !== undefined) {
							//						response( (layer === LAYER_TYPE_CADASTRAL_A) ? LAYER_TYPE_CADASTRAL_EDIT_A : layer );
							response(layer === LAYER_TYPE_AREA_A ? LAYER_TYPE_CADASTRAL_EDIT_A : layer)
						}
					}
				}.bind(this)
			)
		} else {
			_alert.open('알림', '저장할 내역이 없습니다.')
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : isHistory
	 * 2. Comment   : 작업내역이 있는지 체크한다
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	isHistory() {
		let flag = false

		if (this._trans.insert.length > 0 || this._trans.update.length > 0 || this._trans.delete.length > 0) {
			flag = true
		}

		return flag
	}

	/**
	 * <PRE>
	 * 1. MethodName : setUnionData
	 * 2. Comment   : 레이이별 병합데이터를 설정
	 * 				  - 연속지적도 병합시 편집지적도레이에 추가
	 * 				  - 편집직적도 및 사업구역레이어는 병합하려고 선택한 객체는 삭제하고, 병합된 객체만 추가
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	setUnionData(layer: any, ofeature: any, nfeature: any) {
		/* switch(layer) {		
			//연속지적도일경우는 무조건 추가
//			case LAYER_TYPE_CADASTRAL_A :		
			case LAYER_TYPE_AREA_A :		
				this._trans.add(ITRANSACTION.INSERT, layer, ofeature.array_[0], nfeature);
				break;
	
			//편집지적도 병합및 분할시 삭제 - 추가
			case LAYER_TYPE_CADASTRAL_EDIT_A :
				ofeature.forEach(function(fea,idx) {
					if(!fea.getId()) {
						let insertArr = _itSelect._trans._insert;
						for (let i = 0; i < _itSelect._trans._insert.length; i++) {
							if(insertArr[i].getId() == 'new_'+ fea.ol_uid) {
								insertArr.splice(i,1);
								break;
							}
						}
						
					} else {
						this._trans.add(ITRANSACTION.DELETE, layer, fea);			
					}
				}.bind(this));
				this._trans.add(ITRANSACTION.INSERT, layer, ofeature.array_[0], nfeature);
				break;
				
			//사업구역  병합및 분할시 삭제(기존데이터는 삭제 X, 추가데이터만 삭제 O) - 추가 
			case LAYER_TYPE_BUSINESS_A :
				ofeature.forEach(function(fea,idx) {
					let prop = fea.getProperties();
					if(prop.EDIT === 'Y') {						
						this._trans.add(ITRANSACTION.DELETE, layer, fea);				
					}
				}.bind(this));
				this._trans.add(ITRANSACTION.INSERT, layer, ofeature.array_[0], nfeature);				
				break;
		} */
	}

	/**
	 * <PRE>
	 * 1. MethodName : setDivideData
	 * 2. Comment   : 레이이별 분할데이터를 설정
	 * 				  - 연속지적도 분할시 편집지적도레이에 추가
	 * 				  - 편집지적도 및 사업구역레이어는 분할하려고 선택한 객체는 삭제하고, 분할된 객체만 추가
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	setDivideData(layer, ofeature, nfeature) {
		switch (layer) {
			//연속지적도일경우는 무조건 추가
			//		case LAYER_TYPE_CADASTRAL_A :
			case LAYER_TYPE_AREA_A:
				nfeature.forEach(
					function (e) {
						this._trans.add(ITRANSACTION.INSERT, layer, ofeature, e)
					}.bind(this)
				)
				break

			//편집지적도 병합및 분할시 삭제 - 추가
			case LAYER_TYPE_CADASTRAL_EDIT_A:
				let val = _itSelect.chkSameFeature(ofeature) // insert배열에서의 index

				//Insert내역에 ofeature가 존재한다면 delete배열에 추가하지않고 Insert내역에서 ofeature를 지움
				if (val || val == 0) {
					this._trans._insert.splice(val, 1)
					nfeature.forEach(
						function (e) {
							this._trans.add(ITRANSACTION.INSERT, layer, ofeature, e)
						}.bind(this)
					)
				} else {
					this._trans.add(ITRANSACTION.DELETE, layer, ofeature)
					nfeature.forEach(
						function (e) {
							this._trans.add(ITRANSACTION.INSERT, layer, ofeature, e)
						}.bind(this)
					)
				}
				break

			//사업구역  병합및 분할시 삭제(기존데이터는 삭제 X, 추가데이터만 삭제 O) - 추가
			case LAYER_TYPE_BUSINESS_A:
				let prop = ofeature.getProperties()
				if (prop.EDIT === 'Y') {
					this._trans.add(ITRANSACTION.DELETE, layer, ofeature)
				}
				nfeature.forEach(
					function (e) {
						this._trans.add(ITRANSACTION.INSERT, layer, ofeature, e)
					}.bind(this)
				)
				break
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : setDrawData
	 * 2. Comment   : 작업내역에 추가(사각형,다각형)내역을 저장한다.
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	setDrawData(layer, feature) {
		const name = layer.getProperties().name

		switch (name) {
			//토지실제이용은 공간정보 업데이트
			case LAYER_TYPE_LAD_REALNGR_VIEW_A:
				const today = getCurrentDate()
				const newfea = new ol.Feature({ GEOM: feature.getGeometry().clone() })

				newfea.setId(feature.getId())
				newfea.set('UPDDE', today.full)
				newfea.setGeometryName('GEOM')

				this._trans.add(ITRANSACTION.UPDATE, LAYER_TYPE_LAD_REALNGR_A, newfea)
				break

			case LAYER_TYPE_CADASTRAL_EDIT_A:
				feature.setProperties(_cadastral_up.getField())
				this._trans.add(ITRANSACTION.INSERT, name, feature, feature)
				break

			case LAYER_TYPE_BUSINESS_A:
				feature.setProperties(_business_area.getField())
				this._trans.add(ITRANSACTION.INSERT, name, feature, feature)
				break
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : chkSameFeature
	 * 2. Comment   : 연속 분할하며 지워질 해당 베이스피쳐가 Insert내역에 있다면 내역 제거
	 * 3. Author    : JYH
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	chkSameFeature(ofeature) {
		let addArr = this._trans._insert
		let index = null
		let ofea = null

		if (addArr.length > 0) {
			ofea = ofeature.getGeometry().transform('EPSG:3857', 'EPSG:5174')
			for (let i = 0; i < addArr.length; i++) {
				//지오메트리로 각각 비교
				if (JSON.stringify(ofea.getExtent()) == JSON.stringify(addArr[i].getProperties().GEOM.getExtent())) {
					index = i
					break
				}
			}
		}
		return index
	}

	/**
	 * <PRE>
	 * 1. MethodName : updateInsertData
	 * 2. Comment   : 신규생성한 객체에대해 편집을 할경우 해당객체의 지옴값을 변경
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 08.
	 * <PRE>
	 */
	updateInsertData(target, newfea) {
		const insert = this._trans._insert

		for (let i = 0; i < insert.length; ++i) {
			//새로만든 객체를 편집햇을꼉우
			if (insert[i].getId() === 'new_' + target.ol_uid) {
				insert[i].setProperties({ GEOM: new ol.geom.MultiPolygon([newfea.getGeometry()]) })
				break
			}
		}
	}

	/**
	 * <PRE>
	 * 1. MethodName : getFeature
	 * 2. Comment   : 선택된 퓨처를 리턴한다
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	getFeature() {
		const features = this.interaction.getFeatures()

		return features.getArray()
	}

	/**
	 * <PRE>
	 * 1. MethodName : unClick
	 * 2. Comment   : 레이어 선택을 막는다
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	unClick() {
		this._unClick = true
	}

	/**
	 * <PRE>
	 * 1. MethodName : onClick
	 * 2. Comment   : 레이어 선택을 허용한다
	 * 3. Author    : CIK
	 * 4. Date      : 2021. 07.
	 * <PRE>
	 */
	onClick() {
		this._unClick = false
	}

	/**
	 * <PRE>
	 * 1. MethodName : setTargetLayer
	 * 2. Comment   : 인터렉션 타겟레이어를 설정함 (기존 ncms는 dropdown으로 선택)
	 * 3. Author    : JYH
	 * 4. Date      : 2022. 08.
	 * <PRE>
	 */
	setTargetLayer(layerName: String) {
		this._targetLayer = layerName
	}

	/* Getter
	 * Setter */
	get mode() {
		return this._mode
	}

	get itModify() {
		return this._itModify
	}

	get itTranslate() {
		return this._itTranslate
	}

	get layers() {
		return this._layers
	}
}
