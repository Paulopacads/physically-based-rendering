export default `
precision highp float;

in vec3 in_position;
in vec3 in_normal;
#ifdef USE_UV
in vec2 in_uv;
#endif // USE_UV

/**
* Varyings.
*/

out vec3 vertexPosition;
out vec3 vNormalWS;
#ifdef USE_UV
    out vec2 vUv;
#endif // USE_UV

/**
* Uniforms List
*/

struct Model
{
    mat4 localToProjection;
    mat4 translation;
};

uniform Model uModel;

void main()
{
    vec4 positionLocal = uModel.translation * vec4(in_position, 1.0);
    gl_Position = uModel.localToProjection * positionLocal;
    vertexPosition = vec3(positionLocal);
    vNormalWS = in_normal;
}
`;
