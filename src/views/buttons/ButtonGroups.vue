<template>
  <div class="p-4">
    <h5 class="fw-bold mb-3">BONUS HISTORY</h5>

    <CCard class="p-4">
      <!-- Date Range + Buttons -->
      <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
        <div>
          <CDateRangePicker label="Date range" locale="en-US" v-model:start-date="vStartDate"
            v-model:end-date="vEndDate" />
        </div>
        <div class="d-flex gap-2 align-items-end">
          <CButton color="dark" @click="loadData">Load</CButton>
          <CButton color="light" @click="resetData">Reset</CButton>
        </div>
      </div>

      <!-- Show Entries + Search -->
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

      <!-- Bonus Table -->
      <CTable hover bordered align="middle">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>S.No</CTableHeaderCell>
            <CTableHeaderCell>Amount</CTableHeaderCell>
            <CTableHeaderCell>User Name</CTableHeaderCell>
            <CTableHeaderCell>Description</CTableHeaderCell>
            <CTableHeaderCell>Created Date</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(bonus, index) in filteredBonuses" :key="index">
            <CTableDataCell>{{ index + 1 }}</CTableDataCell>
            <CTableDataCell>{{ bonus.amount }}</CTableDataCell>
            <CTableDataCell class="text-uppercase">{{ bonus.type }}</CTableDataCell>
            <CTableDataCell class="text-success fw-semibold">{{ bonus.name }}</CTableDataCell>
            <CTableDataCell>{{ bonus.date }}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const vStartDate = ref('')
const vEndDate = ref('')
const search = ref('')
const entries = ref(50)

const bonuses = ref([
  {
    name: 'referal',
    amount: 500,
    type: 'FIXED AMOUNT',
    date: '2025-01-30 02:07:10',
  },
  {
    name: 'signup',
    amount: 500,
    type: 'FIXED AMOUNT',
    date: '2025-01-30 02:08:01',
  },
])

const filteredBonuses = computed(() => {
  return bonuses.value
    .filter(bonus =>
      Object.values(bonus).some(val =>
        String(val).toLowerCase().includes(search.value.toLowerCase())
      )
    )
    .slice(0, entries.value)
})

function loadData() {
  console.log('Load triggered for date:', vStartDate.value, 'to', vEndDate.value)
  // add API call or other logic here
}

function resetData() {
  vStartDate.value = ''
  vEndDate.value = ''
  search.value = ''
  entries.value = 50
}
</script>


<style scoped>
input.form-control {
  max-width: 240px;
}
</style>
