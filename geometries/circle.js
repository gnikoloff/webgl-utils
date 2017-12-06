import webGLUtils from '../utils'
import BaseGeometry from './base-geometry'

export default class Circle extends BaseGeometry {
    constructor (gl, props) {
        super(gl, props)

        this.x         = props.x
        this.y         = props.y
        this.radius    = props.radius
        this.numPoints = props.numPoints

        let positions = new Float32Array(this.numPoints * 2)
        
        let step = (Math.PI * 2) / this.numPoints
        for (let i = 0; i < this.numPoints; i += 1) {
            positions[i * 2 + 0] = this.x + Math.sin(i * step) * this.radius
            positions[i * 2 + 1] = this.y + Math.cos(i * step) * this.radius
        }
        console.log(positions)

        this.positionBuffer = webGLUtils.makeAttribBuffer(gl, this.attributes.a_position, positions, 2, gl.FLOAT)
        
    }

    rendrFrame (gl) {
        gl.useProgram(this.program)
        gl.drawArrays(this.drawMode, 0, this.numPoints)
    }

}