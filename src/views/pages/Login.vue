<template>
  <div class="home-new">
    <CNavbar colorScheme="light">
      <CContainer class="toolbar d-flex align-items-center justify-content-between">
        <!-- Logo -->
        <CNavbarBrand>
          <img class="admin-logo" src="https://sitethemedata.com/sitethemes/world777.com/front/logo.png" alt="Logo" />
        </CNavbarBrand>

        <!-- Marquee Section -->
        <div class="marquee-container">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            <span v-for="(category, index) in categories" :key="index" class="marquee-item">
              <img :src="category.icon" alt="icon" class="category-icon" />
              {{ category.name }}
            </span>
          </marquee>
        </div>

        <!-- Login Button -->
        <CButton color="primary" @click="visibleOffcanvas = true">Login</CButton>
      </CContainer>

      <!-- Offcanvas for Login -->
      <COffcanvas id="loginOffcanvas" placement="end" :visible="visibleOffcanvas" @hide="visibleOffcanvas = false">
        <COffcanvasHeader>
          <COffcanvasTitle>Login</COffcanvasTitle>
          <CCloseButton class="text-reset" @click="visibleOffcanvas = false" />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CForm @submit.prevent="onLogin">
            <div class="mb-3">
              <label class="form-label">Username</label>
              <CFormInput v-model="login.username" placeholder="Enter username" />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <CFormInput v-model="login.password" type="password" placeholder="Enter password" />
            </div>
            <RouterLink to="/dashboard">
              <CButton type="submit" color="success" class="w-100">Login</CButton>
            </RouterLink>
          </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </CNavbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visibleOffcanvas = ref(false)

const login = ref({
  username: '',
  password: '',
})

const onLogin = () => {
  console.log('Logging in with:', login.value)
  // Add real login logic here
  visibleOffcanvas.value = false
}
const categories = [
  { name: 'Motorbikes', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
  { name: 'Athletics', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
  { name: 'Basketball 3x3', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
  { name: 'Sumo', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
  { name: 'Virtual sports', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
  { name: 'Baseball', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
  { name: 'Rugby Union', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
  { name: 'Darts', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
  { name: 'American Football', icon: 'https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/iconsports/politics.svg' },
]

</script>

<style scoped>
.home-new {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #23292E;
  background-image: radial-gradient(circle closest-corner at 50%, #0c5a68, rgba(12, 90, 104, 0) 70%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.admin-logo {
  height: 60px;
  width: 300px;
}

.toolbar {
  background-color: #23292E;
}

.marquee-container {
  flex: 1;
  margin: 0 20px;
  overflow: hidden;
  white-space: nowrap;
}

marquee {
  display: block;
  width: 100%;
  color: white;
  font-weight: 600;
  font-size: 16px;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  margin-right: 40px;
}

.category-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
</style>
