<script setup>
import Dropdown from "primevue/dropdown";
import { ref } from "vue";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
import cookie from "../cookie";
import { useStore } from "vuex";
import { useI18n } from "../i18nPlugin";

let cookieSetting = new cookie();
const i18n = useI18n();
const store = useStore();
defineProps({
  //   video_stream: String,
  items: [],
});
function langSwitch() {
  cookieSetting.doCookieSetup("lang", store.state.lang);
  i18n.locale.value = store.state.lang;
}
// const data = reactive({});
</script>

<template>
  <div class="footer">
    <div class="container d-flex align-items-center">
      <span class="p-text-white"
        >© 2022 Copyright:{{ i18n.$t("Footer").CopyRight }}</span
      >
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  // background: black;
  // color: white;
  min-width: 375px;
  height: 60px;
  line-height: 60px;
  // background: #f8f9fa;
  /* overflow: hidden; */
  /* background-color: #333; */
  // position: fixed;
  width: 100%;
}
</style>
