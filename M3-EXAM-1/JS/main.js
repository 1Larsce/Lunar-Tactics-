import * as THREE from './three.module.js';
import {OrbitControls} from './OrbitControls.js';

//Creating the Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Controls
const controls = new OrbitControls(camera, renderer.domElement);

//Camera
camera.position.x= 0;
camera.position.y = 200;
camera.position.z = 50;

//Particles
let stars, starGeo;
controls.update

particles();

//Textures

//Map Texture
const tftterrain = new THREE.TextureLoader().load('./Assets/Textures/Terrain.png');
const borders = new THREE.TextureLoader().load('./Assets/Textures/Border.png');
const loota = new THREE.TextureLoader().load('./Assets/Textures/LootA.png');
const lootb = new THREE.TextureLoader().load('./Assets/Textures/LootB.png');
const unitsa = new THREE.TextureLoader().load('./Assets/Textures/UnitsA.png');
const unitsb = new THREE.TextureLoader().load('./Assets/Textures/UnitsB.png');
const cannonA = new THREE.TextureLoader().load('./Assets/Textures/Ally Cannon.png');
const cannonB = new THREE.TextureLoader().load('./Assets/Textures/Enemy Cannon.png');
const sellally = new THREE.TextureLoader().load('./Assets/Textures/sell1.png');
const sellenemy = new THREE.TextureLoader().load('./Assets/Textures/sell2.png');
const goldone = new THREE.TextureLoader().load('./Assets/Textures/goldone.png');
const goldtwo = new THREE.TextureLoader().load('./Assets/Textures/goldtwo.png');
const lunar1 = new THREE.TextureLoader().load('./Assets/Textures/Lunar.png');
const tactics1 = new THREE.TextureLoader().load('./Assets/Textures/Tactics.png');

// Item Texture
const botrk = new THREE.TextureLoader().load('./Assets/Textures/Items/BOTRK.png');
const cosmicdrive = new THREE.TextureLoader().load('./Assets/Textures/Items/CosmicDrive.png');
const thydra = new THREE.TextureLoader().load('./Assets/Textures/Items/Hydra.png');
const shurelya = new THREE.TextureLoader().load('./Assets/Textures/Items/Shurelya.png');
const sunfire = new THREE.TextureLoader().load('./Assets/Textures/Items/Sunfire.png');
const warmogs = new THREE.TextureLoader().load('./Assets/Textures/Items/Warmogs.png');

// Avatar Model Texture
const poro1 = new THREE.TextureLoader().load('./Assets/Textures/Avatars/Poro2.png')
const river1 = new THREE.TextureLoader().load('./Assets/Textures/Avatars/River Sprite.png')


// Lights
const ambientlight = new THREE.AmbientLight( 0x404040 ); 
scene.add( ambientlight );

function lighting() {
    const light = new THREE.HemisphereLight(0xFF0000, 0x1c3020, 1);
    scene.add(light);
  
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 200, 40);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1000;
    spotLight.shadow.mapSize.height = 1000;
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;
    scene.add(spotLight);
  }
  
  lighting();

// Geometry

// Base Map

const terraingeometry = new THREE.BoxGeometry( 200, 10, 200 );
const terrainmaterial = new THREE.MeshPhongMaterial( { map: tftterrain } );
const terrain = new THREE.Mesh( terraingeometry, terrainmaterial );
scene.add( terrain );

const bordergeometry = new THREE.BoxGeometry( 260, 5, 260 );
const bordermaterial = new THREE.MeshPhongMaterial( {map: borders} );
const border = new THREE.Mesh( bordergeometry, bordermaterial );
scene.add( border );

// Avatar - Poro vs River Sprite
const porogeometry = new THREE.SphereGeometry( 18, 40, 20 );
const poromaterial = new THREE.MeshBasicMaterial( { map: poro1 } );
const poro = new THREE.Mesh( porogeometry, poromaterial );
scene.add( poro );

poro.position.x = 0
poro.position.y = 20
poro.position.z = 50

poro.rotation.x = 0
poro.rotation.y = 7.8
poro.rotation.z = 0

poro.add( poro );

const rspritegeometry = new THREE.SphereGeometry( 18, 40, 20 );
const rspritematerial = new THREE.MeshBasicMaterial( { map: river1 } );
const rsprite = new THREE.Mesh( rspritegeometry, rspritematerial );
scene.add( rsprite );

rsprite.position.x = 0
rsprite.position.y = 20
rsprite.position.z = -50

rsprite.rotation.x = 0
rsprite.rotation.y = 4.8
rsprite.rotation.z = 0

rsprite.add( rsprite );

// Item Loot Spawns - Ally

const loot1geometry = new THREE.CylinderGeometry( 15, 15, 10, 32 );
const loot1material = new THREE.MeshLambertMaterial( { map: loota} );
const loot1 = new THREE.Mesh( loot1geometry, loot1material );

loot1.position.x = -105
loot1.position.y = 9
loot1.position.z = 105
scene.add( loot1 );

// Item Loot Spawns - Enemy

const loot2geometry = new THREE.CylinderGeometry( 15, 15, 10, 32 );
const loot2material = new THREE.MeshLambertMaterial( {map: lootb} );
const loot2 = new THREE.Mesh( loot2geometry, loot2material );

loot2.position.x = 105
loot2.position.y = 9
loot2.position.z = -105
scene.add( loot2 )

// Units Spawnpoint

// Allied Units

const unitsAgeometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsAmaterial = new THREE.MeshBasicMaterial( {map: unitsa} );
const unitsA = new THREE.Mesh( unitsAgeometry, unitsAmaterial );
scene.add( unitsA );

unitsA.position.x = -70
unitsA.position.y = 0
unitsA.position.z = 112

const unitsA2geometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsA2material = new THREE.MeshBasicMaterial( {map: unitsa} );
const unitsA2 = new THREE.Mesh( unitsA2geometry, unitsA2material );
scene.add( unitsA2 );

unitsA2.position.x = -45
unitsA2.position.y = 0
unitsA2.position.z = 112

const unitsA3geometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsA3material = new THREE.MeshBasicMaterial( {map: unitsa} );
const unitsA3 = new THREE.Mesh( unitsA3geometry, unitsA3material );
scene.add( unitsA3 );

unitsA3.position.x = -20
unitsA3.position.y = 0
unitsA3.position.z = 112

const unitsA4geometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsA4material = new THREE.MeshBasicMaterial( {map: unitsa} );
const unitsA4 = new THREE.Mesh( unitsA4geometry, unitsA4material );
scene.add( unitsA4 );

unitsA4.position.x = 5
unitsA4.position.y = 0
unitsA4.position.z = 112

const unitsA5geometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsA5material = new THREE.MeshBasicMaterial( {map: unitsa} );
const unitsA5 = new THREE.Mesh( unitsA5geometry, unitsA5material );
scene.add( unitsA5 );

unitsA5.position.x = 30
unitsA5.position.y = 0
unitsA5.position.z = 112

// Enemy Units

const unitsBgeometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsBmaterial = new THREE.MeshBasicMaterial( {map: unitsb} );
const unitsB = new THREE.Mesh( unitsBgeometry, unitsBmaterial );
scene.add( unitsB );

unitsB.position.x = 70
unitsB.position.y = 0
unitsB.position.z = -112

const unitsB2geometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsB2material = new THREE.MeshBasicMaterial( {map: unitsb} );
const unitsB2 = new THREE.Mesh( unitsB2geometry, unitsB2material );
scene.add( unitsB2 );

unitsB2.position.x = 45
unitsB2.position.y = 0
unitsB2.position.z = -112

const unitsB3geometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsB3material = new THREE.MeshBasicMaterial( {map: unitsb} );
const unitsB3 = new THREE.Mesh( unitsB3geometry, unitsB3material );
scene.add( unitsB3 );

unitsB3.position.x = 20
unitsB3.position.y = 0
unitsB3.position.z = -112

const unitsB4geometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsB4material = new THREE.MeshBasicMaterial( {map: unitsb} );
const unitsB4 = new THREE.Mesh( unitsB4geometry, unitsB4material );
scene.add( unitsB4 );

unitsB4.position.x = -5
unitsB4.position.y = 0
unitsB4.position.z = -112

const unitsB5geometry = new THREE.BoxGeometry( 20, 10, 20 );
const unitsB5material = new THREE.MeshBasicMaterial( {map: unitsb} );
const unitsB5 = new THREE.Mesh( unitsB5geometry, unitsB5material );
scene.add( unitsB5 );

unitsB5.position.x = -30
unitsB5.position.y = 0
unitsB5.position.z = -112

//Cannons

//Allied Cannon

const cannongeometry = new THREE.SphereGeometry( 18, 40, 20 );
const cannonmaterial = new THREE.MeshBasicMaterial( { map: cannonA } );
const cannon = new THREE.Mesh( cannongeometry, cannonmaterial );
scene.add( cannon );

cannon.position.x = 105
cannon.position.y = 9
cannon.position.z = 105
cannon.add( cannon );

const barrelgeometry = new THREE.CylinderGeometry( 5, 5, 40, 32 );
const barrelmaterial = new THREE.MeshBasicMaterial( { map: cannonA } );
const barrel = new THREE.Mesh( barrelgeometry, barrelmaterial );
scene.add( barrel );

barrel.position.x = 105
barrel.position.y = 30
barrel.position.z = 105
barrel.rotation.x = 90
barrel.rotation.z = -10
barrel.add( barrel );

//Enemy Cannon

const cannon2geometry = new THREE.SphereGeometry( 18, 40, 20 );
const cannon2material = new THREE.MeshBasicMaterial( { map: cannonB } );
const cannon2 = new THREE.Mesh( cannon2geometry, cannon2material );
scene.add( cannon2 );

cannon2.position.x = -105
cannon2.position.y = 9
cannon2.position.z = -105
cannon2.add( cannon2 );

const barrel2geometry = new THREE.CylinderGeometry( 5, 5, 40, 32 );
const barrel2material = new THREE.MeshBasicMaterial( { map: cannonB } );
const barrel2 = new THREE.Mesh( barrel2geometry, barrel2material );
scene.add( barrel2 );

barrel2.position.x = -105
barrel2.position.y = 30
barrel2.position.z = -105
barrel2.rotation.x = 180
barrel2.rotation.z = 10
barrel2.add( barrel2 );

// Sell Buttons

const sell1geometry = new THREE.BoxGeometry( 30, 10, 20 );
const sell1material = new THREE.MeshBasicMaterial( {map: sellally} );
const sell1 = new THREE.Mesh( sell1geometry, sell1material );
scene.add( sell1 );

sell1.position.x = 65
sell1.position.y = 0
sell1.position.z = 112

const sell2geometry = new THREE.BoxGeometry( 30, 10, 20 );
const sell2material = new THREE.MeshBasicMaterial( {map: sellenemy} );
const sell2 = new THREE.Mesh( sell2geometry, sell2material );
scene.add( sell2 );

sell2.position.x = -65
sell2.position.y = 0
sell2.position.z = -112

// Items

// Ally Items

const items1geometry = new THREE.BoxGeometry( 5, 5, 5 );
const items1material = new THREE.MeshBasicMaterial( {map: botrk} );
const items1 = new THREE.Mesh( items1geometry, items1material );
scene.add( items1 );

items1.position.x = -105
items1.position.y = 12
items1.position.z = 105

const items2geometry = new THREE.BoxGeometry( 5, 5, 5 );
const items2material = new THREE.MeshBasicMaterial( {map: cosmicdrive} );
const items2 = new THREE.Mesh( items2geometry, items2material );
scene.add( items2 );

items2.position.x = -100
items2.position.y = 12
items2.position.z = 100

const items3geometry = new THREE.BoxGeometry( 5, 5, 5 );
const items3material = new THREE.MeshBasicMaterial( {map: thydra} );
const items3 = new THREE.Mesh( items3geometry, items3material );
scene.add( items3 );

items3.position.x = -110
items3.position.y = 12
items3.position.z = 110

// Enemy Items

const itemsb1geometry = new THREE.BoxGeometry( 5, 5, 5 );
const itemsb1material = new THREE.MeshBasicMaterial( {map: warmogs} );
const itemsb1 = new THREE.Mesh( itemsb1geometry, itemsb1material );
scene.add( itemsb1 );

itemsb1.position.x = 105
itemsb1.position.y = 12
itemsb1.position.z = -105

const itemsb2geometry = new THREE.BoxGeometry( 5, 5, 5 );
const itemsb2material = new THREE.MeshBasicMaterial( {map: sunfire} );
const itemsb2 = new THREE.Mesh( itemsb2geometry, itemsb2material );
scene.add( itemsb2 );

itemsb2.position.x = 110
itemsb2.position.y = 12
itemsb2.position.z = -110

const itemsb3geometry = new THREE.BoxGeometry( 5, 5, 5 );
const itemsb3material = new THREE.MeshBasicMaterial( {map: shurelya} );
const itemsb3 = new THREE.Mesh( itemsb3geometry, itemsb3material );
scene.add( itemsb3 );

itemsb3.position.x = 100
itemsb3.position.y = 12
itemsb3.position.z = -100

// Gold Spawn

// Ally Gold Spawn

const goldageometry = new THREE.BoxGeometry( 20, 10, 50 );
const goldamaterial = new THREE.MeshPhongMaterial ( {map: goldtwo} );
const golda = new THREE.Mesh( goldageometry, goldamaterial );
scene.add( golda );

golda.position.x = -113
golda.position.y = 1
golda.position.z = 63

// Enemy Gold Spawn

const goldbgeometry = new THREE.BoxGeometry( 20, 10, 50 );
const goldbmaterial = new THREE.MeshPhongMaterial ( {map: goldone} );
const goldb = new THREE.Mesh( goldbgeometry, goldbmaterial );
scene.add( goldb );

goldb.position.x = 113
goldb.position.y = 1
goldb.position.z = -63

// Gold

// Ally Gold

const coingeometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const coinmaterial = new THREE.MeshPhongMaterial ( { color: 0xFFD700 } );
const coin = new THREE.Mesh( coingeometry, coinmaterial );
scene.add( coin );

coin.position.x = -113
coin.position.y = 18
coin.position.z = 63

const coin2geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const coin2material = new THREE.MeshPhongMaterial ( { color: 0xFFD700 } );
const coin2 = new THREE.Mesh( coin2geometry, coin2material );
scene.add( coin2 );

coin2.position.x = -113
coin2.position.y = 18
coin2.position.z = 75

// Enemy Gold

const coin3geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const coin3material = new THREE.MeshPhongMaterial( { color: 0xFFD700 } );
const coin3 = new THREE.Mesh( coin3geometry, coin3material );
scene.add( coin3 );

coin3.position.x = 113
coin3.position.y = 18
coin3.position.z = -75

function particles() {
  const points = [];

  for (let i = 0; i < 6000; i++) {
    let star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    points.push(star);
  }

  starGeo = new THREE.BufferGeometry().setFromPoints(points);
  
  let sprite = new THREE.TextureLoader().load("assets/images/flare.png");
  let starMaterial = new THREE.PointsMaterial({
    color: 0xE8FF00,
    size: 0.7,
    map: sprite,
  });

  stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);
}

//Floating Lunar Tactics Name
const tacticsGeometry = new THREE.BoxGeometry(30,1,20);
const tacticsMaterial = new THREE.MeshPhongMaterial ({map: tactics1 });
const tactics = new THREE.Mesh(tacticsGeometry,tacticsMaterial);
tactics.position.x = -50;
tactics.position.y = 80;
tactics.position.z = 5;
scene.add(tactics);

const lunarGeometry = new THREE.BoxGeometry(30,1,20);
const lunarMaterial = new THREE.MeshPhongMaterial ({map: lunar1 });
const lunar = new THREE.Mesh(lunarGeometry,lunarMaterial);
lunar.position.x = -60;
lunar.position.y = 80;
lunar.position.z = -15;
scene.add(lunar);

//animate
function animate() {

	requestAnimationFrame( animate );

  tactics.position.x += 5.00;
  lunar.position.x += 5.00;
  if(tactics.position.x > 100){
    tactics.position.x = -100;
  }
  if(lunar.position.x > 100){
    lunar.position.x = -100;
  }
  controls.update();

	renderer.render( scene, camera );
}
animate();