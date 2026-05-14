import * as THREE from 'three';
import marteImg from '../assets/marte.png'; 

export function createMarte() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(marteImg); 
    const geometry = new THREE.SphereGeometry(0.2, 32, 32); 
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8, 
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.set(12, 0, -17); 

    return mesh;
}