import { createRenderer } from "./scene/renderer.js";
import { createScene } from "./scene/scene.js";
import { createCameras } from "./scene/camera.js";
import { addLights } from "./scene/light.js";
import { addStarField } from "./scene/stars.js";
import { createJupiter } from "./objects/jupiter.js";
import { createEuropa } from "./objects/europa.js";
import { createIo } from "./objects/io.js";
import { createCallisto } from "./objects/callisto.js";
import { createGanimedes } from "./objects/ganimedes.js";
import { createEarth } from "./objects/earth.js";

import * as THREE from 'three';
import { call } from "three/src/nodes/code/FunctionCallNode.js";

async function init() {
    const renderer = createRenderer();
    document.body.appendChild(renderer.domElement);

    const scene = createScene();
    addLights(scene);
    addStarField(scene);

    const { camera1, camera2 } = createCameras();
    
    let activeCamera = camera1;

    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'c') {
            activeCamera = (activeCamera === camera1) ? camera2 : camera1;
        }
    });

    const {mesh: jupiter} = await createJupiter();
    scene.add(jupiter);
    
    const europa = createEuropa();
    scene.add(europa);

    const io = createIo();
    scene.add(io);

    const callisto = createCallisto();
    scene.add(callisto);

    const ganimedes = createGanimedes();
    scene.add(ganimedes);

    const earth = createEarth();
    scene.add(earth);

    let angle = 0;
    
    function animate() {
        requestAnimationFrame(animate);

        angle += 0.01;
        europa.position.x = Math.cos(angle) * 4; 
        europa.position.z = Math.sin(angle) * 4;
        europa.rotation.y += 0.005;

        io.position.x = Math.cos(angle * 0.8) * 6; 
        io.position.z = Math.sin(angle * 0.8) * 6;
        io.rotation.y += 0.008;

        callisto.position.x = Math.cos(angle * 0.6) * 10; 
        callisto.position.z = Math.sin(angle * 0.6) * 10;
        callisto.rotation.y += 0.003;

        ganimedes.position.x = Math.cos(angle * 0.4) * 8; 
        ganimedes.position.z = Math.sin(angle * 0.4) * 8;
        ganimedes.rotation.y += 0.002;

        jupiter.rotation.y += 0.002;

        earth.rotation.y += 0.001;

        renderer.render(scene, activeCamera);
    }

    animate();
}   

init();