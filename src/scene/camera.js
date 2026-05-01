import * as THREE from 'three';

//Cria e configura as duas câmeras requisitadas
export function createCameras(){
    const camera_1 = new THREE.PerspectiveCamera(fov, aspect, near, 800);
    camera_1.position.set(0, 0, 10);
    camera_1.lookAt(0,0,0);
    
    const camera_2 = new THREE.PerspectiveCamera(fov, aspect, near, 800);
    camera_2.position.set(0,-10, 0);
    camera_2.lookAt(0,0,0);
    
    return {camera_1, camera_2};
}