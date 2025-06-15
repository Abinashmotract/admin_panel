<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="fw-bold">USER AUTHENTICATION</h5>
      <h5 class="text-subtitle-2 fw-bold text-grey-darken-2">Home / USER AUTHENTICATION</h5>
    </div>

    <CCard class="p-1 charts-card">
      <div>
        <div class="d-flex gap-3 mb-1 justify-content-start">
          <div class="d-flex gap-2 align-items-center my-2">
            <CButton color="success"
              style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
              <i class="fas fa-file-excel fa-sm text-white"></i>
            </CButton>
            <CButton color="danger"
              style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
              <i class="fas fa-file-pdf fa-sm text-white"></i>
            </CButton>
          </div>
        </div>

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
          <input type="text" v-model="search" class="form-control w-auto" placeholder="Search..." />
        </div>

        <EasyDataTable
          :headers="headers"
          :items="filteredBets"
          :sort-by="sortBy"
          :sort-type="sortType"
          @update:sort-by="sortBy = $event"
          @update:sort-type="sortType = $event"
        />
      </div>
    </CCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

const entries = ref(10)
const search = ref('')
const sortBy = ref('date')
const sortType = ref('desc')

const headers = [
  { text: 'User Name', value: 'userName', sortable: true },
  { text: 'Authentication Time', value: 'date', sortable: true }
]

const bets = ref([
  { userName: 'wsuper3', date: '2025-06-14 15:25:50' },
  { userName: 'testuser1', date: '2025-06-13 13:10:20' }
])

// Filter items based on search
const filteredBets = computed(() => {
  if (!search.value) return bets.value
  const lowerSearch = search.value.toLowerCase()
  return bets.value.filter(
    item =>
      item.userName.toLowerCase().includes(lowerSearch) ||
      item.date.toLowerCase().includes(lowerSearch)
  )
})
</script>

<style scoped>
.charts-card {
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border: none !important;
}
</style>
