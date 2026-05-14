import * as THREE from 'three';
import ganimedesImg from '../assets/ganimedes.png';

export function createGanimedes() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(ganimedesImg);

    const geometry = new THREE.SphereGeometry(0.6, 32, 32);

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8,
     });

     const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(10, 0, 0);

        return mesh;
}