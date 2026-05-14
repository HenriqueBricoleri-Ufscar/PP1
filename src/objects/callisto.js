import * as THREE from 'three';
import callistoImg from '../assets/callisto.jpg'; 

export function createCallisto() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(callistoImg); 
    const geometry = new THREE.SphereGeometry(0.5, 32, 32); 
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8, 
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.set(15, 0, 0); 

    return mesh;
}