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
    <video style="width: 100vw; height: calc(100vh - 80px)" autoplay muted loop>
      <source :src="Video" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <!-- <Describe class="p-mt-2" /> -->

    <!-- <div class="p-mt-2" style="width: 100%">
      <iframe
        style="width: 100%; height: calc(100vh - 80px)"
        src="https://oncyber.io/liang"
      >
        你的瀏覽器不支援 iframe
      </iframe>
    </div> -->

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
import TimeScroll from "../components/TimeScroll.vue";
import YtVideo from "../components/YtVideo.vue";
import Bottom from "../components/Bottom.vue";
import Describe from "../components/Describe.vue";
import Subject from "../components/Subject.vue";
import Video from "../assets/LAG.mp4";
import { useStore } from "vuex";
import { useI18n } from "../i18nPlugin";

const i18n = useI18n();
const store = useStore();

// eslint-disable-next-line no-unused-vars
const mounted = onBeforeMount(async () => {
  //   store.commit("set_product_data", i18n.$t("Home").ProductData);
  //   store.commit("set_dialog_data", i18n.$t("Home").DialogData);
});

const data = reactive({});
</script>

<style></style>
