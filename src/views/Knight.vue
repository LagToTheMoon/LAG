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
        <Avatar
          :image="store.state.caseData.img"
          class="mr-2"
          size="xlarge"
          shape="circle"
        />
        <div class="p-mt-1">
          <span>
            {{ store.state.caseData.name }}
          </span>
        </div>
      </div>
      <div class="p-col-12">
        <i class="pi pi-eye p-mr-1"></i
        >{{ i18n.$t("Knight").DialogTitle.Title }}
      </div>
      <div class="p-col-12 p-mb-1" v-html="store.state.caseData.discribe"></div>
      <div class="p-col-12">
        <i class="pi pi-users p-mr-1"></i
        >{{ i18n.$t("Knight").DialogTitle.Media }}
      </div>
      <div class="p-col-12 p-mb-2">
        <a
          v-if="store.state.caseData.tw != ''"
          target="_blank"
          class="p-mr-3 pointer"
          :href="store.state.caseData.tw"
        >
          <i class="pi pi-twitter" style="font-size: 2rem; color: black"></i>
        </a>
        <a
          v-if="store.state.caseData.ig != ''"
          target="_blank"
          class="p-mr-3 pointer"
          :href="store.state.caseData.ig"
        >
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
          <vue3-chart-js v-bind="{ ...store.state.caseData.PieChart }" />
        </div>
      </div>
    </Sidebar>
    <Sidebar v-model:visible="data.choose" position="right">
      <div class="p-grid">
        <div class="p-col-12">
          <label for="factory">{{ i18n.$t("Knight").DialogTitle.Name }}</label>
          <InputText
            class="p-ml-1"
            id="factory"
            v-model.trim="data.knight_name"
          />
        </div>
        <div
          class="p-col-12 p-grid p-mt-2 knightCard"
          v-for="(item, index) in data.knightList"
          @click="ChooseKnight(item)"
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
            <span> {{ item.name }} </span><br />
            <span class="p-ml-1">{{
              i18n.$t("Knight").DialogTitle.Money
            }}</span>
            <ProgressBar
              class="p-ml-1"
              :value="item.money"
              :showValue="false"
            />
          </div>
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
      <Button
        class="p-mr-2 mr-2 mb-2"
        icon="pi pi-th-large"
        style="line-height: 20px"
        @click="Choose"
      />
      <Chip
        :label="store.state.caseData.name"
        :image="store.state.caseData.img"
        class="mr-2 mb-2"
      />
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
    <div class="p-mt-2" style="width: 100%">
      <iframe
        style="width: 100%; height: calc(100vh - 130px)"
        :src="store.state.caseData.oncyber"
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
  watch,
} from "vue";
import InputText from "primevue/inputtext";
import ProgressBar from "primevue/progressbar";
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
import Avatar from "primevue/avatar";
import os from "../assets/os.png";
import knight from "../assets/knight.png";
import liang from "../assets/liang.png";
import shunichiro from "../assets/shunichiro.jpeg";
import { useStore } from "vuex";
import { useI18n } from "../i18nPlugin";

const i18n = useI18n();
const store = useStore();

// eslint-disable-next-line no-unused-vars
const mounted = onBeforeMount(async () => {
  if (store.state.caseData.name == "") {
    let tmpImg = "";
    for (let i = 0; i < data.pfp.length; i++) {
      if (data.pfp[i].key == i18n.$t("Knight").DialogTitle.Knight[0].Name) {
        tmpImg = data.pfp[i].value;
      }
    }
    let tmpData = {
      name: i18n.$t("Knight").DialogTitle.Knight[0].Name,
      img: tmpImg,
      ig: i18n.$t("Knight").DialogTitle.Knight[0].Instagram,
      tw: i18n.$t("Knight").DialogTitle.Knight[0].Twitter,
      money: i18n.$t("Knight").DialogTitle.Knight[0].Money,
      oncyber: i18n.$t("Knight").DialogTitle.Knight[0].Oncyber,
      discribe: i18n.$t("Knight").DialogTitle.Knight[0].Describe,
      PieChart: i18n.$t("Knight").DialogTitle.Knight[0].PieChart,
    };
    store.commit("set_case_data", tmpData);
  }

  //   store.commit("set_product_data", i18n.$t("Home").ProductData);
  //   store.commit("set_dialog_data", i18n.$t("Home").DialogData);
});

const data = reactive({
  choose: false,
  knight: false,
  pfp: [
    { key: "🔮 LiangYu | Demi | LAG", value: liang },
    { key: "MeMe", value: knight },
    { key: "shunichiro.icp", value: shunichiro },
  ],
  knightList: [],
  knight_name: "",
  //   CaseData: {
  //     name: "",
  //     discribe: "",
  //     ig: "",
  //     tw: "",
  //     oncyber: "",
  //     PieChart: {},
  //     BarChart: {},
  //   },
});

function ChooseKnight(knight) {
  let tmpImg = "";
  for (let i = 0; i < data.pfp.length; i++) {
    if (data.pfp[i].key == knight.name) {
      tmpImg = data.pfp[i].value;
    }
  }
  let tmpData = {
    name: knight.name,
    img: tmpImg,
    ig: knight.ig,
    tw: knight.tw,
    money: knight.money,
    oncyber: knight.oncyber,
    discribe: knight.discribe,
    PieChart: knight.PieChart,
  };
  store.commit("set_case_data", tmpData);
}

function Choose() {
  data.choose = true;

  let tmp = [];
  for (let i = 0; i < i18n.$t("Knight").DialogTitle.Knight.length; i++) {
    let tmpImg = "";
    for (let j = 0; j < data.pfp.length; j++) {
      if (data.pfp[j].key == i18n.$t("Knight").DialogTitle.Knight[i].Name) {
        tmpImg = data.pfp[j].value;
      }
    }
    tmp.push({
      name: i18n.$t("Knight").DialogTitle.Knight[i].Name,
      ig: i18n.$t("Knight").DialogTitle.Knight[i].Instagram,
      img: tmpImg,
      money: i18n.$t("Knight").DialogTitle.Knight[i].Money,
      tw: i18n.$t("Knight").DialogTitle.Knight[i].Twitter,
      oncyber: i18n.$t("Knight").DialogTitle.Knight[i].Oncyber,
      discribe: i18n.$t("Knight").DialogTitle.Knight[i].Describe,
      PieChart: i18n.$t("Knight").DialogTitle.Knight[i].PieChart,
    });
  }
  data.knightList = tmp;
}

function Detail() {
  data.knight = true;
  let tmpImg = "";
  for (let i = 0; i < data.pfp.length; i++) {
    if (data.pfp[i].key == store.state.caseData.name) {
      tmpImg = data.pfp[i].value;
    }
  }
  for (let i = 0; i < i18n.$t("Knight").DialogTitle.Knight.length; i++) {
    if (
      i18n.$t("Knight").DialogTitle.Knight[i].Name == store.state.caseData.name
    ) {
      let tmpData = {
        name: i18n.$t("Knight").DialogTitle.Knight[i].Name,
        ig: i18n.$t("Knight").DialogTitle.Knight[i].Instagram,
        img: tmpImg,
        tw: i18n.$t("Knight").DialogTitle.Knight[i].Twitter,
        money: i18n.$t("Knight").DialogTitle.Knight[i].Money,
        oncyber: i18n.$t("Knight").DialogTitle.Knight[i].Oncyber,
        discribe: i18n.$t("Knight").DialogTitle.Knight[i].Describe,
        PieChart: i18n.$t("Knight").DialogTitle.Knight[i].PieChart,
      };
      store.commit("set_case_data", tmpData);
    }
  }
  data.knightList = tmp;
}
watch(
  () => data.knight_name,
  () => {
    let tmp = [];
    for (let i = 0; i < i18n.$t("Knight").DialogTitle.Knight.length; i++) {
      if (
        i18n
          .$t("Knight")
          .DialogTitle.Knight[i].Name.toLowerCase()
          .includes(data.knight_name.toLowerCase())
      ) {
        let tmpImg = "";
        for (let j = 0; j < data.pfp.length; j++) {
          if (data.pfp[j].key == i18n.$t("Knight").DialogTitle.Knight[i].Name) {
            tmpImg = data.pfp[j].value;
          }
        }
        tmp.push({
          name: i18n.$t("Knight").DialogTitle.Knight[i].Name,
          ig: i18n.$t("Knight").DialogTitle.Knight[i].Instagram,
          img: tmpImg,
          money: i18n.$t("Knight").DialogTitle.Knight[i].Money,
          tw: i18n.$t("Knight").DialogTitle.Knight[i].Twitter,
          oncyber: i18n.$t("Knight").DialogTitle.Knight[i].Oncyber,
          discribe: i18n.$t("Knight").DialogTitle.Knight[i].Describe,
          PieChart: i18n.$t("Knight").DialogTitle.Knight[i].PieChart,
        });
      }
    }
    data.knightList = tmp;
  }
);
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
.knightCard {
  border-radius: 30px;
  border: groove 1em red;
  cursor: pointer;
  margin-left: 0.05rem !important;
}
.knightCard:hover {
  border-radius: 30px;
  border: groove 1em yellow;
  cursor: pointer;
  margin-left: 0.05rem;
}
</style>
