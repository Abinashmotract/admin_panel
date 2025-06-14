<template>
  <div>
    <h5 class="fw-bold mb-3">ACCOUNT STATEMENT</h5>
    <CCard class="p-3 charts-card">
      <div class="d-flex gap-4 mb-4">
        <div>
          <h6 class="fw-bold mb-1">Search By Client Name</h6>
          <CFormSelect size="sm" class="mb-3" style="width: 200px" aria-label="Small select example custom-select">
            <option>Open this select menu</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="tennis">Tennis</option>
          </CFormSelect>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Select Date Range</h6>
          <CFormSelect size="sm" class="mb-3" style="width: 200px" aria-label="Small select example custom-select">
            <option>All</option>
            <option value="india">India</option>
            <option value="brazil">Brazil</option>
            <option value="canada">Canada</option>
          </CFormSelect>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Type</h6>
          <CFormSelect size="sm" class="mb-3" style="width: 200px" aria-label="Small select example custom-select">
            <option>All</option>
            <option value="india">Deposite & Withdrow Report</option>
            <option value="brazil">Sport Report</option>
            <option value="canada">Cashino Report</option>
          </CFormSelect>
        </div>
      </div>
      <div class="d-flex gap-2 align-items-end mb-4">
       <CButton color="dark" size="sm" @click="loadData">Load</CButton>
        <CButton color="light" size="sm" @click="resetData">Reset</CButton>
         <CButton color="success"
                        style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-file-excel fa-sm text-white"></i>
                    </CButton>
         <CButton color="danger"
                        style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-file-pdf fa-sm text-white"></i>
                    </CButton>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="d-flex align-items-center gap-2">
          <label>Show</label>
          <select v-model="entries" class="form-select w-auto">
            <option v-for="n in [10, 25, 50, 100]" :key="n" :value="n">{{ n }}</option>
          </select>
          <label>entries</label>
        </div>
        <input type="text" v-model="search" class="form-control w-auto" placeholder="Search..." />
      </div>
      <CTable hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Date</CTableHeaderCell>
            <CTableHeaderCell>Sr No</CTableHeaderCell>
            <CTableHeaderCell>Credit</CTableHeaderCell>
            <CTableHeaderCell>Debit</CTableHeaderCell>
            <CTableHeaderCell>Pts</CTableHeaderCell>
            <CTableHeaderCell>Remark</CTableHeaderCell>
            <CTableHeaderCell>Fromto</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(sport, index) in sports" :key="index">
            <CTableDataCell></CTableDataCell>
            <CTableDataCell>{{ sport.soprt_name }}</CTableDataCell>
            <CTableDataCell>{{ sport.series_name }}</CTableDataCell>
            <CTableDataCell>{{ sport.match_name }}</CTableDataCell>
            <CTableDataCell>{{ sport.match_date }}</CTableDataCell>
            <CTableDataCell>{{ sport.market_name }}</CTableDataCell>
            <CTableDataCell>{{ sport.market_id }}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sports = ref([
  { soprt_name: 1, series_name: 0, match_name: 0, match_date: 0, market_name: "opening balance", market_id: "/" },
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
