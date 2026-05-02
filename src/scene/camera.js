import * as THREE from 'three';

//Cria e configura as duas câmeras requisitadas
export function createCameras(){
    const aspect = window.innerWidth / window.innerHeight;

    const camera1 = new THREE.PerspectiveCamera(50, aspect, 0.1, 800);
    camera1.position.set(0, 0, 10);
    camera1.lookAt(0,0,0);
    
    const camera2 = new THREE.PerspectiveCamera(50, aspect, 0.1, 800);
    camera2.position.set(0,-10, 0);
    camera2.lookAt(0,0,0);
    
    return {camera1, camera2};
}