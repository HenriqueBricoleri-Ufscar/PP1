import * as THREE from 'three';
import ioImg from '../assets/io.jpg'; 

export function createIo() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(ioImg); 

    const geometry = new THREE.SphereGeometry(0.45, 32, 32); 
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.9, 
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.set(6, 0, 0); 

    return mesh;
}