<template>
    <div>
        <h5 class="fw-bold">General Lock</h5>
        <CCard class="p-2 charts-card">
            <!-- Filters -->
            <div class="d-flex gap-2 mb-3">
                <div>
                    <CFormInput v-model="search" size="sm" style="width: 200px" placeholder="Search By User Name" />
                </div>
                <div>
                    <CFormInput v-model="transactionSearch" size="sm" style="width: 200px"
                        placeholder="Transaction Code" />
                </div>
                <div class="d-flex gap-2 align-items-end">
                    <CButton color="dark" size="sm" @click="loadData">Load</CButton>
                    <CButton color="light" size="sm" @click="resetData">Reset</CButton>
                    <!-- <CButton color="success"
                        style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-file-excel fa-sm text-white"></i>
                    </CButton>

                    <CButton color="danger"
                        style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-file-pdf fa-sm text-white"></i>
                    </CButton> -->
                </div>
            </div>

            <!-- Table Tools -->
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

            <!-- Data Table -->
            <CTable hover responsive bordered>
                <CTableHead class="table-header">
                    <CTableRow>
                        <CTableHeaderCell>S.No</CTableHeaderCell>
                        <CTableHeaderCell>User Name</CTableHeaderCell>
                        <CTableHeaderCell>Full Name</CTableHeaderCell>
                        <CTableHeaderCell>Mobile</CTableHeaderCell>
                        <CTableHeaderCell>Transaction Code</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody class="table-body">
                    <CTableRow v-for="(user, index) in filteredUsers" :key="index">
                        <CTableDataCell>{{ index + 1 }}</CTableDataCell>
                        <CTableDataCell>{{ user.username }}</CTableDataCell>
                        <CTableDataCell>{{ user.name }}</CTableDataCell>
                        <CTableDataCell>{{ user.mobile }}</CTableDataCell>
                        <CTableDataCell>{{ user.transaction_code }}</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </CCard>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Sample Data
const users = ref([
    { username: 'john_doe', name: 'John Doe', mobile: '9999999999', transaction_code: 'TXN12345' },
    { username: 'jane_smith', name: 'Jane Smith', mobile: '8888888888', transaction_code: 'TXN54321' },
    { username: 'raj_kumar', name: 'Raj Kumar', mobile: '7777777777', transaction_code: 'TXN67890' },
    { username: 'priya_rani', name: 'Priya Rani', mobile: '6666666666', transaction_code: 'TXN98765' },
    { username: 'rahul_dev', name: 'Rahul Dev', mobile: '5555555555', transaction_code: 'TXN11111' },
])

// Controls
const entries = ref(50)
const search = ref('')
const transactionSearch = ref('')

// Computed Filter
const filteredUsers = computed(() => {
    return users.value
        .filter(user =>
            (!search.value || user.username.toLowerCase().includes(search.value.toLowerCase())) &&
            (!transactionSearch.value || user.transaction_code.toLowerCase().includes(transactionSearch.value.toLowerCase()))
        )
        .slice(0, parseInt(entries.value))
})

// Load function (dummy)
const loadData = () => {
    console.log('Loading data...')
}

// Reset filters
const resetData = () => {
    search.value = ''
    transactionSearch.value = ''
}
</script>

<style scoped>
::v-deep(.form-control:focus) {
    border-color: #ced4da !important;
    box-shadow: none !important;
    outline: none !important;
}

.pdf-1 {
    background-color: #34c38f;
    height: 20px;
    width: 20px;
    border-radius: 4px;
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
</style>
