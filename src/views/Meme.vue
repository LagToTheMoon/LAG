<template>
  <div>
    <div v-if="!data.show" class="m-top">
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
        <Chip
          :label="store.state.memeData.name"
          :image="store.state.memeData.img"
          class="mr-2 mb-2"
        />
      </div>
      <Sidebar v-model:visible="data.flyshow">
        <div class="p-col-12">
          <Avatar
            :image="store.state.memeData.img"
            class="mr-2"
            size="xlarge"
            shape="circle"
          />
          <div class="p-mt-1">
            <span>
              {{ store.state.memeData.name }}
            </span>
          </div>
        </div>
        <div class="p-col-12">
          <i class="pi pi-eye p-mr-1"></i
          >{{ i18n.$t("Meme").DialogTitle.Title }}
        </div>
        <div
          class="p-col-12 p-mb-1"
          v-html="store.state.memeData.discribe"
        ></div>
        <div class="p-col-12">
          <i class="pi pi-users p-mr-1"></i
          >{{ i18n.$t("Meme").DialogTitle.Media }}
        </div>
        <div class="p-col-12 p-mb-2">
          {{ store.state.memeData.creater }}
          <a
            v-if="store.state.memeData.creater_tw != ''"
            target="_blank"
            class="p-mr-3 pointer"
            :href="store.state.memeData.creater_tw"
          >
            <i class="pi pi-twitter" style="font-size: 2rem; color: black"></i>
          </a>
          <!-- <a
          target="_blank"
          class="p-mr-3 pointer"
          href="https://opensea.io/collection/love-addicted-girls"
        >
          <img :src="os" class="knight" />
        </a> -->
        </div>

        <div class="p-col-12">
          <i class="pi pi-chart-line p-mr-1"></i
          >{{ i18n.$t("Knight").DialogTitle.Effect }}
        </div>
        <div class="p-grid">
          <div class="p-col-12">
            <vue3-chart-js v-bind="{ ...store.state.memeData.PieChart }" />
          </div>
        </div>
      </Sidebar>
      <Sidebar v-model:visible="data.choose" position="right">
        <div class="p-grid">
          <div class="p-col-12">
            <label for="place">{{ i18n.$t("Meme").DialogTitle.Name }}</label>
            <InputText
              class="p-ml-1"
              id="place"
              v-model.trim="data.meme_name"
            />
          </div>
          <div
            class="p-col-12 p-grid p-mt-2 knightCard"
            v-for="(item, index) in data.memeList"
            @click="ChooseMeme(item)"
          >
            <div class="p-col-3">
              <Avatar
                :image="item.img"
                class="mr-2"
                size="xlarge"
                shape="circle"
              />
            </div>
            <div class="p-col-9">
              <span class="p-ml-1">
                {{ item.name }}
                <a
                  target="_blank"
                  class="p-mr-3 pointer"
                  :href="item.creater_tw"
                >
                  <i class="pi pi-twitter" style="color: black"></i>
                </a> </span
              ><br />
              <span class="p-ml-1">{{
                i18n.$t("Meme").DialogTitle.TotalPower
              }}</span>
              <ProgressBar
                class="p-ml-1"
                :value="item.total_power"
                :showValue="false"
              />
            </div>
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
                    <i class="pi pi-file p-mr-1"></i>{{ m.type }}
                    <img height="20" :src="m.type_img" /><br />
                    <i class="pi pi-calendar p-mr-1 p-mt-1"></i>{{ m.date
                    }}<br />
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
    <div
      v-if="data.show"
      style="position: fixed; z-index: 1000"
      ref="container2"
      id="container2"
    ></div>
  </div>
</template>

<script setup>
import { defineProps, reactive, onMounted, onBeforeMount, watch } from "vue";
import Chip from "primevue/chip";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";
import fly from "../assets/fly.png";
import fly1 from "../assets/fly1.jpg";
import fly2 from "../assets/fly2.jpg";
import fly3 from "../assets/fly3.png";
import fly4 from "../assets/fly4.jpeg";
import m1 from "../assets/m1.png";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useI18n } from "../i18nPlugin";
import Galleria from "primevue/galleria";
import { useStore } from "vuex";

const store = useStore();

const mounted = onBeforeMount(async () => {
  if (store.state.memeData.name == "") {
    let tmpImg = "";
    for (let i = 0; i < data.memePfp.length; i++) {
      if (data.memePfp[i].key == i18n.$t("Meme").Monster[0].Name) {
        tmpImg = data.memePfp[i].value;
      }
    }
    let tmpData = {
      name: i18n.$t("Meme").Monster[0].Name,
      tw: i18n.$t("Meme").Monster[0].Twitter,
      creater: i18n.$t("Meme").Monster[0].Creater,
      creater_tw: i18n.$t("Meme").Monster[0].CreaterTwitter,
      img: tmpImg,
      total_power: i18n.$t("Meme").Monster[0].TotalPower,
      power: i18n.$t("Meme").Monster[0].Power,
      speed: i18n.$t("Meme").Monster[0].Speed,
      smart: i18n.$t("Meme").Monster[0].Smart,
      discribe: i18n.$t("Meme").Monster[0].Describe,
      PieChart: i18n.$t("Meme").Monster[0].PieChart,
    };
    store.commit("set_meme_data", tmpData);
  }

  //   store.commit("set_product_data", i18n.$t("Home").ProductData);
  //   store.commit("set_dialog_data", i18n.$t("Home").DialogData);
});

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
  meme_name: "",
  memePfp: [{ key: "Onamushi", value: fly }],
  memeList: [],
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
      type: "Onamushi",
      type_img: fly,
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
          itemImageSrc: fly3,
          thumbnailImageSrc: fly3,
          alt: "Description for Image 1",
          title: "Title 1",
        },
      ],
      description:
        "A certain kind of alien creature, very intelligent, and will be parasitic in the human body, reading human memory, need special food to survive, known to appear in the DC universe was found",
      position: { lat: 40.689247, lng: -74.044502 },
    },
    {
      id: 2,
      name: "Mothman",
      type: "Onamushi",
      type_img: fly,
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
          itemImageSrc: fly4,
          thumbnailImageSrc: fly4,
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
watch(
  () => data.meme_name,
  () => {
    let tmp = [];
    for (let i = 0; i < i18n.$t("Meme").Monster.length; i++) {
      if (
        i18n
          .$t("Meme")
          .Monster[i].Name.toLowerCase()
          .includes(data.meme_name.toLowerCase())
      ) {
        let tmpImg = "";
        for (let j = 0; j < data.memePfp.length; j++) {
          if (data.memePfp[j].key == i18n.$t("Meme").Monster[i].Name) {
            tmpImg = data.memePfp[j].value;
          }
        }
        tmp.push({
          name: i18n.$t("Meme").Monster[i].Name,
          tw: i18n.$t("Meme").Monster[i].Twitter,
          creater: i18n.$t("Meme").Monster[i].Creater,
          creater_tw: i18n.$t("Meme").Monster[i].CreaterTwitter,
          img: tmpImg,
          total_power: i18n.$t("Meme").Monster[i].TotalPower,
          power: i18n.$t("Meme").Monster[i].Power,
          speed: i18n.$t("Meme").Monster[i].Speed,
          smart: i18n.$t("Meme").Monster[i].Smart,
          discribe: i18n.$t("Meme").Monster[i].Describe,
          PieChart: i18n.$t("Meme").Monster[i].PieChart,
        });
      }
    }
    data.memeList = tmp;
  }
);

function Detail() {
  data.flyshow = true;
  let tmpImg = "";
  for (let i = 0; i < data.memePfp.length; i++) {
    if (data.memePfp[i].key == store.state.memeData.name) {
      tmpImg = data.memePfp[i].value;
    }
  }
  for (let i = 0; i < i18n.$t("Meme").Monster.length; i++) {
    if (i18n.$t("Meme").Monster[i].Name == store.state.memeData.name) {
      let tmpData = {
        name: i18n.$t("Meme").Monster[i].Name,
        tw: i18n.$t("Meme").Monster[i].Twitter,
        creater: i18n.$t("Meme").Monster[i].Creater,
        creater_tw: i18n.$t("Meme").Monster[i].CreaterTwitter,
        img: tmpImg,
        total_power: i18n.$t("Meme").Monster[i].TotalPower,
        power: i18n.$t("Meme").Monster[i].Power,
        speed: i18n.$t("Meme").Monster[i].Speed,
        smart: i18n.$t("Meme").Monster[i].Smart,
        discribe: i18n.$t("Meme").Monster[i].Describe,
        PieChart: i18n.$t("Meme").Monster[i].PieChart,
      };
      store.commit("set_meme_data", tmpData);
    }
  }
}
function Choose() {
  data.choose = true;

  let tmp = [];
  for (let i = 0; i < i18n.$t("Meme").Monster.length; i++) {
    let tmpImg = "";
    for (let j = 0; j < data.memePfp.length; j++) {
      if (data.memePfp[j].key == i18n.$t("Meme").Monster[i].Name) {
        tmpImg = data.memePfp[j].value;
      }
    }
    tmp.push({
      name: i18n.$t("Meme").Monster[i].Name,
      tw: i18n.$t("Meme").Monster[i].Twitter,
      creater: i18n.$t("Meme").Monster[i].Creater,
      creater_tw: i18n.$t("Meme").Monster[i].CreaterTwitter,
      img: tmpImg,
      total_power: i18n.$t("Meme").Monster[i].TotalPower,
      power: i18n.$t("Meme").Monster[i].Power,
      speed: i18n.$t("Meme").Monster[i].Speed,
      smart: i18n.$t("Meme").Monster[i].Smart,
      discribe: i18n.$t("Meme").Monster[i].Describe,
      PieChart: i18n.$t("Meme").Monster[i].PieChart,
    });
  }
  data.memeList = tmp;
}

function ChooseMeme(meme) {
  let tmpImg = "";
  for (let i = 0; i < data.memePfp.length; i++) {
    if (data.memePfp[i].key == meme.name) {
      tmpImg = data.memePfp[i].value;
    }
  }
  let tmpData = {
    name: meme.name,
    tw: meme.tw,
    creater: meme.creater,
    creater_tw: meme.creater_tw,
    img: tmpImg,
    total_power: meme.total_power,
    power: meme.power,
    speed: meme.speed,
    smart: meme.smart,
    discribe: meme.discribe,
    PieChart: meme.PieChart,
  };
  store.commit("set_meme_data", tmpData);
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
.m-top {
  margin-top: 80px;
}
@media screen and (max-device-width: 900px) {
  .m-top {
    margin-top: 80px;
  }
}
.vue-map-container {
  height: calc(100vh - 125px);
}
</style>
