/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var axes: AxisHelper;
var sun: Mesh;
var plane: Mesh;
var sphere: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var cubeGeometry: CubeGeometry;
var cubeMaterial: LambertMaterial;
var firstPlanet: Mesh;
var secondPlanet: Mesh;
var thirdPlanet: Mesh;
var fourthPlanet: Mesh;
var fifthPlanet: Mesh;
var secondPlanetParent: Mesh;
var thirdPlanetParent: Mesh;
var fourthPlanetParent: Mesh;
var fifthPlanetParent: Mesh;
var moon: Mesh;
var sphereGeometry: SphereGeometry;

function init() {
    // Instantiate a new Scene object
    scene = new Scene();

    setupRenderer(); // setup the default renderer
	
    setupCamera(); // setup the camera
	
    // add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    
    // //Add a Plane to the Scene
    // plane = new gameObject(
    //     new PlaneGeometry(20, 20, 1, 1),
    //     new LambertMaterial({ color: 0xff35ff }),
    //     0, 0, 0);

    // plane.rotation.x = -0.5 * Math.PI;

    // scene.add(plane);
    // console.log("Added Plane Primitive to scene...");
    
    //Add a Sun to the Scene+++++++++++++++++++++++++++++++++++++++++++//
    var sunTexture = THREE.ImageUtils.loadTexture('../../Assets/Images/sun.png');
    sun = new gameObject(
        new SphereGeometry(10, 32, 32),
        new LambertMaterial({ map: sunTexture }),
        0, 0, 0);

    scene.add(sun);
    console.log("Added Sun Primitive to scene...");
    
    //Add First Planet to the scene ++++++++++++++++++++++++++++++++++++++//
    var firstTexture = THREE.ImageUtils.loadTexture('../../Assets/Images/planetONE.png');
    firstPlanet = new gameObject(
        new SphereGeometry(2, 32, 32),
        new LambertMaterial({ map: firstTexture }),
        30, 4, 0);

    sun.add(firstPlanet)
    console.log("Added First Planet Primitive to cube object...");
    
    //Add a Second Planet Parent to the Scene++++++++++++++++++++++++++++++++++++//
    
    secondPlanetParent = new gameObject(
        new CubeGeometry(1, 1, 1),
        new LambertMaterial({ color: 0xff35ff }),
        0, 0, 0);

    scene.add(secondPlanetParent);
    console.log("Added Second Planet Parent to scene...");


    var secondTexture = THREE.ImageUtils.loadTexture('../../Assets/Images/planetTWO.png');
    secondPlanet = new gameObject(
        new SphereGeometry(1.5, 32, 32),
        new LambertMaterial({ map: secondTexture }),
        0, 8, 45);

    secondPlanetParent.add(secondPlanet)
    console.log("Added Second Planet Primitive to cube object...");
    
    //Add a Third Planet Parent to the Scene++++++++++++++++++++++++++++++++++++//
    
    thirdPlanetParent = new gameObject(
        new CubeGeometry(1, 1, 1),
        new LambertMaterial({ color: 0xff35ff }),
        0, 0, 0);

    scene.add(thirdPlanetParent);
    console.log("Added Third Planet Parent to scene...");

    var threeTexture = THREE.ImageUtils.loadTexture('../../Assets/Images/planetTHREE.png');
    thirdPlanet = new gameObject(
        new SphereGeometry(4, 32, 32),
        new LambertMaterial({ map: threeTexture }),
        -70, 12, 0);

    thirdPlanetParent.add(camera);
    thirdPlanetParent.add(thirdPlanet)
    console.log("Added Third Planet Primitive to cube object...");
    
    //Add a moon to the third planet ++++++++++++++++++++++++++++++++++++++++++++++//
    var moonTexture = THREE.ImageUtils.loadTexture('../../Assets/Images/moon.png');
    moon = new gameObject(
        new SphereGeometry(1, 32, 32),
        new LambertMaterial({ map: moonTexture }),
        5, 0, 0);

    moon.castShadow = true;
    thirdPlanet.add(moon)
    console.log("Added moon to the Third Planet");
    
    
    //Add a Fourth Planet Parent to the Scene++++++++++++++++++++++++++++++++++++//
    
    fourthPlanetParent = new gameObject(
        new CubeGeometry(1, 1, 1),
        new LambertMaterial({ color: 0xff35ff }),
        0, 0, 0);

    scene.add(fourthPlanetParent);
    console.log("Added Fourth Planet Parent to scene...");

    var fourTexture = THREE.ImageUtils.loadTexture('../../Assets/Images/planetFOUR.png');
    fourthPlanet = new gameObject(
        new SphereGeometry(3, 32, 32),
        new LambertMaterial({ map: fourTexture }),
        0, 16, -100);

    fourthPlanetParent.add(fourthPlanet)
    console.log("Added Fourth Planet Primitive to cube object...");
    
    //Add a Fifth Planet Parent to the Scene++++++++++++++++++++++++++++++++++++//
    
    fifthPlanetParent = new gameObject(
        new CubeGeometry(1, 1, 1),
        new LambertMaterial({ color: 0xff35ff }),
        0, 0, 0);

    scene.add(fifthPlanetParent);
    console.log("Added Fifth Planet Parent to scene...");

    var fiveTexture = THREE.ImageUtils.loadTexture('../../Assets/Images/planetFIVE.png');
    fifthPlanet = new gameObject(
        new SphereGeometry(3, 32, 32),
        new LambertMaterial({ map: fiveTexture }),
        -140, 20, 0);

    fifthPlanetParent.add(fifthPlanet)
    console.log("Added Fourth Planet Primitive to cube object...");
    
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x646464);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
	
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(0, 31, 0);
    spotLight.rotation.set(0, 0, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(0, -31, 0);
    spotLight.rotation.set(0, 180, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(31, 0, 0);
    spotLight.rotation.set(0, 90, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(0, 0, 31);
    spotLight.rotation.set(270, 0, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(0, 0, -31);
    spotLight.rotation.set(90, 0, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-31, 0, 0);
    spotLight.rotation.set(0, 270, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // add controls
    gui = new GUI();
    control = new Control(0.005, 0.005, 0.010, 0.015, 0.02, 0.0025, 0.0015, 0.006, 0.007, 0.0060);
    addControl(control);

    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");

    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    
    window.addEventListener('resize', onResize, false);
}

function onResize(): void {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}

function addControl(controlObject: Control): void {
    gui.add(controlObject, 'firstPlanetRotation', -0.05, 0.05);
    gui.add(controlObject, 'firstPlanetOrbit', -0.05, 0.05);

    gui.add(controlObject, 'zoomOut');
    gui.add(controlObject, 'zoomIn');
}

function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}

// Setup main game loop
function gameLoop(): void {
    stats.update();

    sun.rotation.y += control.firstPlanetOrbit;
    firstPlanet.rotation.y += control.firstPlanetRotation;

    secondPlanetParent.rotation.y += control.secondPlanetOrbit;
    secondPlanet.rotation.y += control.secondPlanetRotation;

    thirdPlanetParent.rotation.y += control.thirdPlanetOrbit;
    thirdPlanet.rotation.y += control.thirdPlanetRotation;

    fourthPlanetParent.rotation.y += control.fourthPlanetOrbit;
    fourthPlanet.rotation.y += control.fourthPlanetRotation;

    fifthPlanetParent.rotation.y += control.fifthPlanetOrbit;
    fifthPlanet.rotation.y += control.fifthPlanetRotation;
    
    // manages the zoomIn and zoomOut of the camera
    //control.zoomIn();
    //control.zoomOut();
    camera.position.x = thirdPlanet.position.x - 5;
    camera.position.z = thirdPlanet.position.z;
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	
    // render the scene
    renderer.render(scene, camera);

}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0.6;
    camera.position.y = 60;
    camera.position.z = -175.5;
    // camera.position.x = 0.6;
    // camera.position.y = 16;
    // camera.position.z = -20.5;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
