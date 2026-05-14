import * as THREE from 'three';
import marteImg from '../assets/marte.png'; 

export function createMarte() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(marteImg); 
    const geometry = new THREE.SphereGeometry(0.55, 32, 32); 
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8, 
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.set(15, 0, -20); 

    return mesh;
}