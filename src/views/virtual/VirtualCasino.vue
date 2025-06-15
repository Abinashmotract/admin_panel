<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="fw-bold">VIRTUAL CASINO</h5>
            <h5 class="text-subtitle-2 fw-bold text-grey-darken-2">Home / VIRTUAL CASINO</h5>
        </div>

        <CCard class="p-1 charts-card">
            <div class="game-grid">
                <div v-for="(game, index) in gamesData" :key="index" class="game-card">
                    <img :src="game.image" :alt="game.name || 'game'" class="game-image" />
                </div>
            </div>
        </CCard>
    </div>
</template>

<script setup>
const gamesData = [
    { name: 'TEEN PATTI', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1031.webp" },
    { name: 'TEENPATTI', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1025.webp" },
    { name: '20-20TEENPATTI', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1019.webp" },
    { name: 'Test Teen Patti', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1018.webp" },
    { name: 'ANAR AKBAR ANTHONY', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1021.webp" },
    { name: 'MUFLIS', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1024.webp" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1028.webp" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1027.webp" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1022.webp" },
    { image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-1032.webp" },
    { name: 'BACCARAT', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-7.webp" },
    { name: '32 CARDS', image: "https://ik.imagekit.io/bmaxmbpyx/https://wdemo.xigxa.com/admin/assets/images/game-icon/-7.webp" }
]
</script>

<style scoped>
.charts-card {
    box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
    border: none !important;
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
}

.game-card {
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
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
