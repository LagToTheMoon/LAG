<template>
  <div>
    <div v-if="!data.show" style="margin-top: 80px">
      <div style="width: 100%; text-align: left; height: 45px">
        <Button
          class="p-ml-2 p-mr-2 mr-2 mb-2"
          icon="pi pi-arrow-right"
          style="line-height: 20px"
          @click="Detail"
        />
        <Button
          class="p-mr-2 mr-2 mb-2"
          icon="pi pi-th-large"
          style="line-height: 20px"
          @click="Choose"
        />
        <!-- <Chip
          :label="store.state.caseData.name"
          :image="store.state.caseData.img"
          class="mr-2 mb-2"
        /> -->
        <marquee
          direction="right"
          height="30"
          width="65"
          scrollamount="5"
          behavior="alternate"
        >
          <img :src="fly" class="fly" />
          <!-- <img :src="fly" class="fly" />
        <img :src="fly" class="fly" /> -->
        </marquee>
      </div>
      <Sidebar v-model:visible="data.flyshow"> </Sidebar>
      <Sidebar v-model:visible="data.choose" position="right">
        <div class="p-grid">
          <div class="p-col-12">
            <label for="place">{{ i18n.$t("Knight").DialogTitle.Name }}</label>
            <InputText class="p-ml-1" id="place" v-model.trim="data.place" />
          </div>
        </div>
      </Sidebar>
      <GMapMap :center="data.center" :zoom="data.zoom" map-type-id="terrain">
        <GMapCluster :zoomOnClick="true" :styles="data.clusterStyles">
          <GMapMarker
            :key="index"
            v-for="(m, index) in data.markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="openMarker(m)"
          >
            <GMapInfoWindow
              :closeclick="true"
              @closeclick="openMarker(null)"
              :opened="data.openedMarkerID === m.id"
              style="color: green; width: 320px"
            >
              <Galleria :value="m.img">
                <template #header>
                  <h3>{{ m.name }}</h3>
                  <div class="p-text-left">
                    <i class="pi pi-calendar p-mr-1"></i>{{ m.date }}<br />
                    <i class="pi pi-eye p-mr-1 p-mt-1"></i>{{ m.witness }}
                    <a
                      style="cursor: pointer"
                      :href="m.twitter"
                      target="_blank"
                    >
                      <i
                        style="color: #4287f5"
                        class="pi pi-twitter p-ml-1 p-mt-1"
                      ></i
                    ></a>
                    <br />
                    <div class="p-mt-1 p-mb-2">
                      {{ m.description }}
                    </div>
                  </div>
                </template>
                <template #item="slotProps">
                  <img
                    class="p-mb-2"
                    style="height: 120px"
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                  />
                </template>
                <template #thumbnail="slotProps">
                  <img
                    style="width: 40px"
                    :src="slotProps.item.thumbnailImageSrc"
                    :alt="slotProps.item.alt"
                  />
                </template>
              </Galleria>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapCluster>
      </GMapMap>
    </div>
    <div v-if="data.show" ref="container2" id="container2"></div>
  </div>
</template>

<script setup>
import { defineProps, reactive, onMounted } from "vue";
import Chip from "primevue/chip";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import fly from "../assets/fly.png";
import fly1 from "../assets/fly1.jpg";
import fly2 from "../assets/fly2.jpg";
import m1 from "../assets/m1.png";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useI18n } from "../i18nPlugin";
import Galleria from "primevue/galleria";

function openMarker(m) {
  if (m == null) {
    data.openedMarkerID = null;
    data.zoom = 2;
  } else {
    data.openedMarkerID = m.id;
    data.center = m.position;
    data.zoom = 15;
  }
}
const i18n = useI18n();
const data = reactive({
  clusterStyles: [
    {
      textColor: "white",
      url: m1,
      height: 50,
      width: 50,
      anchorText: [20, 27],
      anchorIcon: [50, 50],
      textSize: 10,
    },
  ],
  openedMarkerID: null,
  place: "",
  flyshow: false,
  choose: false,
  show: true,
  time: null,
  markers: [
    {
      id: 1,
      name: "Butterfly",
      type: "onamushi",
      witness: "LiangYu",
      twitter: "https://twitter.com/chenlia48120395",
      date: "2022-01-13~????-??-??",
      img: [
        {
          itemImageSrc: fly1,
          thumbnailImageSrc: fly1,
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: fly,
          thumbnailImageSrc: fly,
          alt: "Description for Image 1",
          title: "Title 1",
        },
      ],
      description:
        ".. ... / - .... .. ... / -.-. --- .-. .-. . .-.. .- - .. --- -. --..-- / - .... . .-. . / .- .-. . / ... --- -- . / ... - .-. .- -. --. . / - .... .. -. --. ... / .... .- .--. .--. . -. .. -. --. / .- .-. --- ..- -. -.. / - .... . / .-- --- .-. .-.. -..",
      position: { lat: 40.689247, lng: -74.044502 },
    },
    {
      id: 2,
      name: "Mothman",
      type: "onamushi",
      witness: "LiangYu",
      twitter: "https://twitter.com/chenlia48120395",
      date: "1966-11-12~1967-12-15",
      img: [
        {
          itemImageSrc: fly2,
          thumbnailImageSrc: fly2,
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: fly,
          thumbnailImageSrc: fly,
          alt: "Description for Image 1",
          title: "Title 1",
        },
      ],
      description:
        "They are often described as creatures with wings and red eyes. It is theorized that the Mothman is an extraterrestrial being and is associated with the Man in Black.",
      position: { lat: 38.9033959, lng: -82.1362437 },
    },
  ],
  center: { lat: 40.689247, lng: -74.044502 },
  zoom: 2,
});
function Detail() {
  data.flyshow = true;
}
function Choose() {
  data.choose = true;
}

// Scenes
let scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.0008);
// model
let mesh = {};
// camera
let camera = {};
// camera settings
let renderer = {};
const particleCount = 15000;

function createVerticesPoints() {
  const geometry = new THREE.BufferGeometry();
  const pointsArray = new Array();

  const range = 250;
  for (let i = 0; i < particleCount; i++) {
    const x = THREE.Math.randInt(-range, range);
    const y = THREE.Math.randInt(-range, range);
    const z = THREE.Math.randInt(-range, range);

    const point = new THREE.Vector3(x, y, z);
    point.velocityX = THREE.Math.randFloat(-0.16, 0.16);
    point.velocityY = THREE.Math.randFloat(0.1, 0.3);
    pointsArray.push(point);
  }
  const texture = new THREE.TextureLoader().load(fly);
  let material = new THREE.PointsMaterial({
    size: 5,
    map: texture,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
    opacity: 0.7,
  });

  //Use this API to pass in an array of vertices
  geometry.setFromPoints(pointsArray);
  //The following are basically the same
  //   const material = new THREE.LineBasicMaterial({ color: "#fff" });
  mesh = new THREE.Points(geometry, material);
  mesh.position.set(0, 6, 0);
  scene.add(mesh);
}
function pointsAnimation() {
  mesh.position.z += 5;
}
function init() {
  //   initMesh();
  //   initPoint();
  initCamera();
  createVerticesPoints();
  // Mount to the DOM
  document.getElementById("container2").appendChild(renderer.domElement);
  // Rendering once
  renderer.render(scene, camera);
  // Create a control object
  var controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", () => {
    renderer.render(scene, camera);
  }); // Monitor mouse, keyboard event
  render();
}

function render() {
  //   animate();
  pointsAnimation();
  // stats.update();
  // requestAnimationFrame(render);
  // cameraControl.update();
  // renderer.render(scene, camera);

  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
// 監聽螢幕寬高變化來做簡單 RWD 設定
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize the camera
function initCamera() {
  var width = window.innerWidth; // Window width
  var height = window.innerHeight; // Window height

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 0, 600);
  camera.lookAt(scene.position);
  // camera settings
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height); // Set the rendering area size
  renderer.setClearColor(0x21201f, 1); // Set background color
}
onMounted(() => {
  init();
  data.time = setTimeout(() => {
    data.show = false;
    clearTimeout(data.time);
  }, 2500);
  // requestAnimationFrame(init);
});
</script>

<style scoped>
.vue-map-container {
  height: calc(100vh - 125px);
}
</style>
