import { createRenderer } from "./scene/renderer";
import { createScene } from "./scene/scene";
import { createCameras } from "./scene/camera";

import * as THREE from 'three';

async function init() {
    const renderer = createRenderer();
    document.body.appendChild(renderer.domElement);

    const scene = createScene();

    const {camera1, camera2} = createCameras();

    renderer.render(scene, camera1);
}   