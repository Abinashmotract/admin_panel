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
    <h6 class="fw-bold ps-3 py-3">MULTI LOGIN ACCOUNT</h6>
    <CCard class="multi-login-account p-2">
      <CCardBody class="create-account-form">
        <CForm>
          <!-- Personal Info -->
          <div class="border rounded p-3 mb-3">
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
          <div class="rounded p-3 mb-1">
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
              <CButton color="success" class="w-100" @click="handleSubmit">Submit</CButton>
            </CCol>
            <CCol :md="1">
              <CButton color="light" class="w-100">Reset</CButton>
            </CCol>
          </CRow>

        </CForm>
      </CCardBody>

      <div class="rounded p-3 mt-3">
        <CTable striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Action</CTableHeaderCell>
              <CTableHeaderCell>Username</CTableHeaderCell>
              <CTableHeaderCell>Full Name</CTableHeaderCell>
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
              <!-- Add more headers if needed -->
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>Edit</CTableDataCell>
              <CTableDataCell>john_doe</CTableDataCell>
              <CTableDataCell>John Doe</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
              <CTableDataCell>✓</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </CCard>

    <!-- Table -->

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
  border: 1px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.form-check-wrapper {
  display: block;
  min-height: 1.5rem;
  padding-inline-start: 0em;
  margin-bottom: 0rem;
  font-size: 14px;
}
</style>
