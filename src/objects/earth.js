import * as THREE from 'three';
import earthImg from '../assets/earth.png'; 

export function createEarth() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earthImg); 
    const geometry = new THREE.SphereGeometry(0.4, 32, 32); 
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8, 
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.set(23, 0, -40); 

    return mesh;
}