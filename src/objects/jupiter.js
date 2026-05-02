import * as THREE from 'three';

//Mesh baseada em um RawShaderMaterial e um geóide
export function createJupiter(){
    const jupiterGeo = new THREE.SphereGeometry(2, 128, 64);
    const uniforms = {
        time: {value: 0.0},
        sunDir: {value: new THREE.Vector3(10, 5, 5).normalize()}
    };

    const jupiterMat = new THREE.MeshStandardMaterial({ color: 0xd2a46a, roughness: 0.8 });

    const mesh = new THREE.Mesh(jupiterGeo, jupiterMat);

    return {mesh, uniforms};
} 
