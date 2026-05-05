import * as THREE from 'three';

async function loadShader(path) {
  const url = new URL(path, import.meta.url);
  const res = await fetch(url);
  return res.text();
}


//Mesh baseada em um RawShaderMaterial e um geóide
export async function createJupiter(){
    const [jupiterVS, jupiterFS] = await Promise.all([
        loadShader('../shaders/jupiter.vert.glsl'),
        loadShader('../shaders/jupiter.frag.glsl')
    ]);

    const jupiterGeo = new THREE.SphereGeometry(2, 128, 64);
    const uniforms = {
        time: {value: 0.0},
        sunDir: {value: new THREE.Vector3(10, 5, 5).normalize()}
    };

    const jupiterMat = new THREE.RawShaderMaterial({
        vertexShader: jupiterVS,
        fragmentShader: jupiterFS,
        uniforms
    })

    const mesh = new THREE.Mesh(jupiterGeo, jupiterMat);

    return {mesh, uniforms};
} 
