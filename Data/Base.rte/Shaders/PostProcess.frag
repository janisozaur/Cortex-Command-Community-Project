#version 300 es

precision highp float;
precision highp usampler2D;

in highp vec2 textureUV;

out highp vec4 FragColor;

uniform sampler2D rteTexture;
uniform vec4 rteColor;


void main()  {
    FragColor = texture(rteTexture, textureUV) * rteColor;
}
