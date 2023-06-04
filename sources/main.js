import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

//
// Loaders
// draco
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco')
// gltf
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

//
// Models
// Bed
let bed
gltfLoader.load
(
    'glb/bed.glb',
    (gltf) => 
    {
        bed = gltf.scene

        bed.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        bed.scale.set(3, 3, 3)
        bed.position.x = -1
        bed.position.y= -1
        bed.position.z= -2.5
        scene.add(bed)
    }
)

// Shelfs
let firstShelf
gltfLoader.load
(
    'glb/shelf.glb',
    (gltf) => 
    {
        firstShelf = gltf.scene

        firstShelf.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        firstShelf.scale.set(1, 1, 1)
        firstShelf.position.x = 1.2
        firstShelf.position.y= 0.5
        firstShelf.position.z= -5.2
        firstShelf.rotation.z = Math.PI * 0.5
        scene.add(firstShelf)
    }
)
//
let secondShelf
gltfLoader.load
(
    'glb/shelf.glb',
    (gltf) => 
    {
        secondShelf = gltf.scene

        secondShelf.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        secondShelf.scale.set(1, 1, 1)
        secondShelf.position.x = -4.2
        secondShelf.position.y= 0.5
        secondShelf.position.z= -5.2
        secondShelf.rotation.z = Math.PI * 0.5
        scene.add(secondShelf)
    }
)
// Window
let porthole
gltfLoader.load
(
    'glb/window.glb',
    (gltf) => 
    {
        porthole = gltf.scene

        porthole.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        porthole.scale.set(0.9, 0.9, 0.9)
        porthole.position.x= 4.5
        porthole.position.y= 3.3
        porthole.position.z= 1
        porthole.rotation.y= Math.PI * 2.5
        scene.add(porthole)
    }
)
// Chair
let chair
gltfLoader.load
(
    'glb/chair.glb',
    (gltf) => 
    {
        chair = gltf.scene

        chair.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        chair.scale.set(0.07, 0.07, 0.07)
        chair.position.x= -17
        chair.position.y= -1
        chair.position.z= 24
        chair.rotation.y = 0.3
        scene.add(chair)
    }
)
// Desk
let desk
gltfLoader.load
(
    'glb/desk.glb',
    (gltf) => 
    {
        desk = gltf.scene

        desk.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        desk.scale.set(2.5, 2.5, 2.5)
        desk.position.x= 3
        desk.position.y= 0.2
        desk.position.z= 2.8
        desk.rotation.y= - Math.PI * 0.5
        scene.add(desk)
    }
)
// Bag
let bag
gltfLoader.load
(
    'glb/bag.glb',
    (gltf) => 
    {
        bag = gltf.scene

        bag.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        bag.scale.set(20, 20, 20)
        bag.position.x= 2
        bag.position.y= -1
        bag.position.z= -3
        bag.rotation.y= Math.PI * 0.6
        scene.add(bag)
    }
)
// Flower
let orchid
gltfLoader.load
(
    'glb/orchid.glb',
    (gltf) => 
    {
        orchid = gltf.scene

        orchid.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        orchid.scale.set(0.5, 0.5, 0.5)
        orchid.position.x= 4
        orchid.position.y= 1.4
        orchid.position.z= 3
        orchid.rotation.y= - Math.PI * 0.5
        scene.add(orchid)
    }
)
// 
// Computer
// 
// Moniteur
let computer
gltfLoader.load
(
    'glb/computer.glb',
    (gltf) => 
    {
        computer = gltf.scene

        computer.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        computer.scale.set(0.05, 0.05, 0.05)
        computer.position.x= 1.5
        computer.position.y= 1.5
        computer.position.z= 4.7
        computer.rotation.y=  Math.PI * 0.5
        scene.add(computer)
    }
)
// Keyboard
let keyboard
gltfLoader.load
(
    'glb/keyboard.glb',
    (gltf) => 
    {
        keyboard = gltf.scene

        keyboard.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        keyboard.scale.set(0.9, 0.9, 0.9)
        keyboard.position.x= 1.5
        keyboard.position.y= 1.5
        keyboard.position.z= 3.8
        scene.add(keyboard)
    }
)
// Mouse
let mouse
gltfLoader.load
(
    'glb/mouse.glb',
    (gltf) => 
    {
        mouse = gltf.scene

        mouse.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        mouse.scale.set(0.09, 0.09, 0.09)
        mouse.position.x= -0.1
        mouse.position.y= 1.5
        mouse.position.z= 4
        scene.add(mouse)
    }
)
// Mirror
let mirror
gltfLoader.load
(
    'glb/mirror.glb',
    (gltf) => 
    {
        mirror = gltf.scene

        mirror.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        mirror.scale.set(0.07, 0.07, 0.07)
        mirror.position.x= 4
        mirror.position.y= -1
        mirror.position.z= -4.5
        mirror.rotation.y= - Math.PI * 0.3
        scene.add(mirror)
    }
)
// Phone
let phone
gltfLoader.load
(
    'glb/phone.glb',
    (gltf) => 
    {
        phone = gltf.scene

        phone.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })
        phone.scale.set(0.02, 0.02, 0.02)
        phone.position.x= -3
        phone.position.y= 0.5
        phone.position.z= -1
        scene.add(phone)
    }
)

// 
// Textures//
const textureLoader = new THREE.TextureLoader()
// floor
const marbled = textureLoader.load('jpg/marbled.jpg')
marbled.wrapS = THREE.RepeatWrapping
marbled.wrapT = THREE.RepeatWrapping
marbled.repeat.x = 3
marbled.repeat.y = 3

// Scene
const scene = new THREE.Scene()

// Sizes
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

// Resize
window.addEventListener('resize', () =>
{
    // Update sizes object
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
 
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.x = -15
camera.position.y = 4
camera.position.z = -2
scene.add(camera)

// Lights
// ambiant light
const ambiantLight = new THREE.AmbientLight(0xFFFFFF, 2)
// scene.add(ambiantLight)

// pointLight
const pointLight = new THREE.PointLight(0xffffff, 1, 10)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

// directionnal light
const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5)
directionalLight.castShadow = true
directionalLight.position.x = - 1
directionalLight.position.y = 2
directionalLight.position.z = 3
scene.add(directionalLight)

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 11),
    new THREE.MeshBasicMaterial({ map: marbled})
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = - 1
floor.position.Z = -2
scene.add(floor)

// 
// Walls
// 
// First Wall
const firstWall = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 10),
    new THREE.MeshStandardMaterial({ color: 0x535659})
)
firstWall.position.y = 2
firstWall.position.z = -5.5
firstWall.rotation.z = - Math.PI * 0.5
scene.add(firstWall)

// Second Wall
const secondWall = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 11),
    new THREE.MeshStandardMaterial({ color: 0x303438})
)
secondWall.position.x = 5
secondWall.position.y = 2
secondWall.rotation.x = - Math.PI * 0.5
secondWall.rotation.y = - Math.PI * 0.5
scene.add(secondWall)

// Third Wall
const thirdWall = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 10),
    new THREE.MeshStandardMaterial({ color: 0x282828})
)
thirdWall.position.x = 0
thirdWall.position.y = 2
thirdWall.position.z = 5.5
thirdWall.rotation.z = - Math.PI * 0.5
scene.add(thirdWall)

// 
// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.outputEncoding = THREE.sRGBEncoding
renderer.physicallyCorrectLights = true
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

// 
// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true


// 
// Loop
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update controls
    controls.update()

    // Update phone
    if(phone != null)
        phone.rotation.y = Math.sin(Date.now() * 0.1) * 0.1 * Math.sin(Date.now() * 0.03) * 0.5 + 0.5
    
    // Render
    renderer.render(scene, camera)
}
loop()