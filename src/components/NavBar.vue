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
import tw from "../assets/tw.png";
import dis from "../assets/dis1.png";
import art from "../assets/art.png";
import x_file from "../assets/x_file.png";
import vote from "../assets/vote.png";

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
    { name: "EN", code: "en" },
    { name: "JP", code: "jp" },
    { name: "CN", code: "cn" },
    // { name: "Français", code: "fn" },
  ],
  items: [
    {
      to: "meme",
      img: x_file,
      txt: "MeMe",
    },
    {
      to: "knight",
      img: knight,
      txt: "Knight",
    },
    {
      to: "contest",
      img: art,
      txt: "Contest",
    },
    {
      to: "vote",
      img: vote,
      txt: "Vote",
    },
  ],
});
</script>

<template>
  <Menubar class="toolbar" :model="data.items">
    <template #start>
      <img
        alt="logo"
        :src="logo"
        class="p-mr-4 logo pointer"
        @click="router.push('/')"
      />
    </template>
    <template #item="{ item }">
      <router-link
        class="p-ml-1"
        :to="item.to"
        custom
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <a
          :href="href"
          @click="navigate"
          class="p-mt-2 p-mb-2 p-menuitem-link"
          style="color: black"
        >
          <img :src="item.img" class="pointer x_file p-mr-1" />
          {{ item.txt }}
        </a>
      </router-link>
    </template>
    <template #end>
      <!-- <a
        target="_blank"
        class="p-mr-3 pointer"
        href="https://opensea.io/collection/love-addicted-girls"
      >
        <img :src="os" class="knight" />
      </a> -->
      <div
        style="
          display: flex;
          /* 水平置中 */
          justify-content: center;
          /* 垂直置中 */
          align-items: center;
        "
      >
        <a
          target="_blank"
          class="p-mr-1 pointer"
          href="https://opensea.io/collection/love-addicted-girls"
        >
          <img :src="os" class="os" />
        </a>
        <a
          target="_blank"
          class="p-mr-1 pointer"
          href="https://twitter.com/SoudanNFT_LAG"
        >
          <img :src="tw" class="tw" />
        </a>

        <a
          class="p-mr-2 pointer"
          target="_blank"
          href="https://discord.com/invite/Soudan"
        >
          <img :src="dis" class="dis" />
        </a>
        <Dropdown
          style="line-height: 30px; /* ★ */"
          v-model="store.state.lang"
          :options="data.lang"
          @change="langSwitch"
          optionLabel="name"
          optionValue="code"
        />
      </div>
    </template>
  </Menubar>

  <!-- <Toolbar class="toolbar">
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
        :src="x_file"
        @click="router.push('/meme')"
        class="p-mr-3 pointer x_file"
      />

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
  </Toolbar> -->
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
  .x_file {
    display: block;
    // position: fixed; /* Set the navbar to fixed position */
    // top: 5;
    height: 40px;
    width: 40px;
  }
  .os {
    // display: block;
    // position: fixed; /* Set the navbar to fixed position */
    // top: 5;
    height: 50px;
    width: 50px;
    // max-width: 100px;
  }
  .dis {
    // display: block;
    // position: fixed; /* Set the navbar to fixed position */
    // top: 5;
    height: 48px;
    width: 48px;
    // max-width: 100px;
  }
  .tw {
    // display: block;
    // position: fixed; /* Set the navbar to fixed position */
    // top: 5;
    height: 50px;
    width: 50px;
    // max-width: 100px;
  }
  .knight {
    // display: block;
    // position: fixed; /* Set the navbar to fixed position */
    // top: 5;
    height: 43px;
    width: 43px;
    // max-width: 100px;
  }
  .logo {
    // position: fixed; /* Set the navbar to fixed position */
    // top: 5;
    height: 60px;
    width: 60px;
    max-width: 100px;
  }
}
</style>
