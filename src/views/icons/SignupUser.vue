<template>
    <div>
        <h5 class="fw-bold">SIGNUP USER LIST</h5>
        <CCard class="p-2 charts-card">
            <!-- Filters -->
            <div class="d-flex gap-2 mb-3">
                <div>
                    <CFormInput v-model="search" size="sm" style="width: 200px" placeholder="Search By User Name" />
                </div>
                <div>
                    <CFormInput type="date" v-model="fromDate" size="sm" style="width: 120px" placeholder="From Date" />
                </div>
                <div>
                    <CButton color="dark" size="sm" @click="loadData">Load</CButton>
                </div>
            </div>

            <!-- CSV Export -->
            <div class="mb-3">
                <CButton color="dark" size="sm" @click="downloadCSV">Download CSV</CButton>
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

            <!-- User Table -->
            <CTable hover responsive bordered>
                <CTableHead class="table-header">
                    <CTableRow>
                        <CTableHeaderCell>S.No</CTableHeaderCell>
                        <CTableHeaderCell>User Name</CTableHeaderCell>
                        <CTableHeaderCell>Full Name</CTableHeaderCell>
                        <CTableHeaderCell>Mobile</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody class="table-body">
                    <CTableRow v-for="(user, index) in filteredUsers" :key="index">
                        <CTableDataCell>{{ index + 1 }}</CTableDataCell>
                        <CTableDataCell>{{ user.username }}</CTableDataCell>
                        <CTableDataCell>{{ user.name }}</CTableDataCell>
                        <CTableDataCell>{{ user.mobile }}</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </CCard>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Sample data
const users = ref([
    { username: 'john_doe', name: 'John Doe', mobile: '9999999999' },
    { username: 'jane_smith', name: 'Jane Smith', mobile: '8888888888' },
    { username: 'raj_kumar', name: 'Raj Kumar', mobile: '7777777777' },
    { username: 'priya_rani', name: 'Priya Rani', mobile: '6666666666' },
    { username: 'rahul_dev', name: 'Rahul Dev', mobile: '5555555555' },
])

// Controls
const entries = ref(50)
const search = ref('')
const fromDate = ref('')

// Filtering logic
const filteredUsers = computed(() => {
    let result = users.value

    if (search.value) {
        result = result.filter(user =>
            user.username.toLowerCase().includes(search.value.toLowerCase())
        )
    }

    return result.slice(0, parseInt(entries.value))
})

// CSV Download Function
const downloadCSV = () => {
    const headers = ['S.No', 'Username', 'Name', 'Mobile']
    const rows = filteredUsers.value.map((user, idx) => [
        idx + 1,
        user.username,
        user.name,
        user.mobile,
    ])

    let csvContent =
        'data:text/csv;charset=utf-8,' +
        [headers, ...rows].map(e => e.join(',')).join('\n')

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'signup_users.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

// Dummy loader
const loadData = () => {
    // Replace with actual API call if needed
    console.log('Loading user data...')
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
</style>
