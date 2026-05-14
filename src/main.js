import { createRenderer } from "./scene/renderer.js";
import { createScene } from "./scene/scene.js";
import { createCameras } from "./scene/camera.js";
import { addLights } from "./scene/light.js";
import { addStarField } from "./scene/stars.js";
import { createJupiter } from "./objects/jupiter.js";
import { createEuropa } from "./objects/europa.js";

import * as THREE from 'three';

async function init() {
    const renderer = createRenderer();
    document.body.appendChild(renderer.domElement);

    const scene = createScene();
    addLights(scene);
    addStarField(scene);

    const {camera1} = createCameras();

    
    const {mesh: jupiter} = await createJupiter();
    scene.add(jupiter);
    
    const europa = createEuropa();
    scene.add(europa);

    let angle = 0;
    
    function animate() {
        requestAnimationFrame(animate);

        angle += 0.01;
        europa.position.x = Math.cos(angle) * 4; 
        europa.position.z = Math.sin(angle) * 4;
        
        europa.rotation.y += 0.005;
        jupiter.rotation.y += 0.002;

        renderer.render(scene, camera1);
    }

    animate()

    renderer.render(scene, camera1);
}   

init();