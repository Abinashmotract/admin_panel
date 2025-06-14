<template>
    <div class="">
        <h5 class="fw-bold">GGR Report</h5>
        <CNav variant="tabs" class="mb-3">
            <CNavLink :active="activeTab === 'loginhistory'" @click="activeTab = 'loginhistory'" role="button">
                Login History
            </CNavLink>
            <CNavLink :active="activeTab === 'changepasswordhistry'" @click="activeTab = 'changepasswordhistry'"
                role="button">
                Change Password History
            </CNavLink>
        </CNav>
        <div v-if="activeTab === 'loginhistory'">
            <div class="d-flex gap-4 mb-4">
                <div>
                    <CFormInput size="sm" class="" style="width: 200px" aria-label="Small select example custom-select"
                        placeholder="select option">
                        <option>All</option>
                    </CFormInput>
                </div>
                <div>
                    <VMenu v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
                        max-width="auto">
                        <template #activator="{ props }">
                            <CFormInput v-bind="props" :model-value="formattedDateRange" readonly density="compact"
                                style="width: 240px" hide-details placeholder="07/06/2025 - 14/06/2025" />
                        </template>

                        <VDatePicker v-model="dateRange" range show-adjacent-months color="primary" hide-header="false"
                            multiple-months />
                    </VMenu>

                </div>
                <div class="d-flex gap-2 align-items-end">
                    <CButton color="dark" size="sm" @click="loadData">Load</CButton>
                    <CButton color="light" size="sm" @click="resetData">Reset</CButton>
                    <CButton color="light" size="sm" @click="downloadPdf">Pdf</CButton>
                    <CButton color="light" size="sm" @click="downloadPdf">Pdf</CButton>
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
                <CTableHead class="table-header">
                    <CTableRow>
                        <CTableHeaderCell>User Name</CTableHeaderCell>
                        <CTableHeaderCell>Date</CTableHeaderCell>
                        <CTableHeaderCell>IP</CTableHeaderCell>
                        <CTableHeaderCell>Details</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody class="table-body">
                    <CTableRow v-for="(bet, index) in filteredBets" :key="index">
                        <CTableDataCell>{{ bet.userName }}</CTableDataCell>
                        <CTableDataCell>{{ bet.date }}</CTableDataCell>
                        <CTableDataCell>{{ bet.ip }}</CTableDataCell>
                        <CTableDataCell>{{ bet.details }}</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
        <div v-if="activeTab === 'changepasswordhistry'">
            <div>
                <!-- Filters Row -->
                <div class="d-flex gap-4 mb-4">
                    <div>
                        <CFormInput size="sm" class="" style="width: 200px"
                            aria-label="Small select example custom-select" placeholder="select option">
                            <option>All</option>
                        </CFormInput>
                    </div>
                    <div>
                        <VMenu v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
                            max-width="auto">
                            <template #activator="{ props }">
                                <CFormInput v-bind="props" :model-value="formattedDateRange" readonly density="compact"
                                    style="width: 240px" hide-details placeholder="07/06/2025 - 14/06/2025" />
                            </template>

                            <VDatePicker v-model="dateRange" range show-adjacent-months color="primary"
                                hide-header="false" multiple-months />
                        </VMenu>

                    </div>
                    <div class="d-flex gap-2 align-items-end">
                        <CButton color="dark" size="sm" @click="loadData">Load</CButton>
                        <CButton color="light" size="sm" @click="resetData">Reset</CButton>
                        <CButton color="light" size="sm" @click="downloadPdf">Pdf</CButton>
                        <CButton color="light" size="sm" @click="downloadPdf">Pdf</CButton>
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
                    <CTableHead class="table-header">
                        <CTableRow>
                            <CTableHeaderCell>User Name</CTableHeaderCell>
                            <CTableHeaderCell>Date</CTableHeaderCell>
                            <CTableHeaderCell>IP</CTableHeaderCell>
                            <CTableHeaderCell>Details</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody class="table-body">
                        <CTableRow v-for="(bet, index) in filteredBets" :key="index">
                            <CTableDataCell>{{ bet.userName }}</CTableDataCell>
                            <CTableDataCell>{{ bet.date }}</CTableDataCell>
                            <CTableDataCell>{{ bet.ip }}</CTableDataCell>
                            <CTableDataCell>{{ bet.details }}</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('loginhistory')

const filter = ref('matched')
const backlay = ref('all')
const entries = ref(50)
const search = ref('')

const bets = ref([
    {
        userName: 'wsuper3',
        date: '2025-06-14 15:25:50',
        ip: '2409.40e3:3e:437a24ca19668c8:4c47',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-14 14:48:17',
        ip: '2405.20b6004:9bf5aca37ce8:620f5cd5',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-14 12:19:46',
        ip: '2409.40e9:858ecac55:5026f6eb163ace21',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-12 22:15:29',
        ip: '2409.40e3:6e:6d5c:46e1ga2c2ac1c12a',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-12 14:09:37',
        ip: '2402.26f7d6cc:4000:1000:c',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-10 21:25:56',
        ip: '2409.40e3:6e:6d5c:2667:8ef4:72f5:4753',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-10 21:24:15',
        ip: '2409.40f5:30d:9de97daq:96clfd7fe5a',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-10 21:22:35',
        ip: '2409.40e3:6e:6d5c:2667:8ef4:72f5:4753',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-10 21:22:27',
        ip: '2409.40f5:30d:9de97daq:96clfd7fe5a',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-10 21:22:18',
        ip: '2409.40e3:6e:6d5c:2667:8ef4:72f5:4753',
        details: 'Detail',
    },
    {
        userName: 'wsuper3',
        date: '2025-06-10 21:22:12',
        ip: '2409.40f5:30d:9de97daq:96clfd7fe5a',
        details: 'Detail',
    }
])
const dateRange = ref({ start: null, end: null })

// Format date as DD/MM/YYYY
const formattedDateRange = computed(() => {
    if (!dateRange.value.start || !dateRange.value.end) return ''
    const start = new Date(dateRange.value.start).toLocaleDateString('en-GB')
    const end = new Date(dateRange.value.end).toLocaleDateString('en-GB')
    return `${start} - ${end}`
})

const menu = ref(false)
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

.table-header {
    font-size: 12px;
    font-weight: 600;
}

.table-body {
    font-size: 12px;
    color: rgb(95, 88, 88);
}
</style>
