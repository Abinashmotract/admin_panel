<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="components/badge.html" />
    </CCol>
    <CCol :lg="6">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Badges</strong> <small>Dismissing</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Bootstrap badge scale to suit the size of the parent element by
            using relative font sizing and <code>em</code> units.
          </p>
          <DocsExample href="components/badge.html">
            <h1>Example heading <CBadge color="secondary">New</CBadge>
            </h1>
            <h2>Example heading <CBadge color="secondary">New</CBadge>
            </h2>
            <h3>Example heading <CBadge color="secondary">New</CBadge>
            </h3>
            <h4>Example heading <CBadge color="secondary">New</CBadge>
            </h4>
            <h5>Example heading <CBadge color="secondary">New</CBadge>
            </h5>
            <h6>Example heading <CBadge color="secondary">New</CBadge>
            </h6>
          </DocsExample>
          <p class="text-body-secondary small">
            Badges can be used as part of links or buttons to provide a counter.
          </p>
          <!-- <DocsExample href="components/badge.html">
            <CButton color="primary">
              Notifications <CBadge color="secondary">4</CBadge>
            </CButton>
          </DocsExample> -->
          <p class="text-body-secondary small">
            Remark that depending on how you use them, badges may be complicated
            for users of screen readers and related assistive technologies.
          </p>
          <p class="text-body-secondary small">
            Unless the context is clear, consider including additional context
            with a visually hidden piece of additional text.
          </p>
          <DocsExample href="components/badge.html">
            <CButton color="primary">
              Profile <CBadge color="secondary">9</CBadge>
              <span class="visually-hidden">unread messages</span>
            </CButton>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :lg="6">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Badges</strong> <small>Contextual variations</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Add any of the below-mentioned <code>color</code> props to modify
            the presentation of a badge.
          </p>
          <DocsExample href="components/badge.html#contextual-variations">
            <CBadge color="primary-gradient">primary</CBadge>
            <CBadge color="success-gradient">success</CBadge>
            <CBadge color="danger-gradient">danger</CBadge>
            <CBadge color="warning-gradient">warning</CBadge>
            <CBadge color="info-gradient">info</CBadge>
            <CBadge color="light">light</CBadge>
            <CBadge color="dark">dark</CBadge>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Badges</strong> <small>Pill badges</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Apply the <code>shape=&#34;rounded-pill&#34;</code> prop to make
            badges rounded.
          </p>
          <DocsExample href="components/badge.html#pill-badges">
            <CBadge color="primary-gradient" shape="rounded-pill">
              primary
            </CBadge>
            <CBadge color="success-gradient" shape="rounded-pill">
              success
            </CBadge>
            <CBadge color="danger-gradient" shape="rounded-pill">
              danger
            </CBadge>
            <CBadge color="warning-gradient" shape="rounded-pill">
              warning
            </CBadge>
            <CBadge color="info-gradient" shape="rounded-pill"> info </CBadge>
            <CBadge color="light" shape="rounded-pill"> light </CBadge>
            <CBadge color="dark" shape="rounded-pill"> dark </CBadge>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
