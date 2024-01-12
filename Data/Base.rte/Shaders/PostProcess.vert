#version 300 es

layout (location = 0) in vec2 rteVertexPosition;
layout (location = 1) in vec2 rteTexUV;

out highp vec2 textureUV;

uniform highp mat4 rteTransform;
uniform highp mat4 rteProjection;


void main() {
    gl_Position = rteProjection * rteTransform * vec4(rteVertexPosition, 0.0, 1.0);
    textureUV = vec2(rteTexUV.x, -rteTexUV.y);
}
