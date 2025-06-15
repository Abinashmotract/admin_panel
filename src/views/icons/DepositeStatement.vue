<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="fw-bold">Deposit Statement</h5>
            <h5 class="text-subtitle-2 fw-bold text-grey-darken-2">Home / Deposit Statement</h5>
        </div>

        <CCard class="p-1 charts-card">
            <div>
                <div class="d-flex gap-3 mb-1">
                    <div>
                        <label class="form-label text-body-2 mb-0">Status</label>
                        <CFormSelect v-model="transactionSearch" size="sm" style="width: 200px">
                            <option value="">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Processing">Processing</option>
                            <option value="Failed">Failed</option>
                        </CFormSelect>
                    </div>
                    <div>
                        <label class="form-label text-body-2 mb-0">From Date:</label>
                        <CFormInput type="date" v-model="fromDate" size="sm" style="width: 120px" />
                    </div>
                    <div>
                        <label class="form-label text-body-2 mb-0">To Date:</label>
                        <CFormInput type="date" v-model="toDate" size="sm" style="width: 120px" />
                    </div>
                    <div class="d-flex gap-2 align-items-center my-4">
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
                </div>
                <EasyDataTable :headers="headers" :items="bets" :sort-by="sortBy" :sort-type="sortType"
                    @update:sort-by="sortBy = $event" @update:sort-type="sortType = $event" />
            </div>
        </CCard>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

const fromDate = ref('')
const toDate = ref('')
const transactionSearch = ref('')
const entries = ref(10)

const sortBy = ref('date')
const sortType = ref('desc')

const headers = [
    { text: 'User Name', value: 'userName', sortable: true },
    { text: 'Date Time', value: 'date', sortable: true },
    { text: 'Account Number', value: 'accountNumber', sortable: true },
    { text: 'Bank Name', value: 'bankName', sortable: true },
    { text: 'Phone', value: 'phone', sortable: true },
    { text: 'Amount', value: 'amount', sortable: true },
    { text: 'Transaction Id', value: 'transactionId', sortable: true },
    { text: 'Image', value: 'image', sortable: false },
    { text: 'Status', value: 'status', sortable: true },
    { text: 'Action', value: 'action', sortable: false }
]

const bets = ref([
    {
        userName: 'wsuper3',
        date: '2025-06-14 15:25:50',
        accountNumber: '1234567890',
        bankName: 'SBI',
        phone: '9876543210',
        amount: 150,
        transactionId: 'TXN001',
        image: '', // Placeholder; ideally a URL to image or path
        status: 'Pending',
        action: 'View'
    },
    {
        userName: 'testuser1',
        date: '2025-06-13 13:10:20',
        accountNumber: '0987654321',
        bankName: 'HDFC',
        phone: '9123456780',
        amount: 100,
        transactionId: 'TXN002',
        image: '',
        status: 'Completed',
        action: 'View'
    }
])

const loadData = () => {
    console.log('Loading data...')
}

const resetData = () => {
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
</style>
