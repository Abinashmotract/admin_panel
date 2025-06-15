<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="fw-bold">TURNOVER REPORT</h5>
            <h5 class="text-subtitle-2 fw-bold text-grey-darken-2">Home / TURNOVER REPORT</h5>
        </div>
        <CCard class="p-1 charts-card">
            <v-alert text="You will be able to see the data of last 7 days only." variant="tonal"
                class="alert-info mb-3"></v-alert>

            <div>
                <div class="d-flex gap-3 mb-3">
                    <div>
                        <label class="form-label text-body-2 mb-0">Search By Client Name</label>
                        <CFormInput v-model="search" size="sm" style="width: 200px" placeholder="Enter client name" />
                    </div>

                    <div>
                        <label class="form-label text-body-2 mb-0">From Date:</label>
                        <CFormInput type="date" v-model="fromDate" size="sm" style="width: 120px" />
                    </div>

                    <div>
                        <label class="form-label text-body-2 mb-0">To Date:</label>
                        <CFormInput type="date" v-model="toDate" size="sm" style="width: 120px" />
                    </div>

                    <div>
                        <label class="form-label text-body-2 mb-0">Type</label>
                        <CFormSelect v-model="transactionSearch" size="sm" style="width: 200px">
                            <option value="">Select Type</option>
                            <option value="Sport">Sport</option>
                            <option value="Casino">Casino</option>
                            <option value="Third Party Casino">Third Party Casino</option>
                        </CFormSelect>
                    </div>
                </div>

                <div class="d-flex gap-2 align-items-center mb-3">
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

                <EasyDataTable :headers="headers" :items="bets" :sort-by="sortBy" :sort-type="sortType"
                    @update:sort-by="sortBy = $event" @update:sort-type="sortType = $event" />
            </div>
        </CCard>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

const search = ref('')
const fromDate = ref('')
const toDate = ref('')
const transactionSearch = ref('')

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

const sortBy = ref('date')
const sortType = ref('desc')

const headers = [
    { text: 'User Name', value: 'userName', sortable: true },
    { text: 'Game Name', value: 'gameName', sortable: true },
    { text: 'Type', value: 'type', sortable: true },
    { text: 'Amount', value: 'amount', sortable: true },
    { text: 'Total', value: 'total', sortable: true },
    { text: 'Date', value: 'date', sortable: true },
    { text: 'Round Id', value: 'roundId', sortable: true },
    { text: 'Transaction Id', value: 'transactionId', sortable: true },
]

const loadData = () => {
    console.log('Loading data...')
}

const resetData = () => {
    search.value = ''
    fromDate.value = ''
    toDate.value = ''
    transactionSearch.value = ''
}
</script>

<style scoped>
.charts-card {
    box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
    border: none !important;
}

.table-header {
    font-size: 12px;
    font-weight: 600;
}

.alert-info {
    color: #306391;
    background-color: #dcedfc;
    border-color: #cbe4fb;
}

.table-body {
    font-size: 12px;
    color: rgb(95, 88, 88);
}
</style>
