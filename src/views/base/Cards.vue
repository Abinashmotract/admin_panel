<template>
  <div class="container-fluid px-4">
    <h5 class="mb-4 fw-bold">CREATE ACCOUNT</h5>
    <CRow>
      <!-- Left Column: General Information -->
      <CCol :md="6">
        <CCard class="p-4">
          <h6 class="fw-bold mb-3">General Information</h6>
          <CForm>
            <div class="mb-3">
              <label>User name:</label>
              <CFormInput v-model="form.username" placeholder="User Name" />
            </div>
            <div class="mb-3">
              <label>Full Name:</label>
              <CFormInput v-model="form.fullname" placeholder="Full Name" />
            </div>
            <div class="mb-3">
              <label>Password:</label>
              <CFormInput v-model="form.password" type="password" />
            </div>
            <div class="mb-3">
              <label>Confirm Password:</label>
              <CFormInput v-model="form.confirmPassword" type="password" placeholder="Confirm Password" />
            </div>
            <div class="mb-3">
              <label>City:</label>
              <CFormInput v-model="form.city" placeholder="City" />
            </div>
            <div class="mb-3">
              <label>Mobile Number:</label>
              <CFormInput v-model="form.mobile" placeholder="Mobile Number" />
            </div>
          </CForm>
        </CCard>
      </CCol>

      <!-- Right Column: Credit & Partnership -->
      <CCol :md="6">
        <CCard class="p-4">
          <CForm>
            <div class="mb-3">
              <label>Credit Amount:</label>
              <CFormInput v-model="form.creditAmount" type="number" placeholder="0" />
            </div>
            <div class="mb-3">
              <label>User Type:</label>
              <CFormSelect v-model="form.userType">
                <option disabled value="">-Select Your A/C Type-</option>
                <option>Admin</option>
                <option>User</option>
              </CFormSelect>
            </div>

            <h6 class="fw-bold mt-4 mb-2">Partnership Information</h6>
            <div class="mb-2">
              <label>Partnership With No Return:</label>
              <CFormInput v-model="form.partnership" placeholder="0" />
            </div>
            <div class="mb-3 text-muted" style="font-size: 14px;">Our : 100 | Down Line: 0</div>

            <div class="mb-3">
              <label>Remark:</label>
              <CFormTextarea v-model="form.remark" rows="2" placeholder="Remark" />
            </div>

            <CRow class="align-items-end">
              <CCol :md="9">
                <CFormInput v-model="form.transactionCode" placeholder="Transaction Code" />
              </CCol>
              <CCol :md="3">
                <CButton color="secondary" class="w-100">Submit</CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  username: '',
  fullname: '',
  password: '',
  confirmPassword: '',
  city: '',
  mobile: '',
  creditAmount: 0,
  userType: '',
  partnership: 0,
  remark: '',
  transactionCode: ''
})
</script>

<style scoped>
label {
  font-weight: 500;
  margin-bottom: 4px;
}

::v-deep(.form-control:focus) {
  border-color: #ced4da !important;
  box-shadow: none !important;
  outline: none !important;
}
</style>
