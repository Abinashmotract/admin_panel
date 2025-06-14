<template>
    <div>
        <h5 class="fw-bold">USER HISTORY</h5>
        <CNav variant="tabs" class="mb-3">
            <CNavLink :active="activeTab === 'settledbets'" @click="activeTab = 'settledbets'" role="button">
                Settled Bets
            </CNavLink>
            <CNavLink :active="activeTab === 'unsettledbets'" @click="activeTab = 'unsettledbets'" role="button">
                Un Settled Bets
            </CNavLink>
        </CNav>

        <div v-if="activeTab === 'settledbets'">
            <div class="d-flex gap-3 mb-4">
                <CFormInput type="date" v-model="fromDate" size="sm" style="width: 120px" placeholder="From Date" />
                <CFormInput type="date" v-model="toDate" size="sm" style="width: 120px" placeholder="To Date" />
                <CFormSelect v-model="transactionSearch" size="sm" style="width: 200px">
                    <option value="TXN001">Select</option>
                    <option value="TXN002">Slotgater</option>
                </CFormSelect>
                <div class="d-flex gap-2 align-items-end">
                    <CButton color="dark" size="sm" @click="loadData">Load</CButton>
                    <CButton color="light" size="sm" @click="resetData">Reset</CButton>
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

            <CTable hover responsive bordered>
                <CTableHead class="table-header">
                    <CTableRow>
                        <CTableHeaderCell>User Name</CTableHeaderCell>
                        <CTableHeaderCell>Game Name</CTableHeaderCell>
                        <CTableHeaderCell>Type</CTableHeaderCell>
                        <CTableHeaderCell>Amount</CTableHeaderCell>
                        <CTableHeaderCell>Total</CTableHeaderCell>
                        <CTableHeaderCell>Date</CTableHeaderCell>
                        <CTableHeaderCell>Round Id</CTableHeaderCell>
                        <CTableHeaderCell>Transaction Id</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody class="table-body">
                    <CTableRow v-for="(bet, index) in filteredBets" :key="index">
                        <CTableDataCell>{{ bet.userName }}</CTableDataCell>
                        <CTableDataCell>{{ bet.gameName }}</CTableDataCell>
                        <CTableDataCell>{{ bet.type }}</CTableDataCell>
                        <CTableDataCell>{{ bet.amount }}</CTableDataCell>
                        <CTableDataCell>{{ bet.total }}</CTableDataCell>
                        <CTableDataCell>{{ bet.date }}</CTableDataCell>
                        <CTableDataCell>{{ bet.roundId }}</CTableDataCell>
                        <CTableDataCell>{{ bet.transactionId }}</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>

        <div v-if="activeTab === 'unsettledbets'">
            <div class="d-flex gap-3 mb-4">
                <CFormInput type="date" v-model="fromDate" size="sm" style="width: 120px" placeholder="From Date" />
                <CFormInput type="date" v-model="toDate" size="sm" style="width: 120px" placeholder="To Date" />
                <CFormSelect v-model="transactionSearch" size="sm" style="width: 200px">
                    <option value="TXN001">Select</option>
                    <option value="TXN002">Slotgater</option>
                </CFormSelect>
                <div class="d-flex gap-2 align-items-end">
                    <CButton color="dark" size="sm" @click="loadData">Load</CButton>
                    <CButton color="light" size="sm" @click="resetData">Reset</CButton>
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

             <CTable hover responsive bordered>
                <CTableHead class="table-header">
                    <CTableRow>
                        <CTableHeaderCell>User Name</CTableHeaderCell>
                        <CTableHeaderCell>Game Name</CTableHeaderCell>
                        <CTableHeaderCell>Type</CTableHeaderCell>
                        <CTableHeaderCell>Amount</CTableHeaderCell>
                        <CTableHeaderCell>Total</CTableHeaderCell>
                        <CTableHeaderCell>Date</CTableHeaderCell>
                        <CTableHeaderCell>Round Id</CTableHeaderCell>
                        <CTableHeaderCell>Transaction Id</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody class="table-body">
                    <CTableRow v-for="(bet, index) in filteredBets" :key="index">
                        <CTableDataCell>{{ bet.userName }}</CTableDataCell>
                        <CTableDataCell>{{ bet.gameName }}</CTableDataCell>
                        <CTableDataCell>{{ bet.type }}</CTableDataCell>
                        <CTableDataCell>{{ bet.amount }}</CTableDataCell>
                        <CTableDataCell>{{ bet.total }}</CTableDataCell>
                        <CTableDataCell>{{ bet.date }}</CTableDataCell>
                        <CTableDataCell>{{ bet.roundId }}</CTableDataCell>
                        <CTableDataCell>{{ bet.transactionId }}</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('settledbets')
const entries = ref(50)
const search = ref('')
const fromDate = ref('')
const toDate = ref('')
const transactionSearch = ref('')
const menu = ref(false)
const dateRange = ref({ start: null, end: null })

const bets = ref([
    {
        userName: 'wsuper3',
        gameName: 'SlotGator',
        type: 'Win',
        amount: 150,
        total: 200,
        date: '2025-06-14 15:25:50',
        roundId: 'RND123456',
        transactionId: 'TXN001',
    },
    {
        userName: 'testuser1',
        gameName: 'Roulette',
        type: 'Lose',
        amount: 100,
        total: 0,
        date: '2025-06-13 13:10:20',
        roundId: 'RND654321',
        transactionId: 'TXN002',
    },
])

const formattedDateRange = computed(() => {
    if (!dateRange.value.start || !dateRange.value.end) return ''
    const start = new Date(dateRange.value.start).toLocaleDateString('en-GB')
    const end = new Date(dateRange.value.end).toLocaleDateString('en-GB')
    return `${start} - ${end}`
})

const filteredBets = computed(() => {
    return bets.value.filter((bet) => {
        return bet.userName.toLowerCase().includes(search.value.toLowerCase())
    })
})

const loadData = () => {
    console.log('Loading data...')
}

const resetData = () => {
    search.value = ''
    fromDate.value = ''
    toDate.value = ''
    transactionSearch.value = ''
    dateRange.value = { start: null, end: null }
}
</script>

<style scoped>
.table-header {
    font-size: 12px;
    font-weight: 600;
}

.table-body {
    font-size: 12px;
    color: rgb(95, 88, 88);
}
</style>
