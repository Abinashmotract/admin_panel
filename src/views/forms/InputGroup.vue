<template>
  <div>
    <h5 class="fw-bold mb-3">MATCH SETTING</h5>
    <CCard class="p-3 charts-card">
      <div class="d-flex gap-4">
        <div>
          <h6 class="fw-bold mb-1">Sports List</h6>
          <CFormSelect size="sm" class="mb-3" style="width: 200px" aria-label="Small select example custom-select">
            <option>Open this select menu</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="tennis">Tennis</option>
          </CFormSelect>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Series List</h6>
          <CFormSelect size="sm" class="mb-3" style="width: 200px" aria-label="Small select example custom-select">
            <option>All</option>
            <option value="india">India</option>
            <option value="brazil">Brazil</option>
            <option value="canada">Canada</option>
          </CFormSelect>
        </div>
      </div>
      <CTable hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Match Name</CTableHeaderCell>
            <CTableHeaderCell>Date</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(sport, index) in sports" :key="index">
            <CTableDataCell>{{ sport.name }}</CTableDataCell>
            <CTableDataCell>{{ sport.sport_name }}</CTableDataCell>
            <CTableDataCell>
              <CFormSwitch v-model="sport.enabled" size="lg" shape="pill" color="success" />
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sports = ref([
  { name: 'Henan Huishang W - Yongchuan Tea Mountain Bamboo Sea W', sport_name: "2025-06-11 13:30:00", enabled: false },
  { name: 'Excursionistas Ii Reserve - San Martin Burzaco Reserves', sport_name: "2025-06-11 19:30:00", enabled: false },
  { name: 'Khangarid - SP Falcons', sport_name: "2025-06-11 16:45:00", enabled: false },
  { name: 'Ulaanbaatar - Deren', sport_name: "2025-06-11 13:45:00", enabled: false },
  { name: 'Shandong Sports Lottery Women - Zhejiang Hangzhou W', sport_name: "2025-06-11 13:30:00", enabled: false },
  { name: 'Uhamiaji FC - KVZ', sport_name: "2025-06-11 18:30:00", enabled: false },
  { name: 'Gimnasia Mendoza Reserves - Defensores Unidos II', sport_name: "	2025-06-11 20:00:00", enabled: false },
])
</script>

<style scoped>
.charts-card {
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border: none !important;
}

.fw-bold {
  font-weight: 600;
}

::v-deep(.custom-select:focus) {
  outline: none !important;
  box-shadow: none !important;
  border-color: #ced4da !important;
}
</style>
