<template>
  <div>
    <h5 class="fw-bold">OUR CASINO RESULT</h5>
    <CCard class="p-2 charts-card">
      <!-- Filters -->
      <div class="d-flex gap-2 mb-3">
        <CFormInput type="date" v-model="fromDate" size="sm" style="width: 120px" />

        <CFormSelect v-model="transactionSearch" size="sm" style="width: 200px">
          <option disabled value="">Select Transaction Code</option>
          <option value="TXN001">TXN001</option>
          <option value="TXN002">TXN002</option>
          <option value="TXN003">TXN003</option>
          <option value="TXN004">TXN004</option>
        </CFormSelect>

        <div class="d-flex gap-2 align-items-end">
          <CButton color="dark" size="sm" @click="loadData">Load</CButton>
          <CButton color="light" size="sm" @click="resetData">Reset</CButton>
          <CButton color="success" class="icon-btn">
            <i class="fas fa-file-excel fa-sm text-white"></i>
          </CButton>
          <CButton color="danger" class="icon-btn">
            <i class="fas fa-file-pdf fa-sm text-white"></i>
          </CButton>
        </div>
      </div>

      <!-- Search and Pagination Top -->
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div>
          Show
          <select v-model="entries" class="form-select d-inline-block w-auto ms-2 me-2">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          entries
        </div>
        <input type="text" v-model="search" class="form-control w-auto" placeholder="Search Market ID..." />
      </div>

      <!-- Table -->
      <CTable hover responsive bordered>
        <CTableHead class="table-header">
          <CTableRow>
            <CTableHeaderCell>Market Id</CTableHeaderCell>
            <CTableHeaderCell>Winner</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody class="table-body">
          <CTableRow v-for="(user, index) in paginatedUsers" :key="index">
            <CTableDataCell>{{ user.market_id }}</CTableDataCell>
            <CTableDataCell>{{ user.name }}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      <!-- Pagination -->
      <div class="d-flex justify-content-end mt-3">
        <nav>
          <ul class="pagination pagination-sm">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="currentPage--">Previous</a>
            </li>
            <li
              class="page-item"
              v-for="page in totalPages"
              :key="page"
              :class="{ active: currentPage === page }"
            >
              <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" @click.prevent="currentPage++">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </CCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const fromDate = ref('')
const entries = ref(10)
const search = ref('')
const transactionSearch = ref('')
const currentPage = ref(1)

const users = ref([
  { market_id: '102250614000005', name: 'A', transaction_code: 'TXN001' },
  { market_id: '102250614000106', name: 'B', transaction_code: 'TXN002' },
  { market_id: '102250614000208', name: 'C', transaction_code: 'TXN003' },
  { market_id: '102250614000308', name: 'D', transaction_code: 'TXN004' },
  { market_id: '102250614000408', name: 'E', transaction_code: 'TXN001' },
  { market_id: '102250614000508', name: 'F', transaction_code: 'TXN002' },
  { market_id: '102250614000608', name: 'G', transaction_code: 'TXN003' },
  { market_id: '102250614000708', name: 'H', transaction_code: 'TXN004' },
  { market_id: '102250614000808', name: 'I', transaction_code: 'TXN001' },
])

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    return (
      (!search.value || user.market_id.toLowerCase().includes(search.value.toLowerCase())) &&
      (!transactionSearch.value || user.transaction_code === transactionSearch.value)
    )
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredUsers.value.length / entries.value)
})

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * entries.value
  const end = start + parseInt(entries.value)
  return filteredUsers.value.slice(start, end)
})

const loadData = () => {
  console.log('Loading data...')
}

const resetData = () => {
  search.value = ''
  transactionSearch.value = ''
  currentPage.value = 1
}
</script>

<style scoped>
::v-deep(.form-control:focus) {
  border-color: #ced4da !important;
  box-shadow: none !important;
  outline: none !important;
}

.charts-card {
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border: none !important;
}

.table-header {
  font-size: 12px;
  font-weight: 600;
}

.table-body {
  font-size: 12px;
  color: rgb(95, 88, 88);
}

.icon-btn {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
