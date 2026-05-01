import * as THREE from 'three'

//Cria o espaço(literalmente) que será colocado os planetas
export function createScene(){
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00010a);
    scene.fog = new THREE.FogExp2(0x00010a, 0.003);
    
    return scene;
}