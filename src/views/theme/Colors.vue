<script setup>
import { ref } from 'vue'
import {
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CCardBody,
} from '@coreui/vue'

const privileges = [
  'All', 'DashBoard', 'Market Analysis', 'User List', 'Insert User', 'Active User Account', 'Bank',
  'Account Statement', 'Party Win Loss', 'Current Bets', 'User History', 'General Lock', 'Casino Result', 'Our Casino',
  'Events', 'Market Search Analysis', 'Login User creation', 'Withdraw', 'Deposit', 'Deposit Statement',
  'Credit Reference', 'User Info', 'User Password Change', 'User Lock', 'Withdraw Statement', 'Signup', 'GGR Report',
  'User Authentication', 'Bet Lock', 'TurnOver', 'Live Casino Result'
]

const selectedPrivileges = ref([])
const form = ref({
  clientId: '',
  fullName: '',
  password: '',
  confirmPassword: '',
  transactionCode: '',
})

const handleSubmit = () => {
  console.log('Form:', form.value)
}
</script>

<template>
  <div class="mb-3">
    <h6 class="fw-bold">MULTI LOGIN ACCOUNT</h6>
    <CCard class="multi-login-account p-2">
      <CCardBody class="create-account-form">
        <CForm>
          <!-- Personal Info -->
          <div class="border rounded p-2 mb-3">
            <h6 class="fw-semibold">Personal Information</h6>
            <CRow class="mt-2">
              <CCol :md="3">
                <CFormLabel>Client ID</CFormLabel>
                <CFormInput v-model="form.clientId" class="is-invalid" />
              </CCol>
              <CCol :md="3">
                <CFormLabel>Full Name</CFormLabel>
                <CFormInput v-model="form.fullName" class="is-invalid" />
              </CCol>
              <CCol :md="3">
                <CFormLabel>Password</CFormLabel>
                <CFormInput type="password" v-model="form.password" class="is-invalid" />
              </CCol>
              <CCol :md="3">
                <CFormLabel>Confirm Password</CFormLabel>
                <CFormInput type="password" v-model="form.confirmPassword" class="is-invalid" />
              </CCol>
            </CRow>
          </div>

          <!-- Privileges -->
          <div class="rounded p-2 mb-1">
            <h6 class="fw-semibold">Privileges</h6>
            <CRow class="previlage-box">
              <CCol :md="2" v-for="(item, idx) in privileges" :key="idx">
                <div class="form-check-wrapper">
                  <CFormCheck :label="item" :value="item" v-model="selectedPrivileges" />
                </div>
              </CCol>
            </CRow>
          </div>

          <!-- Transaction Code & Buttons -->
          <CRow class="align-items-center justify-content-end">
            <CCol :md="3">
              <div class="position-relative">
                <CFormInput v-model="form.transactionCode" placeholder="Transaction Code" class="is-invalid pr-5" />
              </div>
            </CCol>
            <CCol :md="1">
              <CButton color="success" @click="handleSubmit">Submit</CButton>
            </CCol>
            <CCol :md="1">
              <CButton color="light">Reset</CButton>
            </CCol>
          </CRow>

        </CForm>
      </CCardBody>

    <div class="table-container rounded p-2 mt-3">
    <div class="table-scroll-wrapper">
      <CTable striped hover class="custom-table">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell class="sticky-col col-1">Action</CTableHeaderCell>
            <CTableHeaderCell class="sticky-col col-2">Username</CTableHeaderCell>
            <CTableHeaderCell class="sticky-col col-3">Full Name</CTableHeaderCell>
            <CTableHeaderCell>DashBoard</CTableHeaderCell>
            <CTableHeaderCell>Market Analysis</CTableHeaderCell>
            <CTableHeaderCell>User List</CTableHeaderCell>
            <CTableHeaderCell>Insert User</CTableHeaderCell>
            <CTableHeaderCell>Account list for active users</CTableHeaderCell>
            <CTableHeaderCell>Bank</CTableHeaderCell>
            <CTableHeaderCell>Account Statement</CTableHeaderCell>
            <CTableHeaderCell>Party Win Loss</CTableHeaderCell>
            <CTableHeaderCell>Current Bets</CTableHeaderCell>
            <CTableHeaderCell>User History</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell class="sticky-col col-1">Edit</CTableDataCell>
            <CTableDataCell class="sticky-col col-2">john_doe</CTableDataCell>
            <CTableDataCell class="sticky-col col-3">John Doe</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
            <CTableDataCell>Yes</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  </div>
    </CCard>
  </div>
</template>

<style scoped>
.multi-login-account {
  box-shadow: 0 .75rem 1.5rem rgba(18, 38, 63, .03);
}

.is-invalid {
  border-color: #dc3545 !important;
}

.table-responsive {
  overflow-x: auto;
}

.create-account-form {
  border: 1px solid #eff2f7;
  padding: 10px;
  background: #f6f6f6;
}

.previlage-box {
  background-color: #ececec;
  /* border: 1px solid #ddd; */
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}

.form-check-wrapper {
  display: block;
  font-weight: 500;
  /* min-height: 1.5rem; */
  padding-inline-start: 0em;
  margin-bottom: 0rem;
  font-size: 12px;
}


.table-scroll-wrapper {
  overflow-x: auto;
  width: 100%;
}

.custom-table {
  min-width: 1400px; /* Enough width to allow scrolling */
  border-collapse: separate;
  border-spacing: 0;
}

/* Sticky columns base style */
.sticky-col {
  position: sticky;
  left: 0;
  background-color: white;
  z-index: 2;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
}

/* Specific offsets based on column widths */
.col-1 { left: 0; width: 100px; }
.col-2 { left: 100px; width: 150px; }
.col-3 { left: 250px; width: 150px; }

/* Optional: Adjust all cell spacing */
.custom-table th, .custom-table td {
  white-space: nowrap;
  padding: 0.75rem 1rem;
}
</style>
