<script setup>
import { ref } from 'vue'
import {
  CRow, CCol, CFormInput, CButton, CTable, CTableHead, CTableRow, CTableHeaderCell,
  CTableBody, CTableDataCell, CFormSelect, CCard, CCardBody
} from '@coreui/vue'

const search = ref('')
const showEntries = ref('50')
const users = ref([
  {
    username: 'SKY2001',
    cr: 50000,
    pts: 50000,
    clientPL: 0,
    clientPLPercent: 0,
    exposure: 0,
    availablePts: 40000,
    pName: 92,
    accountType: 'Admin',
  },
  {
    username: 'SKY2007',
    cr: 500000,
    pts: 472620,
    clientPL: -27380,
    clientPLPercent: -2738,
    exposure: 0,
    availablePts: 192055,
    pName: 90,
    accountType: 'Admin',
  },
  {
    username: 'MM777',
    cr: 500000,
    pts: 336280,
    clientPL: -163720,
    clientPLPercent: -163720,
    exposure: 0,
    availablePts: 290000,
    pName: 0,
    accountType: 'Admin',
  },
])
</script>

<template>
  <div>
    <h6 class="fw-bold py-3">ACCOUNT LIST FOR ACTIVE USERS</h6>
    <CCard>
      <CCardBody>
        <CRow class="align-items-center mb-3">
          <CCol :md="4">
            <CFormInput v-model="search" placeholder="Search User" />
          </CCol>
          <CCol :md="1">
            <CButton color="dark" class="w-100">Load</CButton>
          </CCol>
          <CCol :md="1">
            <CButton color="light" class="w-100">Reset</CButton>
          </CCol>
          <CCol class="text-end" :md="6">
            <RouterLink to="/base/cards">
              <CButton color="success" class="me-2">
                <i class="bi bi-plus-circle me-1"></i> CREATE ACCOUNT
              </CButton>
            </RouterLink>
            <CButton color="danger" class="me-2">
              <i class="bi bi-file-earmark-pdf"></i>
            </CButton>
            <CButton color="success">
              <i class="bi bi-file-earmark-excel"></i>
            </CButton>
          </CCol>
        </CRow>

        <CRow class="mb-2">
          <CCol :md="2">
            <label class="me-2">Show</label>
            <CFormSelect v-model="showEntries" :options="['50', '100', '150']" class="d-inline-block w-auto" />
            <span class="ms-2">entries</span>
          </CCol>
        </CRow>

        <div class="table-responsive">
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell class="table-header">User Name</CTableHeaderCell>
                <CTableHeaderCell class="table-header">CR</CTableHeaderCell>
                <CTableHeaderCell class="table-header">Pts</CTableHeaderCell>
                <CTableHeaderCell class="table-header">Client (P/L)</CTableHeaderCell>
                <CTableHeaderCell class="table-header">Client (P/L) %</CTableHeaderCell>
                <CTableHeaderCell class="table-header">Exposure</CTableHeaderCell>
                <CTableHeaderCell class="table-header">Available Pts</CTableHeaderCell>
                <CTableHeaderCell class="table-header">B st</CTableHeaderCell>
                <CTableHeaderCell class="table-header">U st</CTableHeaderCell>
                <CTableHeaderCell class="table-header">PName</CTableHeaderCell>
                <CTableHeaderCell class="table-header">Account Type</CTableHeaderCell>
                <CTableHeaderCell class="table-header">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="(user, index) in users" :key="index">
                <CTableDataCell>{{ user.username }}</CTableDataCell>
                <CTableDataCell class="text-warning fw-bold">{{ user.cr.toLocaleString() }}</CTableDataCell>
                <CTableDataCell>{{ user.pts.toLocaleString() }}</CTableDataCell>
                <CTableDataCell>{{ user.clientPL }}</CTableDataCell>
                <CTableDataCell>{{ user.clientPLPercent }}</CTableDataCell>
                <CTableDataCell>{{ user.exposure }}</CTableDataCell>
                <CTableDataCell>{{ user.availablePts.toLocaleString() }}</CTableDataCell>
                <CTableDataCell>
                  <!-- <CSwitch /> -->
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  </div>
                </CTableDataCell>
                <CTableDataCell>{{ user.pName }}</CTableDataCell>
                <CTableDataCell>{{ user.accountType }}</CTableDataCell>
                <CTableDataCell>
                  <CButton size="sm" color="success" class="no-radius">D</CButton>
                  <CButton size="sm" color="danger" class="no-radius">W</CButton>
                  <CButton size="sm" color="dark" class="no-radius">CS</CButton>
                  <CButton size="sm" color="primary" class="no-radius">More</CButton>
                </CTableDataCell>

              </CTableRow>
            </CTableBody>
          </CTable>
        </div>

        <div class="d-flex justify-content-end align-items-center mt-3">
          <span class="me-3">« Previous</span>
          <span class="pagination-circle">1</span>
          <span class="ms-3">Next »</span>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<style scoped>
.pagination-circle {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: black;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
}

.no-radius {
  border-radius: 0 !important;
}

.table-header,
::v-deep .table> :not(caption)>*>* {
  font-size: 12px !important;
  font-weight: normal !important;
}
</style>
