export default {

    makeAttribBuffer: (gl, attribLocation, data, count, type) => {
        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW)
        gl.vertexAttribPointer(attribLocation, count, type, false, 0, 0)
        gl.enableVertexAttribArray(attribLocation)

        return buffer
    },

    makeShader: (gl, type, source) => {
        const shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader

        console.log(gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
    },

    makeProgram: (gl, vertexShader, fragmentShader) => {
        const program = gl.createProgram()
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)
 
        if (gl.getProgramParameter(program, gl.LINK_STATUS)) return program

        console.log(gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
    }

}