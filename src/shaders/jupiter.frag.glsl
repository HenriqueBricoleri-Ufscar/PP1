precision highp float;

varying vec2 vUv;

float noise1D(float x){
  return fract(sin(x * 12.9898) * 43758.5453);
}

void main(){
  float v = vUv.y;

  float bandA = sin(v * 18.0) * 0.5 + 0.5;
  float bandB = sin(v * 36.0 + 1.2) * 0.5 + 0.5;

  float n = (noise1D(v * 40.0) - 0.5) * 0.12;
  float mixBand = bandA * 0.7 + bandB * 0.3 + n;

  vec3 c1 = vec3(0.88, 0.53, 0.22);
  vec3 c2 = vec3(0.97, 0.91, 0.76);
  vec3 c3 = vec3(0.62, 0.30, 0.10);

  vec3 col = mix(c1, c2, mixBand);
  col = mix(col, c3, bandB * 0.25);

  //Mancha Vermelha
  vec2 p = vUv - vec2(0.62, 0.42);
  p.x *= 2.2;                          
  float grs = smoothstep(0.16, 0.0, length(p));
  vec3 grsColor = vec3(0.72, 0.22, 0.10);

  col = mix(col, grsColor, grs);
  col *= 0.9;

  gl_FragColor = vec4(col, 1.0);
}