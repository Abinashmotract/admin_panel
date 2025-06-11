<template>
  <div class="p-4">
    <!-- Page Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h4 class="fw-bold">CREATE BONUS</h4>
      <small class="text-muted">
        Home / <span class="text-dark">Bonus</span> / <span class="fw-semibold">Create Bonus</span>
      </small>
    </div>

    <!-- Form Card -->
    <CCard class="p-4">
      <CForm @submit.prevent="submitForm">
        <div class="row mb-3">
          <!-- Bonus Name -->
          <div class="col-md-6 mb-3">
            <CFormLabel for="bonusName">Bonus Name:</CFormLabel>
            <CFormSelect id="bonusName" v-model="bonusName">
              <option disabled value="">Select Name</option>
              <option value="Signup">Signup</option>
              <option value="Referral">First Deposit</option>
              <option value="Deposit">Every Deposit</option>
              <option value="Promotion">Referal</option>
            </CFormSelect>
          </div>

          <!-- Type -->
          <div class="col-md-6 mb-3">
            <CFormLabel for="bonusType">Type:</CFormLabel>
            <CFormInput id="bonusType" v-model="type" placeholder="Fix Amount" />
          </div>

          <!-- Amount -->
          <div class="col-md-12 mb-3">
            <CFormLabel for="amount">Amount:</CFormLabel>
            <CFormInput id="amount" type="number" v-model="amount" placeholder="amount" />
          </div>
        </div>

        <!-- Submit Button -->
        <div class="text-end">
          <CButton type="submit" color="dark">Submit</CButton>
        </div>
      </CForm>
    </CCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bonusName = ref('')
const type = ref('Fix Amount')
const amount = ref('')

const submitForm = () => {
  console.log('Submitted Data:', {
    bonusName: bonusName.value,
    type: type.value,
    amount: amount.value,
  })
}
</script>

<style scoped>
.charts-card {
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border: none !important;
}

::v-deep(.form-control:focus) {
  border-color: #ced4da !important;
  box-shadow: none !important;
  outline: none !important;
}
</style>