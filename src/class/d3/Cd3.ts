import { Vector } from 'ol/layer'
import { fromLonLat, toLonLat } from 'ol/proj'
import { getWidth } from 'ol/extent'
import * as d3 from 'd3'
import CMap from '@class/map'
import * as topoJSON from 'topojson-client'
import {GeoPath, GeoProjection, Selection} from "d3";
import {TopoJSON} from "ol/format";


/**
 * <PRE>
 * 1. ClassName : Cd3
 * 2. Comment   : d3 클래스
 * 3. Author    : JSH
 * <PRE>
 */
class Cd3 extends  Vector<any> {
    data : TopoJSON
    features:any
    map:CMap
    path: GeoPath<GeoProjection> | any
    svg: Selection<any, any, any, any>
    g: any
    projection: GeoProjection | undefined
    type

    constructor(data: any, map:CMap, type:string) {
        super(data)
        this.type = type
        this.data = data
        this.features = topoJSON.feature(data,data.objects.skorea_provinces_2018_geo)
        this.map = map
        this.svg = d3.select(document.createElement('div')).append('svg').style('position', 'absolute').attr('class','layer')
        switch (type){
            case 'hover':
                this.svg.selectAll('path').data(this.features.features).enter().append('path').attr('class', 'boundary')
                break
            case 'bubble':
                this.g = this.svg.append('g')
                this.g.selectAll('path').data(this.features.features).enter().append('path').attr('class','paths')  // 데이터는 피쳐가 아닌 좌표값으로 들어감
                this.g.selectAll('circle').data(this.features.features).enter().append('circle').attr('class','circle')
                this.g.selectAll('text').data(this.features.features).enter().append('text').attr('class','text')
                break
        }
    }
    render(){
        this.createRender()
        return this.svg.node()
    }


    /**
     * <PRE>
     * 1. Name : createPath
     * 2. Comment   : path 생성
     * 3. Author    : JSH
     * <PRE>
     */
    private createPath(){
        this.path(this.features)
        this.svg.selectAll('path').attr('d', this.path)
        this.mouseOver('.boundary')
        this.mouseOut('.boundary')
    }


    /**
     * <PRE>
     * 1. Name : createCircle
     * 2. Comment   : circle 생성
     * 3. Author    : JSH
     * <PRE>
     */
    private createCircle() {
        let projection = this.projection!
        this.g.selectAll('circle')
            .attr('cx', (d:any) => projection([parseFloat(d.properties.x),parseFloat(d.properties.y)])![0])
            .attr('cy', (d:any) => projection([parseFloat(d.properties.x),parseFloat(d.properties.y)])![1])
            .attr('r', (d:any) => parseInt(d.properties.r)/2)
            .style('fill','red')
            .style("cursor", "pointer")
            .style('opacity','0.5')
        this.mouseOver('circle')
        this.mouseOut('circle')
    }


    /**
     * <PRE>
     * 1. Name : createText
     * 2. Comment   : text 생성
     * 3. Author    : JSH
     * <PRE>
     */
    private createText() {
        let projection = this.projection!
        this.g.selectAll('text')
            .attr('x', (d:any) => projection([parseFloat(d.properties.x),parseFloat(d.properties.y)])![0])
            .attr('y', (d:any) => projection([parseFloat(d.properties.x),parseFloat(d.properties.y)])![1])
            .attr('dy', '0.31em')
            .attr('text-anchor','middle')
            .text((d:any) => d.properties.name)
            .style('fill','white')
            .style('stroke','black')
            .style("cursor", "pointer")
        this.mouseOver('text')
        this.mouseOut('text')
    }


    /**
     * <PRE>
     * 1. Name : createDefs
     * 2. Comment   : defs 생성
     * 3. Author    : JSH
     * <PRE>
     */
    private createDefs() {
            this.g.selectAll('defs').selectAll('marker')
            .attr("id", 'arrow')
            .attr("viewBox", "0 -5 10 10")
            .attr("refX",3)
            .attr("refY",0)
            .attr("markerWidth",13)
            .attr("markerHeight",13)
            .attr("markerUnits","userSpaceOnUse")
            .attr("orient",'auto-start-reverse')
            .selectAll('path')
            .attr("d", "M0,-5 L8,0 L0,5 L3,0")
            .style("fill", 'blue')
            .style("stroke", 'skyblue')
            .attr("class", "arrowHead")
    }

        /**
     * <PRE>
     * 1. Name : createArrow
     * 2. Comment   : arrow 생성
     * 3. Author    : JSH
     * <PRE>
     */
    private createArrow() {
        let projection = this.projection!
        let line = d3.line().x((d:any) => projection([parseFloat(d.properties.x),parseFloat(d.properties.y)])![0])
            .y((d:any) => projection([parseFloat(d.properties.x),parseFloat(d.properties.y)])![1]).curve(d3.curveCardinal)
        this.g.selectAll('path')
            .attr('d', line(this.features.features))
            .style('fill','none')
            .style('stroke','blue')
            .style('stroke-width',10)
            .attr('marker-end','url(#arrow)')
            .style("cursor", "pointer")
            .transition().duration(2000).ease(d3.easeLinear).attr('height',100)
    }


    /**
     * <PRE>
     * 1. Name : mouseOver
     * 2. Comment   : mouseOver 생성
     * 3. Author    : JSH
     * <PRE>
     */
    public mouseOver(type:string) {
        this.svg.selectAll(type)
            .on('mouseover',function (){
                d3.select(this).transition().duration(100).style('display','none')
            })
    }


    /**
     * <PRE>
     * 1. Name : mouseOut
     * 2. Comment   : mouseOut 생성
     * 3. Author    : JSH
     * <PRE>
     */
    private mouseOut(type:string){
        this.svg.selectAll(type)
            .on('mouseout',function (){
                d3.select(this).transition().duration(100).style('display','block')
            })
    }


    /**
     * <PRE>
     * 1. Name : createRenderer
     * 2. Comment   : render 세팅
     * 3. Author    : JSH
     * <PRE>
     */
    private createRender() {
        let frameState = this.map.getView()
        const width = window.innerWidth
        const height = window.innerHeight
        const projection = frameState.getProjection()
        const d3Projection = d3.geoMercator().scale(1).translate([0, 0])
        let d3Path = d3.geoPath().projection(d3Projection)
        const pixelBounds = d3Path.bounds(this.features)
        const pixelBoundsWidth = pixelBounds[1][0] - pixelBounds[0][0]
        const pixelBoundsHeight = pixelBounds[1][1] - pixelBounds[0][1]

        const geoBounds = d3.geoBounds(this.features)
        const geoBoundsLeftBottom = fromLonLat(geoBounds[0], projection)
        const geoBoundsRightTop = fromLonLat(geoBounds[1], projection)
        let geoBoundsWidth = geoBoundsRightTop[0] - geoBoundsLeftBottom[0]
        if (geoBoundsWidth < 0) {
            geoBoundsWidth += getWidth(projection.getExtent())
        }
        const geoBoundsHeight = geoBoundsRightTop[1] - geoBoundsLeftBottom[1]

        const widthResolution = geoBoundsWidth / pixelBoundsWidth
        const heightResolution = geoBoundsHeight / pixelBoundsHeight
        const r = Math.max(widthResolution, heightResolution)
        const scale = r / frameState.getResolution()!

        const center:any = toLonLat(frameState.getCenter()!, projection)
        const angle = (-frameState.getRotation() * 180) / Math.PI
        d3Projection
            .scale(scale)
            .center(center)
            .translate([width / 2, height / 2])
            .angle(angle)
        this.projection = d3Projection
        this.path = d3Path.projection(d3Projection)
        this.svg.attr('width',width).attr('height',height)

        switch (this.type){
            case 'hover':
                this.createPath()
                break
            case 'bubble':
                this.createCircle()
                this.createText()
                // this.createDefs()
                this.createArrow()
                break
        }

    }

}
export default Cd3