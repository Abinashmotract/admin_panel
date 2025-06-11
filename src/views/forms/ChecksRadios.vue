<template>
  <div>
    <h5 class="fw-bold mb-3">SPORT SETTING</h5>
    <CCard class="p-2 charts-card">
      <CTable hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(sport, index) in sports" :key="index">
            <CTableDataCell>{{ sport.name }}</CTableDataCell>
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
  { name: 'Tennis', enabled: false },
  { name: 'Football', enabled: false },
  { name: 'Cricket', enabled: false },
  { name: 'Horse Racing', enabled: false },
  { name: 'Greyhound Racing', enabled: false },
  { name: 'KABADDI', enabled: false },
  { name: 'Virtual T10', enabled: false },
  { name: 'Basketball', enabled: false },
  { name: 'Volleyball', enabled: false },
  { name: 'Baseball', enabled: false },
  { name: 'Casino', enabled: false },
  { name: 'Election', enabled: false },
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
</style>
