<script setup>
import NavBar from "./components/NavBar.vue";
import Bottom from "./components/Bottom.vue";
import { provideI18n } from "./i18nPlugin";
import Music from "./components/Music.vue";
import cn from "./i18n/cn";
import en from "./i18n/en";
import fn from "./i18n/fn";
import jp from "./i18n/jp";
import cookie from "./cookie";
import { useStore } from "vuex";
let cookieSetting = new cookie();
let lang = cookieSetting.getCookie("lang");
const store = useStore();
if (lang != "") {
  store.commit("set_lang", lang);
}

provideI18n({
  locale: store.state.lang,
  messages: {
    cn: cn,
    en: en,
    // fn: fn,
    jp: jp,
  },
});
</script>

<template>
  <div>
    <Music />
    <NavBar />
    <div class="main">
      <router-view> </router-view>
    </div>
    <Bottom class="bottom" />
  </div>
</template>

<style>
.bottom {
  text-align: center;
  color: white;
  background-color: black;
}
.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
  overflow: hidden;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
