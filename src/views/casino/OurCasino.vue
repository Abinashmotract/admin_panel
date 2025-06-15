<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="fw-bold">OUR CASINO</h5>
            <h5 class="text-subtitle-2 fw-bold text-grey-darken-2">Home / OUR CASINO</h5>
        </div>

        <CCard class="p-1 charts-card">
            <v-tabs v-model="currentTab" class="custom-tab-bar" slider-color="teal-lighten-3" show-arrows>
                <v-tab v-for="tab in tabs" :key="tab.value" :value="tab.value"
                    :class="{ 'active-tab': currentTab === tab.value }">
                    {{ tab.label }}
                </v-tab>
            </v-tabs>

            <v-window v-model="currentTab" class="mt-4">
                <!-- All Games Tab -->
                <v-window-item value="all">
                    <div class="game-grid">
                        <div v-for="(game, index) in allGames" :key="index" class="game-card">
                            <img :src="game.image" :alt="game.name || 'game'" class="game-image">
                        </div>
                    </div>
                </v-window-item>

                <!-- Teen Patti Tab -->
                <v-window-item value="teenpatti">
                    <div class="game-grid">
                        <div v-for="(game, index) in teenPattiGames" :key="index" class="game-card">
                            <img :src="game.image" alt="Teen Patti Game" class="game-image">
                        </div>
                    </div>
                </v-window-item>

                <!-- Baccarat Tab -->
                <v-window-item value="baccarat">
                    <div class="game-grid">
                        <div v-for="(game, index) in baccaratGames" :key="index" class="game-card">
                            <img :src="game.image" alt="Baccarat Game" class="game-image">
                        </div>
                    </div>
                </v-window-item>

                <!-- 32 Cards Tab -->
                <v-window-item value="32cards">
                    <div class="game-grid">
                        <div v-for="(game, index) in cards32Games" :key="index" class="game-card">
                            <img :src="game.image" alt="32 Cards Game" class="game-image">
                        </div>
                    </div>
                </v-window-item>
            </v-window>
        </CCard>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentTab = ref('all')
const tabs = [
    { value: 'all', label: 'All Casino' },
    { value: 'teenpatti', label: 'Teen Patti' },
    { value: 'baccarat', label: 'Baccarat' },
    { value: '32cards', label: '32 Cards' },
    { value: 'lucky7', label: 'Lucky 7' },
    { value: 'dragontiger', label: 'Dragon Tiger' },
    { value: 'andar', label: 'Andar Bahar' },
    { value: 'poker', label: 'Poker' },
    { value: 'bollywood', label: 'Bollywood' }
]
// All games data with images
const gamesData = [
    // Teen Patti Games
    { name: 'TEEN PATTI', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1031.webp", category: "teenpatti" },
    { name: 'TEENPATTI', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1025.webp", category: "teenpatti" },
    { name: '20-20TEENPATTI', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1019.webp", category: "teenpatti" },
    { name: 'Test Teen Patti', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1018.webp", category: "teenpatti" },
    { name: 'ANAR AKBAR ANTHONY', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1021.webp", category: "teenpatti" },
    { name: 'MUFLIS', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1024.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1028.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1027.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1022.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1032.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1029.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1026.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-2.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-3.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1023.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-5.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-6.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1033.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1034.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-4.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1012.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1014.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1011.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1010.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1016.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1015.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-145.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1013.webp", category: "teenpatti" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-7.webp", category: "teenpatti" },

    // Add other category games here following the same pattern
    // Example:
    { name: 'BACCARAT', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-7.webp", category: "baccarat" },
    { name: '32 CARDS', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-7.webp", category: "32cards" },
    // ... add all other games
]

// Computed properties
const allGames = computed(() => gamesData)
const teenPattiGames = computed(() => gamesData.filter(game => game.category === 'teenpatti'))
const baccaratGames = computed(() => gamesData.filter(game => game.category === 'baccarat'))
const cards32Games = computed(() => gamesData.filter(game => game.category === '32cards'))
const lucky7Games = computed(() => gamesData.filter(game => game.category === 'lucky7'))
const dragonTigerGames = computed(() => gamesData.filter(game => game.category === 'dragontiger'))
const andarBaharGames = computed(() => gamesData.filter(game => game.category === 'andar'))
const pokerGames = computed(() => gamesData.filter(game => game.category === 'poker'))
const bollywoodGames = computed(() => gamesData.filter(game => game.category === 'bollywood'))
</script>

<style scoped>
.charts-card {
    box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
    border: none !important;
}

.custom-tab-bar {
    background-color: #453737 !important;
    border-radius: 8px;
    position: relative;
    height: 44px;
    display: flex;
    align-items: center;
    border: 2px solid #e0e0e0;
}

/* Active tab styling */
:deep(.v-tab--selected) {
    background-color: #2e3f2e !important;
    color: white !important;
    /* border-radius: 6px;
    font-weight: bold; */
}

:deep(.v-tab) {
    color: rgba(255, 255, 255, 0.7) !important;
    text-transform: capitalize;
    font-size: 0.875rem;
    margin: 0 4px;
}

:deep(.v-slide-group__container) {
    height: 100%;
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    padding: 16px;
}

.game-card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}

.game-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.game-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
}

.game-name {
    padding: 10px;
    text-align: center;
    font-weight: 500;
    color: #333;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>