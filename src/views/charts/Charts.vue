<template>
  <div class="p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="fw-bold">BANK</h5>
      <CBreadcrumb class="mb-0">
        <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
        <CBreadcrumbItem active>BANK</CBreadcrumbItem>
      </CBreadcrumb>
    </div>

    <CCard class="p-3">
      <div class="d-flex flex-wrap gap-2 mb-3">
        <CFormInput placeholder="Search User" class="w-auto" />
        <CButton color="dark">Load</CButton>
        <CButton color="light">Reset</CButton>

        <CButton color="success" class="ms-auto text-white">
          <CIcon icon="cil-spreadsheet" />
        </CButton>
        <CButton color="danger" class="text-white">
          <CIcon icon="cil-file" />
        </CButton>

        <CFormInput placeholder="Transaction Code" class="w-auto" />
        <CButton color="dark">Transfer All</CButton>
      </div>

      <CTable hover striped bordered align="middle">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>User Name</CTableHeaderCell>
            <CTableHeaderCell>CR</CTableHeaderCell>
            <CTableHeaderCell>Pts</CTableHeaderCell>
            <CTableHeaderCell>Client (P/L)</CTableHeaderCell>
            <CTableHeaderCell>Exposure</CTableHeaderCell>
            <CTableHeaderCell>Available Pts</CTableHeaderCell>
            <CTableHeaderCell>Account Type</CTableHeaderCell>
            <CTableHeaderCell>Action</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(user, index) in users" :key="index">
            <CTableDataCell>{{ user.username }}</CTableDataCell>
            <CTableDataCell class="text-warning fw-semibold">
              {{ user.cr.toLocaleString() }}
            </CTableDataCell>
            <CTableDataCell>{{ user.pts }}</CTableDataCell>
            <CTableDataCell>{{ user.pl }}</CTableDataCell>
            <CTableDataCell>{{ user.exposure }}</CTableDataCell>
            <CTableDataCell>{{ user.available }}</CTableDataCell>
            <CTableDataCell>{{ user.type }}</CTableDataCell>
            <CTableDataCell class="d-flex align-items-center gap-2">
              <span class="text-success fw-bold">All →</span>
              <CFormInput class="form-control-sm w-50 no-focus-border" placeholder="0" />
            </CTableDataCell>
            <CTableDataCell>
              <CButton color="primary" size="sm">Submit</CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      <div class="d-flex justify-content-end mt-3">
        <CPagination aria-label="Page navigation">
          <CPaginationItem disabled>« Previous</CPaginationItem>
          <CPaginationItem active>1</CPaginationItem>
          <CPaginationItem disabled>Next »</CPaginationItem>
        </CPagination>
      </div>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          username: 'SKY2001',
          cr: 50000,
          pts: 50000,
          pl: 0,
          exposure: 0,
          available: 40000,
          type: 'Admin',
        },
        {
          username: 'SKY2007',
          cr: 500000,
          pts: 472620,
          pl: -27380,
          exposure: 0,
          available: 192055,
          type: 'Admin',
        },
        {
          username: 'MM777',
          cr: 500000,
          pts: 336280,
          pl: -163720,
          exposure: 0,
          available: 290000,
          type: 'Admin',
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

.no-focus-border:focus {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.table-header,
::v-deep .table> :not(caption)>*>* {
  font-size: 12px !important;
  font-weight: normal !important;
}
</style>
