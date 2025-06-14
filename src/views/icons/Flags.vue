<template>
  <div class="">
    <h5 class="fw-bold">CURRENT BETS</h5>
    <CNav variant="tabs" class="mb-3">
      <CNavLink :active="activeTab === 'sport'" @click="activeTab = 'sport'" role="button">
        Sport
      </CNavLink>
      <CNavLink :active="activeTab === 'casino'" @click="activeTab = 'casino'" role="button">
        Casino
      </CNavLink>
    </CNav>
    <div v-if="activeTab === 'sport'">
      <!-- Filters Row -->
      <div class="d-flex flex-wrap align-items-center gap-3 mb-3">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="matched" value="matched" v-model="filter" />
          <label class="form-check-label fw-semibold text-purple" for="matched">Matched</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="deleted" value="deleted" v-model="filter" />
          <label class="form-check-label" for="deleted">Deleted</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="all" value="all" v-model="backlay" />
          <label class="form-check-label fw-semibold text-purple" for="all">All</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="back" value="back" v-model="backlay" />
          <label class="form-check-label" for="back">Back</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="lay" value="lay" v-model="backlay" />
          <label class="form-check-label" for="lay">Lay</label>
        </div>

        <!-- <CButton color="dark">Load</CButton>
        <CButton color="success"><i class="bi bi-file-earmark-excel"></i></CButton>
        <CButton color="danger"><i class="bi bi-file-earmark-pdf"></i></CButton> -->
        <div class="d-flex gap-2 align-items-end">
          <CButton color="dark" size="sm" @click="loadData">Load</CButton>
          <CButton color="light" size="sm" @click="resetData">Reset</CButton>
           <CButton color="success"
                        style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-file-excel fa-sm text-white"></i>
                    </CButton>
           <CButton color="success"
                        style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-file-excel fa-sm text-white"></i>
                    </CButton>
        </div>

        <div class="ms-auto">
          <strong>Total Soda:</strong> 0 &nbsp;&nbsp; <strong>Total Amount:</strong> 0
        </div>
      </div>

      <!-- Table Tools -->
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div>
          Show
          <select v-model="entries" class="form-select d-inline-block w-auto ms-2 me-2">
            <option>10</option>
            <option>25</option>
            <option selected>50</option>
            <option>100</option>
          </select>
          entries
        </div>
        <input type="text" v-model="search" class="form-control w-auto" placeholder="Search..." />
      </div>

      <!-- Table -->
      <CTable hover responsive bordered>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Event Type</CTableHeaderCell>
            <CTableHeaderCell>Event Name</CTableHeaderCell>
            <CTableHeaderCell>User Name</CTableHeaderCell>
            <CTableHeaderCell>M Name</CTableHeaderCell>
            <CTableHeaderCell>Nation</CTableHeaderCell>
            <CTableHeaderCell>U Rate</CTableHeaderCell>
            <CTableHeaderCell>Amount</CTableHeaderCell>
            <CTableHeaderCell>Place Date</CTableHeaderCell>
            <CTableHeaderCell>IP</CTableHeaderCell>
            <CTableHeaderCell>Browser</CTableHeaderCell>
            <CTableHeaderCell>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(bet, index) in filteredBets" :key="index">
            <CTableDataCell>{{ bet.eventType }}</CTableDataCell>
            <CTableDataCell>{{ bet.eventName }}</CTableDataCell>
            <CTableDataCell>{{ bet.userName }}</CTableDataCell>
            <CTableDataCell>{{ bet.mName }}</CTableDataCell>
            <CTableDataCell>{{ bet.nation }}</CTableDataCell>
            <CTableDataCell>{{ bet.uRate }}</CTableDataCell>
            <CTableDataCell>{{ bet.amount }}</CTableDataCell>
            <CTableDataCell>{{ bet.placeDate }}</CTableDataCell>
            <CTableDataCell>{{ bet.ip }}</CTableDataCell>
            <CTableDataCell>{{ bet.browser }}</CTableDataCell>
            <CTableDataCell>
              <CButton color="danger" size="sm">Cancel</CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
    <div v-if="activeTab === 'casino'">
      <div>
        <!-- Filters Row -->
        <div class="d-flex justify-content-between align-items-center gap-3">
          <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="matched" value="matched" v-model="filter" />
              <label class="form-check-label fw-semibold text-purple" for="matched">Matched</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="deleted" value="deleted" v-model="filter" />
              <label class="form-check-label" for="deleted">Deleted</label>
            </div>
          </div>
          <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="all" value="all" v-model="backlay" />
              <label class="form-check-label fw-semibold text-purple" for="all">All</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="back" value="back" v-model="backlay" />
              <label class="form-check-label" for="back">Back</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="lay" value="lay" v-model="backlay" />
              <label class="form-check-label" for="lay">Lay</label>
            </div>

            <CButton color="dark">Load</CButton>
            <CButton color="success"><i class="bi bi-file-earmark-excel"></i></CButton>
            <CButton color="danger"><i class="bi bi-file-earmark-pdf"></i></CButton>
          </div>
          <div class="ms-auto">
            <strong>Total Soda:</strong> 0 &nbsp;&nbsp; <strong>Total Amount:</strong> 0
          </div>
        </div>

        <!-- Table Tools -->
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            Show
            <select v-model="entries" class="form-select d-inline-block w-auto ms-2 me-2">
              <option>10</option>
              <option>25</option>
              <option selected>50</option>
              <option>100</option>
            </select>
            entries
          </div>
          <input type="text" v-model="search" class="form-control w-auto" placeholder="Search..." />
        </div>

        <!-- Table -->
        <CTable hover responsive bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Event Type</CTableHeaderCell>
              <CTableHeaderCell>Event Name</CTableHeaderCell>
              <CTableHeaderCell>User Name</CTableHeaderCell>
              <CTableHeaderCell>M Name</CTableHeaderCell>
              <CTableHeaderCell>Nation</CTableHeaderCell>
              <CTableHeaderCell>U Rate</CTableHeaderCell>
              <CTableHeaderCell>Amount</CTableHeaderCell>
              <CTableHeaderCell>Place Date</CTableHeaderCell>
              <CTableHeaderCell>IP</CTableHeaderCell>
              <CTableHeaderCell>Browser</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow v-for="(bet, index) in filteredBets" :key="index">
              <CTableDataCell>{{ bet.eventType }}</CTableDataCell>
              <CTableDataCell>{{ bet.eventName }}</CTableDataCell>
              <CTableDataCell>{{ bet.userName }}</CTableDataCell>
              <CTableDataCell>{{ bet.mName }}</CTableDataCell>
              <CTableDataCell>{{ bet.nation }}</CTableDataCell>
              <CTableDataCell>{{ bet.uRate }}</CTableDataCell>
              <CTableDataCell>{{ bet.amount }}</CTableDataCell>
              <CTableDataCell>{{ bet.placeDate }}</CTableDataCell>
              <CTableDataCell>{{ bet.ip }}</CTableDataCell>
              <CTableDataCell>{{ bet.browser }}</CTableDataCell>
              <CTableDataCell>
                <CButton color="danger" size="sm">Cancel</CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('sport')

const filter = ref('matched')
const backlay = ref('all')
const entries = ref(50)
const search = ref('')

const bets = ref([
  {
    eventType: 'Cricket',
    eventName: 'IPL 2025',
    userName: 'wsuper3',
    mName: 'CSK vs MI',
    nation: 'India',
    uRate: 1.95,
    amount: 1000,
    placeDate: '2025-06-12',
    ip: '192.168.1.1',
    browser: 'Chrome',
  },
  // Add more mock bets as needed
])

const filteredBets = computed(() => {
  return bets.value.filter((bet) => {
    return bet.userName.toLowerCase().includes(search.value.toLowerCase())
  })
})
</script>

<style scoped>
.text-purple {
  color: #6f42c1;
}
</style>
