<template>
  <div class="p-mt-5">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="card">
      <h5>Alternate Align</h5>
      <Timeline :value="data.events2" layout="horizontal" align="bottom">
        <template #content="slotProps">
          {{ slotProps.item }}
        </template>
      </Timeline>
    </div>
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
import Timeline from "primevue/timeline";
import Card from "primevue/card";
import Sidebar from "primevue/sidebar";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useStore } from "vuex";
import { useI18n } from "../i18nPlugin";
import Button from "primevue/button";

function Chart() {
  data.chart = true;
  let tmpData = {
    LineChart: i18n.$t("Contest").LineChart,
    BarChart: i18n.$t("Contest").BarChart,
    PieChart: i18n.$t("Contest").PieChart,
  };
  store.commit("set_contest_data", tmpData);
}

const i18n = useI18n();
const store = useStore();

// eslint-disable-next-line no-unused-vars
onMounted(() => {});

const data = reactive({
  time: null,
  showAnima: false,
  events1: [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ],
  events2: ["2020", "2021", "2022", "2023"],
});
</script>

<style lang="scss" scoped>
.custom-marker {
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50%;
  z-index: 1;
}

::v-deep(.p-timeline-event-content) ::v-deep(.p-timeline-event-opposite) {
  line-height: 1;
}

@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row !important;

      .p-timeline-event-content {
        text-align: left !important;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }

    .p-card {
      margin-top: 1rem;
    }
  }
}
</style>
