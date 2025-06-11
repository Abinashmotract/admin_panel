<template>
  <CCard class="p-4 charts-card">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h5 class="fw-bold">FNACY SETTING</h5>
      <CBreadcrumb>
        <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
        <CBreadcrumbItem active>FNACY SETTING</CBreadcrumbItem>
      </CBreadcrumb>
    </div>

    <!-- Filters -->
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <CFormLabel>Sport Name</CFormLabel>
        <CFormSelect v-model="filters.sport">
          <option>Cricket</option>
        </CFormSelect>
      </div>
      <div class="col-md-4">
        <CFormLabel>Series Name</CFormLabel>
        <CFormSelect v-model="filters.series">
          <option>All</option>
        </CFormSelect>
      </div>
      <div class="col-md-4">
        <CFormLabel>Match Name</CFormLabel>
        <CFormSelect v-model="filters.match">
          <option>All</option>
        </CFormSelect>
      </div>
    </div>

    <!-- Table -->
    <CTable bordered hover responsive>
      <CTableHead class="text-center">
        <CTableRow>
          <CTableHeaderCell>Market Id</CTableHeaderCell>
          <CTableHeaderCell>Match Name</CTableHeaderCell>
          <CTableHeaderCell>Match Date</CTableHeaderCell>
          <CTableHeaderCell>Runner Name</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Result</CTableHeaderCell>
          <CTableHeaderCell>Abandon</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="(item, index) in paginatedData" :key="index" class="align-middle">
          <CTableDataCell>{{ item.marketId }}</CTableDataCell>
          <CTableDataCell>{{ item.matchName }}</CTableDataCell>
          <CTableDataCell>{{ item.matchDate }}</CTableDataCell>
          <CTableDataCell>{{ item.runnerName }}</CTableDataCell>
          <CTableDataCell>
            <CButton color="light" size="sm">{{ item.status }}</CButton>
          </CTableDataCell>
          <CTableDataCell>
            <CFormInput size="sm" class="mb-2" />
            <CButton color="success" size="sm" class="text-white w-100">Update</CButton>
          </CTableDataCell>
          <CTableDataCell>
            <CButton color="success" size="sm" class="text-white w-100">Abandon</CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>

    <!-- Pagination -->
    <div class="d-flex justify-content-between align-items-center mt-3">
      <div class="text-muted">Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ data.length }} entries</div>
      <CPagination align="end">
        <CPaginationItem @click="prevPage" :disabled="currentPage === 1">Previous</CPaginationItem>
        <CPaginationItem @click="nextPage" :disabled="endIndex >= data.length">Next</CPaginationItem>
      </CPagination>
    </div>
  </CCard>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormLabel,
  CFormSelect,
  CFormInput,
  CButton,
  CBreadcrumb,
  CBreadcrumbItem,
  CPagination,
  CPaginationItem,
} from '@coreui/vue'
import { ref, computed } from 'vue'

const filters = ref({
  sport: 'Cricket',
  series: 'All',
  match: 'All'
})

const data = ref([
  {
    marketId: '34320359_2501',
    matchName: 'South Africa v Australia',
    matchDate: '2025-06-11T09:30:00.000Z',
    runnerName: 'SA Will Win the Toss(SA vs AUS)adv',
    status: 'Active'
  },
  {
    marketId: '34320359_2502',
    matchName: 'South Africa v Australia',
    matchDate: '2025-06-11T09:30:00.000Z',
    runnerName: 'AUS Will Win the Toss(SA vs AUS)adv',
    status: 'Active'
  },
  {
    marketId: '34400594_2501',
    matchName: 'Lyca Kovai Kings v Madurai Panthers',
    matchDate: '2025-06-11T13:45:00.000Z',
    runnerName: 'LKK Will Win the Toss(LKK vs MP)adv',
    status: 'Active'
  },
  {
    marketId: '34400594_2502',
    matchName: 'Lyca Kovai Kings v Madurai Panthers',
    matchDate: '2025-06-11T13:45:00.000Z',
    runnerName: 'MP Will Win the Toss(LKK vs MP)adv',
    status: 'Active'
  }
])

const currentPage = ref(1)
const perPage = 2

const startIndex = computed(() => (currentPage.value - 1) * perPage)
const endIndex = computed(() => Math.min(startIndex.value + perPage, data.value.length))

const paginatedData = computed(() => {
  return data.value.slice(startIndex.value, endIndex.value)
})

function nextPage() {
  if (endIndex.value < data.value.length) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}
</script>

<style scoped>
.table-input {
  width: 100%;
}
</style>
