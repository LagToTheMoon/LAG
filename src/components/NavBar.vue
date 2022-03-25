<script setup>
import Dropdown from "primevue/dropdown";
import Menubar from "primevue/menubar";
import { ref, reactive } from "vue";
import Toolbar from "primevue/toolbar";
import cookie from "../cookie";
import { useStore } from "vuex";
import { useI18n } from "../i18nPlugin";
import router from "../router";
import logo from "../assets/logo.png";
import knight from "../assets/knight.png";
import os from "../assets/os.png";

let cookieSetting = new cookie();
const i18n = useI18n();
const store = useStore();
defineProps({
  //   video_stream: String,
});
function langSwitch() {
  cookieSetting.doCookieSetup("lang", store.state.lang);
  i18n.locale.value = store.state.lang;
}
const data = reactive({
  lang: [
    { name: "English", code: "en" },
    { name: "やまと", code: "jp" },
    { name: "中文", code: "cn" },
    // { name: "Français", code: "fn" },
  ],
});
</script>

<template>
  <!-- <Menubar class="toolbar">
    <template #start>
      <img
        alt="logo"
        :src="logo"
        class="p-mr-2 logo pointer"
        @click="router.push('/')"
      />
    </template>
    <template #item>
      <img
        :src="knight"
        @click="router.push('/knight')"
        class="p-mr-3 pointer knight"
      />
      <a
        target="_blank"
        class="p-mr-3 pointer"
        href="https://opensea.io/collection/love-addicted-girls"
      >
        <img :src="os" class="knight" />
      </a>
      <a
        target="_blank"
        class="p-mr-3 pointer"
        href="https://twitter.com/SoudanNFT_LAG"
      >
        <i class="pi pi-twitter" style="font-size: 2rem; color: black"></i>
      </a>
      <a
        class="p-mr-3 pointer"
        target="_blank"
        href="https://discord.com/invite/Soudan"
      >
        <i class="pi pi-discord" style="font-size: 2rem; color: black"></i>
      </a>
    </template>
    <template #end>
      <Dropdown
        v-model="store.state.lang"
        :options="data.lang"
        @change="langSwitch"
        optionLabel="name"
        optionValue="code"
      />
    </template>
  </Menubar> -->
  <Toolbar class="toolbar">
    <template #start>
      <img
        alt="logo"
        :src="logo"
        class="p-mr-2 logo pointer"
        @click="router.push('/')"
      />
    </template>

    <template #end>
      <img
        :src="knight"
        @click="router.push('/knight')"
        class="p-mr-3 pointer knight"
      />

      <a
        target="_blank"
        class="p-mr-3 pointer"
        href="https://opensea.io/collection/love-addicted-girls"
      >
        <img :src="os" class="knight" />
      </a>

      <a
        target="_blank"
        class="p-mr-3 pointer"
        href="https://twitter.com/SoudanNFT_LAG"
      >
        <i class="pi pi-twitter" style="font-size: 2rem; color: black"></i>
      </a>

      <a
        class="p-mr-3 pointer"
        target="_blank"
        href="https://discord.com/invite/Soudan"
      >
        <i class="pi pi-discord" style="font-size: 2rem; color: black"></i>
      </a>
      <Dropdown
        v-model="store.state.lang"
        :options="data.lang"
        @change="langSwitch"
        optionLabel="name"
        optionValue="code"
      />
    </template>
  </Toolbar>
</template>

<style lang="scss">
.toolbar {
  .pointer {
    cursor: pointer;
  }
  min-width: 375px;
  height: 80px;
  left: 0px;
  /* overflow: hidden; */
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  width: 100%;
  top: 0;
  z-index: 99;
  .knight {
    display: block;
    // position: fixed; /* Set the navbar to fixed position */
    // top: 5;
    height: 43px;
    width: 43px;
    // max-width: 100px;
  }
  .logo {
    position: fixed; /* Set the navbar to fixed position */
    top: 5;
    height: 60px;
    width: 60px;
    max-width: 100px;
  }
}
</style>
