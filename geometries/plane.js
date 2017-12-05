import webGLUtils from '../utils'

class Plane {
    constructor (gl, props) {
        this.width  = props.width
        this.height = props.height

        const vertexShader = webGLUtils.makeShader(gl, gl.VERTEX_SHADER, props.vertexShader)
        const fragmentShader = webGLUtils.makeShader(gl, gl.FRAGMENT_SHADER, props.fragmentShader)
        this.program = webGLUtils.makeProgram(gl, vertexShader, fragmentShader)
        gl.useProgram(this.program)
                

    }

    loadUniforms () {

    }

}