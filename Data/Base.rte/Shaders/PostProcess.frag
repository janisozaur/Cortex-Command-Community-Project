#version 300 es

precision mediump float;
precision mediump usampler2D;

in vec2 textureUV;

out vec4 FragColor;

uniform sampler2D rteTexture;
uniform vec4 rteColor;


void main()  {
    FragColor = texture(rteTexture, textureUV) * rteColor;
}
