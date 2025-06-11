<template>
  <div>
    <h5 class="fw-bold mb-3">ONLINE USER</h5>
    <CCard class="p-3 charts-card">
      <CButton color="dark" size="sm" class="w-25 mb-3">Logout All User</CButton>
      <CTable hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Username</CTableHeaderCell>
            <CTableHeaderCell>Date</CTableHeaderCell>
            <CTableHeaderCell>IP</CTableHeaderCell>
            <CTableHeaderCell>Detail</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(sport, index) in sports" :key="index">
            <CTableDataCell>{{ sport.name }}</CTableDataCell>
            <CTableDataCell>{{ sport.username }}</CTableDataCell>
            <CTableDataCell>{{ sport.date }}</CTableDataCell>
            <CTableDataCell>{{ sport.ipAddress }}</CTableDataCell>
            <CTableDataCell>{{ sport.details }}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sports = ref([
  { name: 'Tennis', username: "Test0001", date: "2025-06-11 14:25:01", ipAddress: "2402:8100:25c8:9bab:9c87:1eff:fe03:2a72", details: "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36" },
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
