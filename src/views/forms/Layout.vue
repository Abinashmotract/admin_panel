<template>
  <div>
    <h5 class="fw-bold mb-3">ACCOUNT SETTING</h5>
    <CCard class="p-3 charts-card">
      <CTable hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Account Number</CTableHeaderCell>
            <CTableHeaderCell>Bank Name</CTableHeaderCell>
            <CTableHeaderCell>Code</CTableHeaderCell>
            <CTableHeaderCell>Account Holder Name</CTableHeaderCell>
            <CTableHeaderCell>Message</CTableHeaderCell>
            <CTableHeaderCell>Region</CTableHeaderCell>
            <CTableHeaderCell>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(sport, index) in sports" :key="index">
            <CTableDataCell>{{ sport.account_number }}</CTableDataCell>
            <CTableDataCell>{{ sport.bank_name }}</CTableDataCell>
            <CTableDataCell>{{ sport.code }}</CTableDataCell>
            <CTableDataCell>{{ sport.account_holder_name }}</CTableDataCell>
            <CTableDataCell>{{ sport.message }}</CTableDataCell>
            <CTableDataCell>{{ sport.region }}</CTableDataCell>
            <CTableDataCell>
              <div class="d-flex gap-2 flex-wrap">
                <CButton color="info" size="sm">Update Account</CButton>
                <CButton color="warning" size="sm">Update QR</CButton>
                <CButton color="danger" size="sm">Delete</CButton>
              </div>
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
  {
    account_number: '111112221222',
    bank_name: 'domar',
    code: '15341',
    account_holder_name: 'zakir',
    message: '3',
    region: 'bikash'
  }
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
