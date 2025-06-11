<template>
  <div class="">
    <h5 class="fw-bold mb-3">BONUS LIST</h5>
    <CCard class="p-4 charts-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="mb-0">Bonus Detail</h5>
        <RouterLink to="/buttons/dropdowns">
          <CButton color="success" class="text-white">
            <CIcon icon="cil-plus" class="me-1" /> ADD Bonus
          </CButton>
        </RouterLink>
      </div>

      <CTable hover bordered align="middle">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell class="table-header">Bonus Name</CTableHeaderCell>
            <CTableHeaderCell class="table-header">Amount</CTableHeaderCell>
            <CTableHeaderCell class="table-header">Bonus Type</CTableHeaderCell>
            <CTableHeaderCell class="table-header">Status</CTableHeaderCell>
            <CTableHeaderCell class="table-header">Create Date</CTableHeaderCell>
            <CTableHeaderCell class="table-header">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(bonus, index) in bonuses" :key="index">
            <CTableDataCell>{{ bonus.name }}</CTableDataCell>
            <CTableDataCell>{{ bonus.amount }}</CTableDataCell>
            <CTableDataCell class="text-uppercase">{{ bonus.type }}</CTableDataCell>
            <CTableDataCell class="text-success fw-semibold">{{ bonus.status }}</CTableDataCell>
            <CTableDataCell>{{ bonus.date }}</CTableDataCell>
            <CTableDataCell class="d-flex gap-2">
              <CButton color="dark" size="sm">
                <CIcon icon="cil-pencil" />
              </CButton>
              <CButton color="danger" size="sm">
                <CIcon icon="cil-trash" />
              </CButton>
              <CButton color="success" size="sm" class="text-white">
                {{ bonus.status }}
              </CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bonuses: [
        {
          name: 'referal',
          amount: 500,
          type: 'FIXED AMOUNT',
          status: 'Active',
          date: '2025-01-30 02:07:10',
        },
        {
          name: 'signup',
          amount: 500,
          type: 'FIXED AMOUNT',
          status: 'Active',
          date: '2025-01-30 02:08:01',
        },
      ],
    };
  },
};
</script>


<style scoped>
.charts-card {
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border: none !important;
}

.table-header,
::v-deep .table> :not(caption)>*>* {
  font-size: 12px !important;
  font-weight: normal !important;
}
</style>
