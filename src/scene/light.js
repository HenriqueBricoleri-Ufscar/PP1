import * as THREE from 'three'

export function addLights(scene){
    const ambientLight = new THREE.AmbientLight(0x0d1a33, 0.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff2e0, 2.2);
    sunLight.position.set(12, 7, 8);
    sunLight.castShadow = true;
    sunLight.shadow.camera.far = 80;
    scene.add(sunLight);
}