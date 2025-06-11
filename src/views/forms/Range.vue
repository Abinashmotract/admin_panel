<template>
  <div>
    <h5 class="fw-bold mb-3">SERIES SETTING</h5>
    <CCard class="p-3 charts-card">
      <h6 class="fw-bold mb-3">Sports List</h6>
      <CFormSelect size="sm" class="mb-3" style="width: 200px" aria-label="Small select example custom-select">
        <option>Open this select menu</option>
        <option value="football">Football</option>
        <option value="cricket">Cricket</option>
        <option value="tennis">Tennis</option>
      </CFormSelect>
      <CTable hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Sport Name</CTableHeaderCell>
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
  { name: 'Tennis', sport_name: "Football", enabled: false },
  { name: 'Football', sport_name: "Football", enabled: false },
  { name: 'Cricket', sport_name: "Football", enabled: false },
  { name: 'Horse Racing', sport_name: "Football", enabled: false },
  { name: 'Greyhound Racing', sport_name: "Football", enabled: false },
  { name: 'KABADDI', sport_name: "Football", enabled: false },
  { name: 'Virtual T10', sport_name: "Football", enabled: false },
  { name: 'Basketball', sport_name: "Football", enabled: false },
  { name: 'Volleyball', sport_name: "Football", enabled: false },
  { name: 'Baseball', sport_name: "Football", enabled: false },
  { name: 'Casino', sport_name: "Football", enabled: false },
  { name: 'Election', sport_name: "Football", enabled: false },
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
