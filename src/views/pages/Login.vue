<template>
  <div class="home-new">
    <CNavbar colorScheme="light">
      <CContainer class="toolbar d-flex align-items-center justify-content-between">
        <CNavbarBrand>
          <img class="admin-logo" src="https://sitethemedata.com/sitethemes/world777.com/front/logo.png" alt="Logo" />
        </CNavbarBrand>

        <!-- Marquee Section -->
        <div class="marquee-container">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            <div v-for="(category, index) in categories" :key="index" class="marquee-item">
              <img :src="category.icon" alt="icon" class="category-icon mb-2" />
              <p>{{ category.name }}</p>
            </div>
          </marquee>
        </div>

        <!-- Login Button -->
        <CButton color="primary" @click="visibleOffcanvas = true" class="custom-login-btn">
          Login
        </CButton>
      </CContainer>

      <div class="upcoming-fixtures-bar">
        <div class="fixtures-ribbon">Upcoming<br />Fixtures</div>
        <div class="fixtures-marquee-container">
          <div class="fixtures-marquee">
            <div class="fixture-item" v-for="(fixture, index) in doubledFixtures" :key="index">
              <span class="match-name">⚽ {{ fixture.match }}</span>
              <span class="match-time">{{ fixture.time }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Offcanvas for Login -->
      <COffcanvas class="admin-login-canvas bg-dark text-white" id="loginOffcanvas" placement="end"
        :visible="visibleOffcanvas" @hide="visibleOffcanvas = false">
        <COffcanvasHeader class="border-0">
          <COffcanvasTitle class="fw-bold text-white">ADMIN LOGIN</COffcanvasTitle>
          <CCloseButton class="text-white fs-4" @click="visibleOffcanvas = false" />
        </COffcanvasHeader>
        <v-divider></v-divider>
        <COffcanvasBody>
          <div class="text-center mb-4">
            <h5 class="fw-semibold" style="color: rgba(116,120,141)">Welcome to Admin Panel</h5>
            <p style="color: rgba(116,120,141); font-size: 14px;">Enter your Username and Password</p>
          </div>
          <CForm @submit.prevent="onLogin">
            <div class="mb-3">
              <CFormInput v-model="login.username" placeholder="Enter Username" class="form-control-lg" />
            </div>
            <div class="mb-3">
              <CFormInput v-model="login.password" type="password" placeholder="Enter password"
                class="form-control-lg" />
            </div>
            <RouterLink to="/dashboard">
              <CButton type="submit" class="w-100 py-2"
                style="background-color: #ffeb00; color: black; font-weight: 500; border: none;">
                Sign In
              </CButton>
            </RouterLink>
          </CForm>
          <div class="mt-3" style="font-size: 12px; color: rgba(116,120,141)">
            This site is protected by reCAPTCHA and the Google
            <a href="#" class="text-primary">Privacy Policy</a> and
            <a href="#" class="text-warning">Terms of Service</a> apply.
          </div>
          <div class="mt-4 text-center" style="font-size: 13px; color: #999;">
            © Copyright 2021. All Rights Reserved.
          </div>
        </COffcanvasBody>
      </COffcanvas>

    </CNavbar>

    <!-- Modern Marquee Section -->
    <div>
      <div class="marquee-wrapper">
        <div class="marquee-track">
          <div v-for="(item, index) in latestMatchAdd" :key="index" class="marquee-image-item">
            <img :src="item.latestmatchimage" alt="icon" height="100" class="latest-match-add" />
          </div>
        </div>
      </div>
      <div class="p-3">
        <!-- ----------------------Our Live Casino------------------------->
        <div class="mt-5">
          <h4 class="sport-list-title">Our Live Casino</h4>
          <div class="casino-banners-list mt-2">
            <div v-for="(game, index) in casinoGames" :key="index" class="casino-banner-item">
              <div class="image-container">
                <img class="img-fluid" :src="game.image" :alt="game.name">
                <div class="hover-overlay">
                  <RouterLink to="/dashboard">
                    <div class="login-button">Login</div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ----------------------Virtual Casinos------------------------->
        <div class="mt-5">
          <h4 class="sport-list-title">Virtual Casinos</h4>
          <div class="casino-banners-list mt-2">
            <div v-for="(game, index) in casinoGames" :key="index" class="casino-banner-item">
              <div class="image-container">
                <img class="img-fluid" :src="game.image" :alt="game.name">
                <RouterLink to="/dashboard">
                  <div class="login-button">Login</div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- ----------------------Virtual Casinos and Fantasy Games ------------------------->
        <div class="mt-5">
          <CRow>
            <!-- Live Casinos Column -->
            <CCol md="6">
              <h4 class="sport-list-title">Live Casinos</h4>
              <div class="casino-banners-list">
                <div v-for="(game, index) in casinoGames" :key="'live-' + index" class="casino-banner-item">
                  <div class="image-container">
                    <img class="img-fluid" :src="game.image" :alt="game.name" />
                    <RouterLink to="/dashboard">
                      <div class="login-button">Login</div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </CCol>

            <!-- Fantasy Games Column -->
            <CCol md="6">
              <h4 class="sport-list-title">Fantasy Games</h4>
              <div class="casino-banners-list">
                <div v-for="(game, index) in casinoGames" :key="'fantasy-' + index" class="casino-banner-item">
                  <div class="image-container">
                    <img class="img-fluid" :src="game.image" :alt="game.name" />
                    <RouterLink to="/dashboard">
                      <div class="login-button">Login</div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </CCol>
          </CRow>
        </div>

        <!-- ----------------------Top Winners------------------------->
        <div class="mt-5">
          <h4 class="sport-list-title">Top Winners</h4>
          <div class="marquee-wrapper">
            <div class="marquee-track">
              <div v-for="(winner, index) in topWinners" :key="index" class="marquee-image-item winner-card">
                <img :src="winner.image" alt="avatar" class="winner-avatar" />
                <div class="winner-details">
                  <p class="mb-1 fw-bold"><strong>Player</strong> <span class="player-name">{{ winner.player }}</span>
                  </p>
                  <p class="mb-1 fw-bold"><strong>Time</strong> {{ winner.time }}</p>
                  <p class="mb-1 fw-bold"><strong>Win Amount</strong> {{ winner.amount }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 mb-4">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import latest from '../../assets/images/latestadd.jpeg';
import latest1 from '../../assets/images/latest1.jpeg';
import Footer from '../../views/pages/Footer.vue';
const athleticsIcon = '/world777-icons/Athletics.png'
const badmintonIcon = '/world777-icons/Badminton.png'
const baseballIcon = '/world777-icons/Baseball.png'
const basketballIcon = '/world777-icons/Basketball.png'
const dartsIcon = '/world777-icons/Darts.png'
const eGamesIcon = '/world777-icons/EGames.png'
const footballIcon = '/world777-icons/Football.png'
const motorbikesIcon = '/world777-icons/Motorbikes.png'
const rugbyUnionIcon = '/world777-icons/RugbyUnion.png'
const sumoIcon = '/world777-icons/Sumo.png'
const virtualSportsIcon = '/world777-icons/Virtualsports.png'

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
  {
    name: 'Motorbikes',
    icon: motorbikesIcon,
  },
  {
    name: 'Athletics',
    icon: athleticsIcon,
  },
  {
    name: 'Basketball 3x3',
    icon: basketballIcon,
  },
  {
    name: 'Sumo',
    icon: sumoIcon,
  },
  {
    name: 'Virtual sports',
    icon: virtualSportsIcon,
  },
  {
    name: 'Baseball',
    icon: baseballIcon,
  },
  {
    name: 'Rugby Union',
    icon: rugbyUnionIcon,
  },
  {
    name: 'Darts',
    icon: dartsIcon,
  },
  {
    name: 'American Football',
    icon: footballIcon, // Using Football.png for American Football
  },
]
const latestMatchAdd = [
  { name: 'Motorbikes', latestmatchimage: latest },
  { name: 'Athletics', latestmatchimage: latest1 },
  { name: 'Basketball 3x3', latestmatchimage: latest },
  { name: 'Sumo', latestmatchimage: latest1 },
  { name: 'Virtual sports', latestmatchimage: latest },
  { name: 'Baseball', latestmatchimage: latest1 },
  { name: 'Rugby Union', latestmatchimage: latest },
  { name: 'Darts', latestmatchimage: latest1 },
  { name: 'American Football', latestmatchimage: latest },
]

const casinoGames = [
  { name: "ballbyball", image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/cards/our-live-casino/ballbyball.jpg" },
  { name: "sicbo", image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/cards/our-live-casino/sicbo.jpg" },
  { name: "teen32", image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/cards/our-live-casino/teen32.jpg" },
  { name: "roulette1", image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/cards/our-live-casino/roulette1.jpg" },
  { name: "teen", image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/cards/our-live-casino/teen.jpg" },
  { name: "teen20", image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/cards/our-live-casino/teen20.jpg" },
  { name: "teen20", image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/cards/our-live-casino/teen20.jpg" },
]
const topWinners = [
  {
    image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/user-icon.png",
    player: "ba****",
    time: "20/11/2023 00:07",
    amount: "1,94,90,000.00"
  },
  {
    image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/user-icon.png",
    player: "ab****",
    time: "19/11/2023 23:45",
    amount: "1,50,20,000.00"
  },
  {
    image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/user-icon.png",
    player: "cd****",
    time: "19/11/2023 22:30",
    amount: "1,20,75,000.00"
  },
  {
    image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/user-icon.png",
    player: "ef****",
    time: "19/11/2023 21:15",
    amount: "95,00,000.00"
  },
  {
    image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/user-icon.png",
    player: "gh****",
    time: "19/11/2023 20:00",
    amount: "85,50,000.00"
  },
  {
    image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/user-icon.png",
    player: "ij****",
    time: "19/11/2023 18:45",
    amount: "75,25,000.00"
  },
  {
    image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/user-icon.png",
    player: "kl****",
    time: "19/11/2023 17:30",
    amount: "65,00,000.00"
  }
]
const fixtures = ref([
  { match: "EC Juventude (W) v Sao Paulo (W)", time: "2025-06-14 22:30" },
  { match: "Yu Bu v Searle", time: "2025-06-14 17:40" },
  { match: "Gigante v Shimabukuro", time: "2025-06-14 20:10" },
  { match: "Manuel Cerundolo v Vukic", time: "2025-06-14 17:40" },
  { match: "F Auger-Aliassime v Fritz", time: "2025-06-14 15:30" },
  { match: "Växjö DFF (W) v IFK Norrkoping DFK (W)", time: "2025-06-14 18:30" }
])

const doubledFixtures = computed(() => [...fixtures.value, ...fixtures.value])
</script>

<style scoped>
::v-deep(.form-control::placeholder) {
  font-size: 13px;
  color: #999;
}

.upcoming-fixtures-bar {
  background-color: #1e2227;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 48px;
  position: relative;
  font-family: 'Segoe UI', sans-serif;
  font-size: 13px;
}

.fixtures-ribbon {
  background-color: #3c444b;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  padding: 10px;
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
  z-index: 2;
  line-height: 1.2;
}

.fixtures-marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.fixtures-marquee {
  display: flex;
  width: max-content;
  animation: scroll-left 30s linear infinite;
  gap: 40px;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

.fixture-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  white-space: nowrap;
}

.match-name {
  font-weight: 500;
  color: #AAAFB5;
}

.match-time {
  font-size: 12px;
  color: #aaa;
}

/* -------------------------------------- */
.home-new {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #23292e;
  background-image: radial-gradient(circle closest-corner at 50%,
      #0c5a68,
      rgba(12, 90, 104, 0) 70%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.admin-logo {
  height: 50px;
  width: 250px;
}

.toolbar {
  background-color: #23292e;
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
  font-size: 12px;
}

.marquee-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  text-align: center;
}

.category-icon {
  height: 30px;
  max-width: 50px;
  margin: 0;
  padding: 0;
  display: block;
}

.marquee-item p {
  margin: 0;
  padding: 0;
  line-height: 1;
}

/* Custom Login Button */
.custom-login-btn {
  border-radius: 0;
  background-color: #fdcf13;
  color: black;
  height: 60px;
  width: 120px;
  text-transform: uppercase;
  font-size: 20px;
}

/* New Marquee Styles */
.marquee-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.marquee-track {
  display: flex;
  gap: 20px;
  animation: scroll-left 20s linear infinite;
}

.marquee-image-item img {
  display: block;
  height: 100px;
  border-radius: 10px;
}

/* Scroll animation */
@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.sport-list-title {
  color: #fdcf13;
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 1.21875rem;
  margin-bottom: 0.75rem;
}

.casino-banners-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
}

.casino-banner-item {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  width: 140px;
  /* Fixed width */
  height: 90px;
  /* Fixed height */
}

.casino-banner-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Ensures images fill container */
  display: block;
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease;
}

.casino-banner-item:hover .hover-overlay {
  opacity: 1;
}

.login-button {
  padding: 6px 15px;
  background: linear-gradient(to right, #ff8a00, #da1b60);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.login-button:hover {
  transform: scale(1.03);
}

.winner-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1f26;
  border-radius: 12px;
  padding: 12px;
  min-width: 200px;
  box-shadow: 0 0 10px #2b2366;
  color: white;
  text-align: left;
  border: 1px solid #282b30;
  position: relative;
}

.winner-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: contain;
  margin-bottom: 10px;
}

.winner-details {
  font-size: 12px;
  /* line-height: 0; */
  width: 100%;
}

.player-name {
  float: right;
  font-weight: 500;
}
</style>