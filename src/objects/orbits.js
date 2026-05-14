import * as THREE from 'three'

function addOrbitRing(scene, radius, color){
    const opacity = 0.2;

    const geo = new THREE.RingGeometry(radius - 0.01, radius + 0.01, 180);
    const mat = new THREE.MeshBasicMaterial({
        color,
        
    })
}