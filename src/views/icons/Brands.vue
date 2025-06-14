<template>
  <div>
    <h5 class="fw-bold">PARTY WIN LOSS</h5>
    <CCard class="charts-card">
      <div class="d-flex gap-4 mb-4">
        <div>
          <!-- <h6 class="fw-bold mb-1">Search By Client Name</h6> -->
          <CFormSelect size="sm" class="" style="width: 200px" aria-label="Small select example custom-select">
            <option>All</option>
            <option value="football">User</option>
          </CFormSelect>
        </div>
        <div class="d-flex gap-2 align-items-end">
         <CButton color="dark" size="sm" @click="loadData">Load</CButton>
          <CButton color="light" size="sm" @click="resetData">Reset</CButton>
          <CButton color="light" size="sm" @click="downloadPdf">Pdf</CButton>
          <CButton color="light" size="sm" @click="downloadPdf">Pdf</CButton>
        </div>
      </div>
      <div class="d-flex justify-content-end align-items-center mb-2">
        <input type="text" v-model="search" class="form-control w-auto" placeholder="Search..." />
      </div>
      <CTable hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>No</CTableHeaderCell>
            <CTableHeaderCell>User Name</CTableHeaderCell>
            <CTableHeaderCell>Leval</CTableHeaderCell>
            <CTableHeaderCell>Casion Pts</CTableHeaderCell>
            <CTableHeaderCell>Sport Pts</CTableHeaderCell>
            <CTableHeaderCell>Third Pary Pts</CTableHeaderCell>
            <CTableHeaderCell>Profit/Loss</CTableHeaderCell>
            <CTableHeaderCell>Ptype</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(user, index) in users" :key="index">
            <CTableDataCell>{{ index + 1 }}</CTableDataCell>
            <CTableDataCell>{{ user.userName }}</CTableDataCell>
            <CTableDataCell>{{ user.level }}</CTableDataCell>
            <CTableDataCell>{{ user.casinoPts }}</CTableDataCell>
            <CTableDataCell>{{ user.sportPts }}</CTableDataCell>
            <CTableDataCell>{{ user.thirdPartyPts }}</CTableDataCell>
            <CTableDataCell>{{ user.profitLoss }}</CTableDataCell>
            <CTableDataCell>{{ user.ptype }}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([
  {
    userName: "wsuper3",
    level: "Super Admin",
    casinoPts: 159500,
    sportPts: -63795,
    thirdPartyPts: 0,
    profitLoss: 95705,
    ptype: "",
  },
  {
    userName: "Sky2001",
    level: "Admin",
    casinoPts: 0,
    sportPts: 0,
    thirdPartyPts: 0,
    profitLoss: 0,
    ptype: "",
  },
  {
    userName: "Sky2007",
    level: "Admin",
    casinoPts: 40280,
    sportPts: -20845,
    thirdPartyPts: 0,
    profitLoss: 19435,
    ptype: "",
  },
  {
    userName: "Den001",
    level: "User",
    casinoPts: -40280,
    sportPts: 20845,
    thirdPartyPts: 0,
    profitLoss: -19435,
    ptype: "",
  },
  {
    userName: "MM777",
    level: "Admin",
    casinoPts: 119220,
    sportPts: -42950,
    thirdPartyPts: 0,
    profitLoss: 76270,
    ptype: "",
  },
  {
    userName: "Test0001",
    level: "User",
    casinoPts: -119220,
    sportPts: 42950,
    thirdPartyPts: 0,
    profitLoss: -76270,
    ptype: "",
  },
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
