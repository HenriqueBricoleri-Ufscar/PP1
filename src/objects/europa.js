import * as THREE from 'three';
import europaImg from '../assets/europa.jpg'; 

export function createEuropa() {
    const textureLoader = new THREE.TextureLoader();
    
    const texture = textureLoader.load(europaImg); 

    const geometry = new THREE.SphereGeometry(0.35, 32, 32); 
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8, 
    });

    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(6, -0.5, 0);

    return mesh;
}