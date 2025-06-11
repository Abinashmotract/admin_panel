<script setup>
import { ref } from 'vue';
import { CRow, CCol, CCard, CCardBody } from '@coreui/vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';
// import MainChart from './MainChart.vue'
// import WidgetsStatsA from './../widgets/WidgetsStatsTypeA.vue' 
// import WidgetsStatsD from './../widgets/WidgetsStatsTypeD.vue'

const balanceData = [
  { name: 'Balance', value: 45395 },
  { name: '45395', value: 0 },
  { name: 'Credit Pts', value: 1000000 },
  { name: 'All Pts', value: 1000000 },
  { name: 'Settlement Pts', value: -95705 },
  { name: 'Upper Pts', value: 0 },
  { name: 'Down Pts', value: 95395 }
]

const casinoGames = ref([
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1031.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1025.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1019.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1018.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1021.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1024.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1028.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1027.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1022.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1032.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1029.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1026.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-2.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-3.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1023.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-5.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-6.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1033.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1034.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-4.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1012.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1014.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1011.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1010.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1016.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1015.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-145.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1013.webp' },
  { image: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-7.webp' }
]);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['Sports P/L', 'Casino P/L', 'Third Party Casino', 'Total P/L'],
  datasets: [
    {
      label: 'Sports P/L',
      data: [-63795, 0, 0, 0],
      backgroundColor: '#8e44ec',
      barThickness: 20,
    },
    {
      label: 'Casino P/L',
      data: [0, 159500, 0, 0],
      backgroundColor: '#fbc25e',
      barThickness: 20,
    },
    {
      label: 'Third Party Casino',
      data: [0, 0, 0, 0],
      backgroundColor: '#2a7de1',
      barThickness: 20,
    },
    {
      label: 'Total P/L',
      data: [0, 0, 0, 95705],
      backgroundColor: '#2edfb9',
      barThickness: 20,
    },
  ],
};

const chartOptions = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#343a40',
        font: { size: 12 },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.dataset.label + ': ' + context.raw;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#495057',
      },
    },
    y: {
      ticks: {
        color: '#495057',
      },
    },
  },
};
</script>

<template>
  <div>
    <div class="text-center">
      <CRow :xs="{ cols: 1 }" :sm="{ cols: 2 }" :md="{ cols: 4 }" class="g-4">
        <CCol v-for="(item, index) in balanceData" :key="index">
          <CCard class="dashboard-card border-0">
            <CCardBody class="text-start">
              <p class="text-body-secondary">{{ item.name }}</p>
              <h5 class="fw-bold">{{ item.value }}</h5>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>

    <div class="text-center mt-4">
      <CRow :xs="{ cols: 12 }">
        <CCol>
          <CCard class="dashboard-card border-0">
            <CCardBody class="text-start">
              <Bar :data="chartData" :options="chartOptions" />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>

    <div class="mt-4">
      <CRow>
        <CCol :xs="12">
          <h4 class="sport-list-title pl-2 casino-heading">Our Live Casino</h4>
          <div class="casino-banners-section" data-simplebar>
            <CRow class="casinobanners scrollable-section">
              <CCol v-for="(game, index) in casinoGames" :key="index" :lg="2" :md="3" :xs="6"
                class="casino-banner-item px-1 mb-2">
                <a href="javascript:void(0);">
                  <img fluid :src="game.image" class="img-fluid" />
                </a>
              </CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<style scoped>
.dashboard-card {
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border: none !important;
}

.casino-heading {
  color: #495057;
}

.scrollable-section {
  max-height: 300px;
  overflow-y: auto;
}

/* Native Scrollbar (WebKit) */
.scrollable-section::-webkit-scrollbar {
  width: 6px;
}

.scrollable-section::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

/* SimpleBar Custom Scrollbar */
::v-deep(.scrollable-section .simplebar-scrollbar::before) {
  background-color: #888;
  width: 6px !important;
  border-radius: 10px;
}
</style>
