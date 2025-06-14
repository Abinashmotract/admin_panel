<template>
    <div>
        <h5 class="fw-bold mb-3">MARKET ROLLBACK</h5>
        <CCard class="p-3 charts-card">
            <div class="d-flex gap-4">
                <div>
                    <h6 class="fw-bold mb-1">Sport Name</h6>
                    <CFormSelect size="sm" class="mb-3" style="width: 200px"
                        aria-label="Small select example custom-select">
                        <option>Open this select menu</option>
                        <option value="football">Football</option>
                        <option value="cricket">Cricket</option>
                        <option value="tennis">Tennis</option>
                    </CFormSelect>
                </div>
                <div>
                    <h6 class="fw-bold mb-1">Series Name</h6>
                    <CFormSelect size="sm" class="mb-3" style="width: 200px"
                        aria-label="Small select example custom-select">
                        <option>All</option>
                        <option value="india">India</option>
                        <option value="brazil">Brazil</option>
                        <option value="canada">Canada</option>
                    </CFormSelect>
                </div>
                <div>
                    <h6 class="fw-bold mb-1">Match Name</h6>
                    <CFormSelect size="sm" class="mb-3" style="width: 200px"
                        aria-label="Small select example custom-select">
                        <option>All</option>
                        <option value="india">India</option>
                        <option value="brazil">Brazil</option>
                        <option value="canada">Canada</option>
                    </CFormSelect>
                </div>
            </div>
            <CTable hover bordered responsive>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell>Sport Name</CTableHeaderCell>
                        <CTableHeaderCell>Series Name</CTableHeaderCell>
                        <CTableHeaderCell>Match Name</CTableHeaderCell>
                        <CTableHeaderCell>Market Name</CTableHeaderCell>
                        <CTableHeaderCell>Market Id</CTableHeaderCell>
                        <CTableHeaderCell>Selection Name</CTableHeaderCell>
                        <CTableHeaderCell>Date</CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow v-for="(sport, index) in sports" :key="index">
                        <CTableDataCell>{{ sport.soprt_name }}</CTableDataCell>
                        <CTableDataCell>{{ sport.series_name }}</CTableDataCell>
                        <CTableDataCell>{{ sport.match_name }}</CTableDataCell>
                        <CTableDataCell>{{ sport.market_name }}</CTableDataCell>
                        <CTableDataCell>{{ sport.market_id }}</CTableDataCell>
                        <CTableDataCell>{{ sport.selection_name }}</CTableDataCell>
                        <CTableDataCell>{{ sport.match_date }}</CTableDataCell>
                        <CTableDataCell>
                            <CButton color="dark" size="sm" class="px-4">Rollback</CButton>
                        </CTableDataCell>

                    </CTableRow>
                </CTableBody>
            </CTable>
        </CCard>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const sports = ref([
    { soprt_name: 'Tennis', series_name: 'ICC Champions Trophy', match_name: "New Zealand v India", match_date: "2025-03-02T09:00:00.000Z", market_name: "Match Odds", market_id: "1.240048911", selection_name: "Naoki Nakagawa", },
])
</script>

<style scoped>
.charts-card {
    box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
    border: none !important;
}

.fw-bold {
    font-weight: 600;
}

::v-deep(.custom-select:focus) {
    outline: none !important;
    box-shadow: none !important;
    border-color: #ced4da !important;
}
</style>
