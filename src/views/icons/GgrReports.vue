<template>
    <div>
        <h5 class="fw-bold">GGR Report</h5>
        <CCard class="p-2 charts-card">
            <div class="mb-4">
                <div class="mb-2">
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
                     <CButton color="success"
                        style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-file-excel fa-sm text-white"></i>
                    </CButton>
                     <CButton color="success"
                        style="width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-file-excel fa-sm text-white"></i>
                    </CButton>
                </div>
            </div>

            <!-- Table -->
            <CTable hover responsive bordered>
                <CTableHead class="table-header">
                    <CTableRow>
                        <CTableHeaderCell>Sport Name</CTableHeaderCell>
                        <CTableHeaderCell>Stack</CTableHeaderCell>
                        <CTableHeaderCell>Loss</CTableHeaderCell>
                        <CTableHeaderCell>Profit</CTableHeaderCell>
                        <CTableHeaderCell>GGR 100</CTableHeaderCell>
                        <CTableHeaderCell>Customer GGR %</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody class="table-body">
                    <CTableRow v-for="(bet, index) in bets" :key="index">
                        <CTableDataCell>{{ bet.sport_name }}</CTableDataCell>
                        <CTableDataCell class="text-success">{{ bet.stack }}</CTableDataCell>
                        <CTableDataCell class="text-success">{{ bet.loss }}</CTableDataCell>
                        <CTableDataCell class="text-danger">{{ bet.profit }}</CTableDataCell>
                        <CTableDataCell class="text-danger">{{ bet.ggr }}</CTableDataCell>
                        <CTableDataCell>{{ bet.customer_ggr }}</CTableDataCell>
                        <CTableDataCell class="d-flex gap-2 align-items-center">
                            <CFormInput v-model="inputValue" type="number" size="sm" style="width: 200px"
                                placeholder="Select option" value="0" aria-label="Small select example custom-select" />
                            <CButton color="dark" size="sm" @click="submitValue">Submit</CButton>
                        </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </CCard>
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
        sport_name: 'Sport',
        stack: '1800',
        loss: '0',
        profit: '-27',
        ggr: '-27',
        customer_ggr: '0',
    },
    {
        sport_name: 'Sport',
        stack: '1800',
        loss: '0',
        profit: '-27',
        ggr: '-27',
        customer_ggr: '0',
    },
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
