import { createRenderer } from "./scene/renderer.js";
import { createScene } from "./scene/scene.js";
import { createCameras } from "./scene/camera.js";
import { addLights } from "./scene/light.js";
import { addStarField } from "./scene/stars.js";
import { createJupiter } from "./objects/jupiter.js";

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

    renderer.render(scene, camera1);
}   

init();