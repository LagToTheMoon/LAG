<script setup>
import { ref } from "vue";
import { useI18n } from "../i18nPlugin";

const i18n = useI18n();
// defineProps({
//   video_stream: String,
// });

// const data = reactive({});
</script>

<template>
  <div class="p-grid describe">
    <div class="p-col-12 p-md-6 describe_content">
      <h1>{{ i18n.$t("Describe").Art }}</h1>
      <p>
        {{ i18n.$t("Describe").Content }}
      </p>
      <p>
        {{ i18n.$t("Describe").Detail.t1 }}
      </p>
      <p>
        {{ i18n.$t("Describe").Detail.t2 }}
      </p>
      <p>
        {{ i18n.$t("Describe").Detail.t3 }}
      </p>
      <p>
        {{ i18n.$t("Describe").Detail.t4 }}
      </p>
      <p>
        {{ i18n.$t("Describe").Detail.t5 }}
      </p>
      <p>
        {{ i18n.$t("Describe").Detail.t6 }}
      </p>

      <a target="_blank" :href="i18n.$t('Describe').Wiki">
        {{ i18n.$t("Describe").More }}
      </a>
    </div>
    <div class="p-col-12 p-md-6 describe_img">
      <img src="../assets/abao.jpeg" />
    </div>
  </div>
</template>

<style lang="scss">
.describe {
  margin-right: 2.5rem !important;
  margin-left: 2.5rem !important;
  .describe_content {
    text-align: left;
    .color-blue {
      color: blue;
    }
  }
  .describe_img {
    img {
      width: 100%;
    }
  }
}
</style>
