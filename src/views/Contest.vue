<template>
  <div>
    <div v-if="!data.showAnima">
      <br />
      <br />
      <br />
      <Sidebar v-model:visible="data.show"> </Sidebar>
      <Sidebar v-model:visible="data.chart" position="right">
        <h2 class="p-text-center">
          {{ i18n.$t("Contest").Vote }}
          <!-- Art Contest(Vote) -->
        </h2>
        <div class="p-grid">
          <div class="p-col-12">
            <div v-for="item in data.cars">
              <div v-if="item.win == 1">
                <img
                  style="height: 17px; width: 17px"
                  :src="win"
                  class="product-image"
                />{{ item.artist }}
              </div>
              <div v-if="item.win == 2">
                <img
                  style="height: 17px; width: 17px"
                  :src="win2"
                  class="product-image"
                />{{ item.artist }}
              </div>
              <div v-if="item.win == 3">
                <img
                  style="height: 17px; width: 17px"
                  :src="win3"
                  class="product-image"
                />{{ item.artist }}
              </div>
            </div>
          </div>
          <div class="p-col-12">
            <vue3-chart-js v-bind="{ ...store.state.contestData.LineChart }" />
          </div>
          <div class="p-col-12">
            <vue3-chart-js v-bind="{ ...store.state.contestData.BarChart }" />
          </div>
          <div class="p-col-12">
            <vue3-chart-js v-bind="{ ...store.state.contestData.PieChart }" />
          </div>
        </div>
      </Sidebar>
      <Carousel
        style="height: calc(100vh - 130px)"
        :value="data.cars"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="data.responsiveOptions"
      >
        <template #header>
          <h2>
            {{ i18n.$t("Contest").Title }}
            <Button
              @click="Chart"
              icon="pi pi-chart-bar"
              class="p-button-secondary p-button-rounded mr-2"
            />
          </h2>
        </template>
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content">
              <div
                :class="
                  slotProps.data.win == 1
                    ? 'mb-3 myDIV1'
                    : slotProps.data.win == 2
                    ? 'mb-3 myDIV2'
                    : slotProps.data.win == 3
                    ? 'mb-3 myDIV3'
                    : 'mb-3 myDIV'
                "
              >
                <img
                  style="height: calc(100vh - 415px)"
                  v-if="slotProps.data.img != null"
                  :src="slotProps.data.img"
                  :alt="slotProps.data.artist"
                  class="product-image"
                />
                <video
                  v-if="slotProps.data.video != null"
                  style="height: calc(100vh - 415px)"
                  class="product-image"
                  autoplay
                  muted
                  loop
                >
                  <source :src="slotProps.data.video" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <h4 class="mb-1">
                  <img
                    style="height: 17px; width: 17px"
                    v-if="slotProps.data.win == 1"
                    :src="win"
                    class="product-image"
                  />
                  <img
                    style="height: 17px; width: 17px"
                    v-if="slotProps.data.win == 2"
                    :src="win2"
                    class="product-image"
                  />
                  <img
                    style="height: 17px; width: 17px"
                    v-if="slotProps.data.win == 3"
                    :src="win3"
                    class="product-image"
                  />
                  {{ slotProps.data.artist }}
                </h4>
                <h6 class="mt-0 mb-3">{{ slotProps.data.detail }}</h6>
                <div class="car-buttons mt-5">
                  <Button
                    icon="pi pi-search"
                    class="p-button p-button-rounded p-mr-2 p-d-none"
                    @click="Show"
                  />
                  <!-- <Button
                  icon="pi pi-star-fill"
                  class="p-button-secondary p-button-rounded mr-2"
                /> -->
                  <a
                    style="text-decoration: none"
                    v-if="slotProps.data.twitter != ''"
                    :href="slotProps.data.twitter"
                    target="_blank"
                  >
                    <Button
                      icon="pi pi-twitter"
                      class="p-button-info p-button-rounded"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    <div v-if="data.showAnima" ref="container2" id="container2"></div>
  </div>
</template>

<script setup>
import {
  defineProps,
  reactive,
  onMounted,
  onBeforeMount,
  toRefs,
  computed,
} from "vue";
import Carousel from "primevue/carousel";
import Sidebar from "primevue/sidebar";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useStore } from "vuex";
import { useI18n } from "../i18nPlugin";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as THREE from "three";

import fly from "../assets/fly.png";

import Button from "primevue/button";
import win from "../assets/win.png";
import win2 from "../assets/win2.png";
import win3 from "../assets/win3.png";
import art1 from "../assets/1.jpg";
import art2 from "../assets/2.jpg";
import art3 from "../assets/3.jpg";
import art4 from "../assets/4.jpg";
import art5 from "../assets/5.jpg";
import art6 from "../assets/6.jpg";
import art7 from "../assets/7.jpg";
import art8 from "../assets/8.jpg";
import art9 from "../assets/9.jpg";
import art10 from "../assets/10.jpg";
import art11 from "../assets/11_.gif";
import art12 from "../assets/12.jpg";
import art13 from "../assets/13_.gif";
import art14 from "../assets/14.jpg";
import art15 from "../assets/15.png";

function Show() {
  data.show = true;
}
function Chart() {
  data.chart = true;
  let tmpData = {
    LineChart: i18n.$t("Contest").LineChart,
    BarChart: i18n.$t("Contest").BarChart,
    PieChart: i18n.$t("Contest").PieChart,
  };
  store.commit("set_contest_data", tmpData);
}

const i18n = useI18n();
const store = useStore();

// eslint-disable-next-line no-unused-vars
onMounted(() => {
  // init();
  // data.time = setTimeout(() => {
  //   data.showAnima = false;
  //   clearTimeout(data.time);
  // }, 2500);
  //   store.commit("set_product_data", i18n.$t("Home").ProductData);
  //   store.commit("set_dialog_data", i18n.$t("Home").DialogData);
});
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
const data = reactive({
  time: null,
  showAnima: false,
  chart_data: {
    BarChart: {
      id: "bar",
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "balck",
            },
            position: "top",
          },
        },
        scales: {
          x: {
            ticks: {
              color: "balck",
            },
          },
          y: {
            min: 0,
            max: 100,
            ticks: {
              color: "balck",
            },
          },
        },
      },
      data: {
        labels: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
        ],
        datasets: [
          {
            label: "Vote",
            backgroundColor: ["#F50002"],
            data: [16, 30, 13, 12, 9, 27, 23, 5, 33, 55, 28, 52, 15, 47, 14],
          },
          {
            label: "Total Votes",
            backgroundColor: ["#1abc9c"],
            data: [
              379, 379, 379, 379, 379, 379, 379, 379, 379, 379, 379, 379, 379,
              379, 379,
            ],
          },
        ],
      },
    },
    PieChart: {
      type: "pie",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "balck",
            },
            position: "bottom",
          },
        },
      },
      data: {
        labels: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
        ],
        datasets: [
          {
            backgroundColor: [
              "rgba(191, 63, 63, 1)",
              "rgba(191, 127, 63, 1)",
              "rgba(127, 191, 63, 1)",
              "rgba(63, 191, 191, 1)",
              "rgba(63, 63, 191, 1)",
              "rgba(191, 63, 127, 1)",
              "rgba(191, 191, 63, 1)",
              "rgba(127, 102, 53, 1)",
              "rgba(242, 58, 150, 1)",
              "rgba(58, 242, 217, 1)",
              "rgba(58, 184, 242, 1)",
              "rgba(242, 58, 184, 1)",
              "rgba(242, 211, 58, 1)",
              "rgba(242, 135, 58, 1)",
              "rgba(242, 79, 58, 1)",
            ],
            data: [16, 30, 13, 12, 9, 27, 23, 5, 33, 55, 28, 52, 15, 47, 14],
          },
        ],
      },
    },
    LineChart: {
      id: "line",
      type: "line",
      data: {
        labels: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
        ],
        datasets: [
          {
            label: "Votes",
            data: [16, 30, 13, 12, 9, 27, 23, 5, 33, 55, 28, 52, 15, 47, 14],
            backgroundColor: [
              "rgba(191, 63, 63, 0.2)",
              "rgba(191, 127, 63, 0.2)",
              "rgba(127, 191, 63, 0.2)",
              "rgba(63, 191, 191, 0.2)",
              "rgba(63, 63, 191, 0.2)",
              "rgba(191, 63, 127, 0.2)",
              "rgba(191, 191, 63, 0.2)",
              "rgba(127, 102, 53, 0.2)",
              "rgba(242, 58, 150, 0.2)",
              "rgba(58, 242, 217, 0.2)",
              "rgba(58, 184, 242, 0.2)",
              "rgba(242, 58, 184, 0.2)",
              "rgba(242, 211, 58, 0.2)",
              "rgba(242, 135, 58, 0.2)",
              "rgba(242, 79, 58, 0.2)",
            ],
            borderColor: [
              "rgba(191, 63, 63, 1)",
              "rgba(191, 127, 63, 1)",
              "rgba(127, 191, 63, 1)",
              "rgba(63, 191, 191, 1)",
              "rgba(63, 63, 191, 1)",
              "rgba(191, 63, 127, 1)",
              "rgba(191, 191, 63, 1)",
              "rgba(127, 102, 53, 1)",
              "rgba(242, 58, 150, 1)",
              "rgba(58, 242, 217, 1)",
              "rgba(58, 184, 242, 1)",
              "rgba(242, 58, 184, 1)",
              "rgba(242, 211, 58, 1)",
              "rgba(242, 135, 58, 1)",
              "rgba(242, 79, 58, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "y",
            },
          },
        },
      },
    },
  },
  chart: false,
  show: false,
  responsiveOptions: [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "820px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ],
  cars: [
    {
      img: art1,
      win: 0,
      video: null,
      artist: "[A] Aota(sub)",
      detail: "https://twitter.com/2_kalistner",
      twitter: "https://twitter.com/2_kalistner",
    },
    {
      img: art2,
      win: 0,
      video: null,
      artist: "[B] Lighten🌸Bee",
      detail: "https://twitter.com/lightenbee",
      twitter: "https://twitter.com/lightenbee",
    },
    {
      img: art3,
      win: 0,
      video: null,
      artist: "[C] AsariMio @ NFT",
      detail: "https://twitter.com/AsariMio",
      twitter: "https://twitter.com/AsariMio",
    },
    {
      img: art4,
      win: 0,
      video: null,
      artist: "[D] つかぽ",
      detail: "https://twitter.com/baromokobaro",
      twitter: "https://twitter.com/baromokobaro",
    },
    {
      img: art5,
      win: 0,
      video: null,
      artist: "[E] MINUI / みぬい / NFT",
      detail: "https://twitter.com/minui_7",
      twitter: "https://twitter.com/minui_7",
    },
    {
      img: art6,
      win: 0,
      video: null,
      artist: "[F] Visharie is come back",
      detail: "https://twitter.com/VisharieNFT",
      twitter: "https://twitter.com/VisharieNFT",
    },
    {
      img: art7,
      win: 0,
      video: null,
      artist: "[G] JokiYohᴺᶠᵀ",
      detail: "https://twitter.com/_k_i_i______",
      twitter: "https://twitter.com/_k_i_i______",
    },
    {
      img: art8,
      win: 0,
      video: null,
      artist: "[H] Aelinkꪔ̤̱🌸",
      detail: "https://twitter.com/aelink_",
      twitter: "https://twitter.com/aelink_",
    },
    {
      img: art9,
      win: 0,
      video: null,
      artist: "[I] おいっちくん@オーダー受付中",
      detail: "https://twitter.com/oicchikun",
      twitter: "https://twitter.com/oicchikun",
    },
    {
      img: art10,
      win: 1,
      video: null,
      artist: "[J] しまエナガ⛩️ 𝐒𝐢𝐦𝐚𝐄𝐧𝐚𝐠𝐚｜𝐍𝐅𝐓",
      detail: "https://twitter.com/enaga392",
      twitter: "https://twitter.com/enaga392",
    },
    {
      img: art11,
      win: 0,
      video: null,
      artist: "[K] やぎめ🐐Yagiｍe🐐NFTクリエイター👿",
      detail: "https://twitter.com/yagime_nft",
      twitter: "https://twitter.com/yagime_nft",
    },
    {
      img: art12,
      win: 3,
      video: null,
      artist: "[L] コメスケ*komesuke",
      detail: "https://twitter.com/comes_k_NFT",
      twitter: "https://twitter.com/comes_k_NFT",
    },
    {
      img: art13,
      win: 0,
      video: null,
      artist: "[M] Luv",
      detail: "https://twitter.com/luvluv_eth",
      twitter: "https://twitter.com/luvluv_eth",
    },
    {
      img: art14,
      win: 2,
      video: null,
      artist: "[N] Yuki Azuma/あずまゆき@yukiazuma.eth",
      detail: "https://twitter.com/yuki_azuma_nft",
      twitter: "https://twitter.com/yuki_azuma_nft",
    },
    {
      img: art15,
      win: 0,
      video: null,
      artist: "[O] 🍭6maker.eth NFT Illustrator🇯🇵 commission ok！",
      detail: "https://twitter.com/6maker_nft/media",
      twitter: "https://twitter.com/6maker_nft/media",
    },
  ],
});
</script>

<style lang="scss" scoped>
.myDIV {
  // width: 300px;
  // height: 200px;
  border: 5px solid lightblue;
  // -webkit-animation: mymove 5s infinite; /* Chrome, Safari, Opera */
  // animation: mymove 5s infinite;
}
.myDIV1 {
  // width: 300px;
  // height: 200px;
  border: 5px solid yellow;
  // -webkit-animation: mymove 5s infinite; /* Chrome, Safari, Opera */
  // animation: mymove 5s infinite;
}
.myDIV2 {
  // width: 300px;
  // height: 200px;
  border: 5px solid #625b57;
  // -webkit-animation: mymove1 5s infinite; /* Chrome, Safari, Opera */
  // animation: mymove1 5s infinite;
}
.myDIV3 {
  // width: 300px;
  // height: 200px;
  border: 5px solid #a16b47;
  // -webkit-animation: mymove2 5s infinite; /* Chrome, Safari, Opera */
  // animation: mymove2 5s infinite;
}
/* Chrome, Safari, Opera */
@-webkit-keyframes mymove {
  50% {
    border: 5px solid yellow;
  }
}

/* Standard syntax */
@keyframes mymove {
  50% {
    border: 5px solid yellow;
  }
}
@-webkit-keyframes mymove1 {
  50% {
    border: 5px solid #625b57;
  }
}

/* Standard syntax */
@keyframes mymove1 {
  50% {
    border: 5px solid #625b57;
  }
}
@-webkit-keyframes mymove2 {
  50% {
    border: 5px solid #a16b47;
  }
}

/* Standard syntax */
@keyframes mymove2 {
  50% {
    border: 5px solid #a16b47;
  }
}
.product-item {
  .product-item-content {
    border: 1px solid var(--surface-border);
    border-radius: 3px;
    margin: 0.3rem;
    text-align: center;
    padding: 2rem 0;
  }

  .product-image {
    width: 60%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
}
</style>
