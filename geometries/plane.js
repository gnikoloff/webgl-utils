import webGLUtils from '../utils'
import BaseGeometry from './base-geometry'

export default class Plane extends BaseGeometry {
    constructor (gl, props) {
        super(gl, props)

        this.x      = props.x
        this.y      = props.y
        this.width  = props.width
        this.height = props.height

        let x1 = this.x
        let y1 = this.y
        let x2 = this.width
        let y2 = this.height
        let positions = new Float32Array([
            x1, y1,
            x2, y1,
            x1, y2,
            x1, y2,
            x2, y1,
            x2, y2  
        ])

        let texCoords = new Float32Array([
            0.0,  0.0,
            1.0,  0.0,
            0.0,  1.0,
            0.0,  1.0,
            1.0,  0.0,
            1.0,  1.0
        ])

        this.positionBuffer = webGLUtils.makeAttribBuffer(gl, this.attributes.a_position, positions, 2, gl.FLOAT)
        this.uvBuffer = webGLUtils.makeAttribBuffer(gl, this.attributes.a_uv, texCoords, 2, gl.FLOAT)
        

    }

    renderFrame (gl) {
        gl.useProgram(this.program)
        gl.drawArrays(this.drawMode, 0, 6)
    }

}