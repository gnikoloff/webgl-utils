import webGLUtils from '../utils'

export default class BaseGeometry {
    constructor (gl, props) {
        this.drawMode = props.drawMode
        
        this.uniforms = {}
        this.attributes = {}

        const vertexShader = webGLUtils.makeShader(gl, gl.VERTEX_SHADER, props.vertexShader)
        const fragmentShader = webGLUtils.makeShader(gl, gl.FRAGMENT_SHADER, props.fragmentShader)
        this.program = webGLUtils.makeProgram(gl, vertexShader, fragmentShader)

        gl.useProgram(this.program)

        const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS)
        for (let i = 0; i < uniformCount; i += 1) {
            let uniformName = gl.getActiveUniform(this.program, i).name
            this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName)
        }
                
        const attribCount = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES)
        for (let i = 0; i < attribCount; i += 1) {
            let attribName = gl.getActiveAttrib(this.program, i).name
            this.attributes[attribName] = gl.getAttribLocation(this.program, attribName)
        }


        // uniforms
        gl.uniform2f(this.uniforms.u_resolution, window.innerWidth, window.innerHeight)

    }
}