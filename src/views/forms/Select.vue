<template>
  <div>
    <h5 class="fw-bold mb-3">Globel Setting</h5>

    <CCard class="charts-card p-2 mb-3">
      <div>
        <h6 class="stack-title p-2 text-white mb-2">Stack Button</h6>
        <CTable hover bordered responsive>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><strong>Stack</strong></CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="stackValue" />
              </CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="stackValue2" />
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>

      <div>
        <h6 class="stack-title p-2 text-white mb-2">Sports Setting</h6>
        <CTable hover bordered responsive>
          <CTableHead class="sport-setting">
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell>Min</CTableHeaderCell>
              <CTableHeaderCell>Max</CTableHeaderCell>
              <CTableHeaderCell>Odd Delay</CTableHeaderCell>
              <CTableHeaderCell>Session Delay</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow v-for="sport in sports" :key="sport.name">
              <CTableDataCell><strong>{{ sport.name }}</strong></CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="sport.min" placeholder="Min" />
              </CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="sport.max" placeholder="Max" />
              </CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="sport.oddDelay" placeholder="Odd Delay" />
              </CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="sport.sessionDelay" placeholder="Session Delay" />
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>

      <div>
        <h6 class="stack-title p-2 text-white mb-2">Session and Bookmaker Limit</h6>
        <CTable hover bordered responsive>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><strong>Session Min limit</strong></CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="sessionMin" />
              </CTableDataCell>
              <CTableDataCell>
                Session Max Limit
              </CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="sessionMax" />
              </CTableDataCell>
              <CTableDataCell>
                Bookmaker Max Limit
              </CTableDataCell>
              <CTableDataCell>
                <CFormInput v-model="bookmakerMax" />
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>

      <div class="h3 pb-2 border-bottom border-dark thick-border-bottom"></div>

      <!-- File Upload -->
      <div class="p-3">
        <CRow class="align-items-center g-3">
          <CCol xs="12" md="6">
            <div class="d-flex align-items-center gap-2">
              <CFormLabel class="mb-0">Welcome Banner</CFormLabel>
              <CFormInput type="file" />
            </div>
          </CCol>
          <CCol xs="6" md="4" class="text-center">
            <CFormLabel>Ex</CFormLabel>
          </CCol>
          <CCol xs="6" md="2" class="text-end">
            <CButton class="submit-btn">Submit</CButton>
          </CCol>
        </CRow>
      </div>

      <div class="h3 pb-2 border-bottom border-dark thick-border-bottom"></div>
      <div class="h3 pb-2 border-bottom border-dark thick-border-bottom"></div>

      <!-- Logo Upload -->
      <div class="p-3">
        <CRow class="align-items-center g-3">
          <CCol xs="12" md="6">
            <div class="d-flex align-items-center gap-2">
              <CFormLabel>Site Logo</CFormLabel>
              <CFormInput type="file" />
            </div>
          </CCol>
          <CCol xs="6" md="4" class="text-center">
            <div class="text-muted">Ex:(32*32, ICO)</div>
          </CCol>
          <CCol xs="6" md="2" class="text-end">
            <CButton class="submit-btn">Submit</CButton>
          </CCol>
        </CRow>
      </div>

      <div class="h3 pb-2 border-bottom border-dark thick-border-bottom"></div>
      <div class="h3 pb-2 border-bottom border-dark thick-border-bottom"></div>

      <!-- Favicon Upload -->
      <div class="p-3">
        <CRow class="align-items-center g-3">
          <CCol xs="12" md="6">
            <div class="d-flex align-items-center gap-2">
              <CFormLabel>Fav Icon</CFormLabel>
              <CFormInput type="file" />
            </div>
          </CCol>
          <CCol xs="6" md="4" class="text-center">
            <div class="text-muted">Ex:(32*32, ICO)</div>
          </CCol>
          <CCol xs="6" md="2" class="text-end">
            <CButton class="submit-btn">Submit</CButton>
          </CCol>
        </CRow>
      </div>
      <div class="h3 pb-2 border-bottom border-dark thick-border-bottom"></div>

      <!-- Social Links -->
      <div>
        <h6 class="stack-title p-2 text-white mb-2">Social Link</h6>
        <div class="table-scroll-wrapper">
          <CTable bordered hover class="w-auto">
            <CTableBody>
              <CTableRow>
                <CTableDataCell><strong>Fb link</strong></CTableDataCell>
                <CTableDataCell>
                  <CFormInput v-model="sessionMin" placeholder="Enter Fb link" />
                </CTableDataCell>
                <CTableDataCell>Insta link</CTableDataCell>
                <CTableDataCell>
                  <CFormInput v-model="sessionMax" placeholder="Enter Insta link" />
                </CTableDataCell>
                <CTableDataCell>Twitter link</CTableDataCell>
                <CTableDataCell>
                  <CFormInput v-model="bookmakerMax" placeholder="Enter Twitter link" />
                </CTableDataCell>
                <CTableDataCell><strong>Fb link</strong></CTableDataCell>
                <CTableDataCell>
                  <CFormInput v-model="sessionMin" placeholder="Enter Fb link" />
                </CTableDataCell>
                <CTableDataCell>Insta link</CTableDataCell>
                <CTableDataCell>
                  <CFormInput v-model="sessionMax" placeholder="Enter Insta link" />
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </div>
      </div>
      <div class="h3 pb-2 mb-3 border-bottom border-dark thick-border-bottom"></div>
      <!-- Bottom Controls -->
      <CRow>
        <CCol md="4" class="mb-3">
          <CFormLabel>Sign Up</CFormLabel>
          <CFormSelect :options="statusOptions" v-model="signUp" />
        </CCol>

        <CCol md="4" class="mb-3">
          <CFormLabel>Payment Gateway</CFormLabel>
          <CFormSelect :options="paymentOptions" v-model="paymentGateway" />
        </CCol>

        <CCol md="4" class="mb-3">
          <CFormLabel>Show User Setting</CFormLabel>
          <CFormSelect :options="statusOptions" v-model="showUserSetting" />
        </CCol>

        <CCol md="4" class="mb-3">
          <CFormLabel>Show Cashout</CFormLabel>
          <CFormSelect :options="statusOptions" v-model="cashout" />
        </CCol>

        <CCol md="4" class="mb-3">
          <CFormLabel>Show Email</CFormLabel>
          <CFormSelect :options="emailOptions" v-model="showEmail" />
        </CCol>

        <CCol md="4" class="mb-3">
          <CFormLabel>Withdraw Url</CFormLabel>
          <CFormSelect :options="withdrawOptions" v-model="withdrawUrl" />
        </CCol>
      </CRow>
      <div class="h3 pb-2 mb-3 border-bottom border-dark thick-border-bottom"></div>

      <CRow class="mt-4 align-items-end">
        <CCol md="4" class="mb-3">
          <CFormInput v-model="footerLeft" class="footer-input" placeholder="Site title" />
        </CCol>
        <CCol md="4" class="mb-3">
          <CFormInput v-model="footerMiddle" class="footer-input" placeholder="Welcome text" />
        </CCol>
        <CCol md="4" class="mb-3 d-flex justify-content-between">
          <CFormInput v-model="footerRight" class="footer-input" placeholder="Transaction text" />
          <CButton color="success" class="ms-2 submit-btn">Submit</CButton>
        </CCol>
      </CRow>
    </CCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stackValue = ref('')
const stackValue2 = ref('')
const sessionMin = ref('')
const sessionMax = ref('')
const bookmakerMax = ref('')
const signUp = ref('Active')
const cashout = ref('Active')
const paymentGateway = ref('MANUAL PAYME')
const showEmail = ref('Inactive')
const footerLeft = ref('')
const footerRight = ref('')

const sports = ref([
  { name: 'Cricket', min: '', max: '', oddDelay: '', sessionDelay: '' },
  { name: 'Soccer', min: '', max: '', oddDelay: '', sessionDelay: '' },
  { name: 'Tennis', min: '', max: '', oddDelay: '', sessionDelay: '' },
])

const socialLinks = ref([
  { name: 'fb', label: 'Fb link', placeholder: 'Enter fb link', url: '' },
  { name: 'insta', label: 'Insta link', placeholder: 'Enter insta link', url: '' },
  { name: 'twitter', label: 'Twitter link', placeholder: 'Enter twitter link', url: '' },
  { name: 'telegram', label: 'Telegram link', placeholder: 'Enter telegram link', url: '' },
])

const statusOptions = ['Active', 'Inactive']
const paymentOptions = ['MANUAL PAYME', 'ONLINE']
const emailOptions = ['Active', 'Inactive']
</script>

<style scoped>
.charts-card {
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border: none !important;
}

.stack-btn-row {
  background-color: #f1f2f2;
}

.sport-setting {
  background-color: #d1d1d1;
}

.thick-border-bottom {
  border-bottom: 2px solid #000 !important;
  /* or use a Bootstrap variable like var(--bs-dark) */
}

.table-scroll-wrapper {
  overflow-x: auto;
  width: 100%;
}

.table-scroll-wrapper table {
  min-width: 800px;
  /* Force wider table to trigger scroll */
}

.stack-title {
  background-color: #3c444b;
}

::v-deep(.form-control:focus) {
  border-color: #ced4da !important;
  box-shadow: none !important;
  outline: none !important;
}

.footer-input {
  max-width: 100px;
  width: 100%;
}

.submit-btn {
  color: #fff;
  background-color: #34c38f;
  border-color: #34c38f;
}
</style>