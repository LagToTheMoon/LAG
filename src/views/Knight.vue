<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <!-- <YtVideo
      class="p-mt-6"
      video_stream="https://www.youtube.com/embed/5nioFOZKOPU?rel=0&modestbranding=1&loop=1&playlist=5nioFOZKOPU&autoplay=1&mute=1&controls=0"
    /> -->
    <!-- <video style="width: 100vw; height: calc(100vh - 80px)" autoplay muted loop>
      <source :src="Video" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->
    <!-- <Describe class="p-mt-2" /> -->
    <Sidebar v-model:visible="data.knight">
      <div class="p-col-12">
        <i class="pi pi-eye p-mr-1"></i
        >{{ i18n.$t("Knight").DialogTitle.Title }}
      </div>
      <div class="p-col-12" v-html="data.CaseData.discribe"></div>
      <div class="p-col-12">
        <a target="_blank" class="p-mr-3 pointer" :href="data.CaseData.tw">
          <i class="pi pi-twitter" style="font-size: 2rem; color: black"></i>
        </a>
        <a target="_blank" class="p-mr-3 pointer" :href="data.CaseData.ig">
          <i class="pi pi-instagram" style="font-size: 2rem; color: black"></i>
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
          <vue3-chart-js v-bind="{ ...data.CaseData.PieChart }" />
        </div>
      </div>
    </Sidebar>
    <div style="width: 100%; text-align: left">
      <Button
        class="p-ml-2 p-mr-2 mr-2 mb-2"
        icon="pi pi-arrow-right"
        style="line-height: 20px"
        @click="Detail"
      />
      <Chip label="🔮 LiangYu | Demi | LAG" :image="logo" class="mr-2 mb-2" />
      <marquee
        direction="right"
        height="30"
        width="200"
        scrollamount="5"
        behavior="alternate"
      >
        <img :src="fly" class="fly" />
        <img :src="fly" class="fly" />
        <img :src="fly" class="fly" />
      </marquee>
    </div>
    <div class="p-mt-2" style="width: 100%">
      <iframe
        style="width: 100%; height: calc(100vh - 130px)"
        src="https://oncyber.io/liang"
      >
        你的瀏覽器不支援 iframe
      </iframe>
    </div>
    <!-- <div class="p-grid p-mt-2">
      <div class="p-md-fixed p-col-12" style="width: 380px">
        <div
          class="fb-page"
          data-href="https://www.facebook.com/apaostudio"
          style="width: 100%"
          data-hide-cover="false"
          data-show-facepile="false"
        ></div>
      </div>
      <div class="p-col"></div>
    </div> -->
    <Bottom />
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
import logo from "../assets/logo.png";
import fly from "../assets/fly.png";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import Chip from "primevue/chip";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import TimeScroll from "../components/TimeScroll.vue";
import YtVideo from "../components/YtVideo.vue";
import Bottom from "../components/Bottom.vue";
import Describe from "../components/Describe.vue";
import Subject from "../components/Subject.vue";
import Video from "../assets/LAG.mp4";
import os from "../assets/os.png";
import { useStore } from "vuex";
import { useI18n } from "../i18nPlugin";

const i18n = useI18n();
const store = useStore();

// eslint-disable-next-line no-unused-vars
const mounted = onBeforeMount(async () => {
  //   store.commit("set_product_data", i18n.$t("Home").ProductData);
  //   store.commit("set_dialog_data", i18n.$t("Home").DialogData);
});

const data = reactive({
  knight: false,
  CaseData: {
    discribe: "",
    ig: "",
    tw: "",
    PieChart: {},
    BarChart: {},
  },
});
function Detail() {
  data.knight = true;
  let tmpData = {
    ig: i18n.$t("Knight").DialogTitle.Knight.Instagram,
    tw: i18n.$t("Knight").DialogTitle.Knight.Twitter,
    discribe: i18n.$t("Knight").DialogTitle.Knight.Describe,
    PieChart: i18n.$t("Knight").DialogTitle.Knight.PieChart,
  };
  data.CaseData = tmpData;
}
</script>

<style>
.fly {
  height: 25px;
  width: 25px;
}
.knight {
  display: block;
  height: 43px;
  width: 43px;
}
</style>
