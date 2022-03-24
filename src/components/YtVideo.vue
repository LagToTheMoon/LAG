<script setup>
import { ref } from "vue";

defineProps({
  video_stream: String,
});

// const data = reactive({});
// https://www.youtube.com/embed/ffI-JX2bZP4
</script>

<template>
  <iframe
    :src="video_stream"
    class="video"
    style="border: none; overflow: hidden"
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>
</template>

<style scoped>
.video {
  width: 95vw;
  height: 84vh;
}
</style>
