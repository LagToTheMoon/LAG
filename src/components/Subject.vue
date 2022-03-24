<script setup>
import { ref } from "vue";

// defineProps({
//   video_stream: String,
// });

// const data = reactive({});
</script>

<template>
  <div class="p-grid nested-grid subject">
    <div class="p-col-4">
      <img src="../assets/type_god.jpg" />
    </div>
    <div class="p-col-8">
      <div class="p-grid">
        <div class="p-col-8"><img src="../assets/type_god.jpg" /></div>
        <div class="p-col-4"><img src="../assets/type_god.jpg" /></div>
        <div class="p-col-4"><img src="../assets/type_god.jpg" /></div>
        <div class="p-col-8"><img src="../assets/type_god.jpg" /></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.subject {
  //   height: 60vh;
  margin-right: 2.5rem !important;
  margin-left: 2.5rem !important;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
