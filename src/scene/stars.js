import * as THREE from 'three'

export function addStarField(scene){
    const count = 6000;
    const pos = new Float32Array(count * 3);
    const size = new Float32Array(count);

    for (let i = 0;i < count; i++){
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 180 + Math.random() * 60;

        pos[i*3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i*3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i*3 + 2] = r * Math.cos(phi);

        size[i] = 0.12 + Math.random() * 0.35;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(size, 1));

    const text = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.2,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9
    });

    scene.add(new THREE.Points(geo, text));
}