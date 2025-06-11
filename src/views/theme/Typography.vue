<script setup>
import { ref } from 'vue'
import { CRow, CCol, CFormInput } from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { cilReload } from '@coreui/icons'

const searchQuery = ref('')

const handleReload = () => {
  console.log('Reload clicked')
}
</script>

<template>
  <CRow class="align-items-center justify-content-between mb-3">
    <CCol :xs="12" :md="6" class="d-flex align-items-center gap-2">
      <h5 class="mb-0 fw-bold">MARKET ANALYSIS</h5>
      <CIcon :icon="cilReload" size="lg" style="cursor: pointer;" @click="handleReload" />
    </CCol>
    <CCol :xs="12" :md="6" class="d-flex justify-content-md-end mt-2 mt-md-0">
      <CFormInput type="text" placeholder="Search event" class="w-100 w-md-auto c-form-control"
        style="max-width: 250px;" v-model="searchQuery" />
    </CCol>
  </CRow>
</template>


<style scoped>
.c-form-control:focus {
  box-shadow: none !important;
  border-color: #ced4da !important;
  /* default Bootstrap gray border */
}
</style>
