<template>
  <div>
    <v-row class="mb-0">
      <v-col>
        <div class="py-2 px-4 text-caption" style="background-color: #20327b; color: white; font-weight: bold">
          MADHYA PRADESH LEAGUE > CHAMBAL GHARIYALS V INDORE PINK PANTHERS 15/06/2025 14:30:00
          (UTC+0530)
        </div>
      </v-col>
    </v-row>

    <v-row class="m-0">
      <v-col cols="12" md="8" class="p-1">
        <v-expansion-panels multiple class="expansion-panels-custom">
          <v-expansion-panel v-for="(match, index) in matches" :key="index" class="expansion-panel-custom">
            <v-expansion-panel-title class="expansion-title-custom">
              <v-icon size="14" class="mr-1">mdi-chevron-down</v-icon>
              {{ match.title }}
              <v-spacer />
              <CButton class="bet-btn-bg text-white fw-bold me-2" size="sm" @click.stop="openBetLock(match)">Bet Lock
              </CButton>
              <CButton class="bet-btn-bg text-white fw-bold" size="sm">User Book</CButton>
            </v-expansion-panel-title>

            <v-expansion-panel-text class="expansion-text-custom">
              <div class="price-controls">
                <small class="max-label">10000</small>
                <div class="back-btn text-black fw-bold">Back</div>
                <div class="lay-btn text-black fw-bold">Lay</div>
              </div>

              <div class="team-row" v-for="(team, tIndex) in match.teams" :key="tIndex">
                <div class="team-name">
                  <span>{{ team.teamName }}</span>
                  <p class="mb-0">0</p>
                </div>

                <div class="price-grid position-relative">
                  <div v-for="(price, pIndex) in team.prices" :key="pIndex" :class="[
                    'price-box',
                    price.type,
                    isSuspended(team.prices) ? 'disabled-box' : '',
                  ]">
                    <span class="price-value">{{
                      isSuspended(team.prices) ? '0' : price.value
                    }}</span>
                    <span class="price-volume">{{
                      isSuspended(team.prices) ? '0' : price.volume
                    }}</span>
                  </div>

                  <div class="suspended-overlay" v-if="isSuspended(team.prices)">
                    <span>SUSPENDED</span>
                  </div>
                </div>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" md="4" class="p-1">
        <div class="px-2 py-2 mb-3 live-match">
          <p class="mb-0">LIVE MATCH</p>
        </div>
        <div class="px-2 py-2 mb-2 live-match">
          <p class="mb-0">My Bets</p>
        </div>
        <div class="py-1 mb-2">
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink href="#" active> Match Odds </CNavLink>
            </CNavItem>
          </CNav>
        </div>
      </v-col>
    </v-row>
    <BetLockDialog v-if="showBetLockDialog" :show="showBetLockDialog" :match="selectedMatch"
      @close="showBetLockDialog = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BetLockDialog from './BetLockDialog.vue'

const isSuspended = (prices) => {
  return prices.every((p) => !p.value)
}

const showBetLockDialog = ref(false)
const selectedMatch = ref(null)

const openBetLock = (match) => {
  selectedMatch.value = match
  showBetLockDialog.value = true
}

const matches = ref([
  {
    title: 'Match Odds',
    suspended: false,
    teams: [
      {
        teamName: 'Chambal Ghariyals',
        prices: [
          { value: '1.50', volume: '1000', type: 'back-price-light' },
          { value: '1.55', volume: '800', type: 'back-price-dark' },
          { value: '1.60', volume: '600', type: 'back-price-dark' },
          { value: '1.65', volume: '900', type: 'lay-price-light' },
          { value: '1.70', volume: '700', type: 'lay-price-dark' },
          { value: '1.75', volume: '500', type: 'lay-price-dark' },
        ],
      },
      {
        teamName: 'Indore Pink Panthers',
        prices: [
          { value: '', volume: '', type: 'back-price-light' },
          { value: '', volume: '', type: 'back-price-dark' },
          { value: '', volume: '', type: 'back-price-dark' },
          { value: '', volume: '', type: 'lay-price-light' },
          { value: '', volume: '', type: 'lay-price-dark' },
          { value: '', volume: '', type: 'lay-price-dark' },
        ],
      },
    ],
  },
  {
    title: 'Bookmaker',
    suspended: false,
    teams: [
      {
        teamName: 'Chambal Ghariyals',
        prices: [
          { value: '1.50', volume: '1000', type: 'back-price-light' },
          { value: '1.55', volume: '800', type: 'back-price-dark' },
          { value: '1.60', volume: '600', type: 'back-price-dark' },
          { value: '1.65', volume: '900', type: 'lay-price-light' },
          { value: '1.70', volume: '700', type: 'lay-price-dark' },
          { value: '1.75', volume: '500', type: 'lay-price-dark' },
        ],
      },
      {
        teamName: 'Indore Pink Panthers',
        prices: [
          { value: '', volume: '', type: 'back-price-light' },
          { value: '', volume: '', type: 'back-price-dark' },
          { value: '', volume: '', type: 'back-price-dark' },
          { value: '', volume: '', type: 'lay-price-light' },
          { value: '', volume: '', type: 'lay-price-dark' },
          { value: '', volume: '', type: 'lay-price-dark' },
        ],
      },
    ],
  },
])
</script>

<style scoped>
.suspended-badge {
  right: 20%;
  bottom: 20px;
  color: #ef4444;
  font-weight: bold;
  white-space: nowrap;
}

.disabled-box {
  background-color: rgba(60, 60, 60, 0.9) !important;
  color: #999 !important;
  pointer-events: none;
}

.suspended-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: red;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  pointer-events: none;
}

.bet-btn-bg {
  background-color: #f18521;
}

.suspended {
  background-color: #6b0000;
  color: white;
  text-align: center;
  font-weight: bold;
}

.live-match {
  background-color: #3c444b;
  color: #aaafb5;
}

.expansion-panels-custom {
  margin: 0 !important;
}

.expansion-panel-custom {
  border-radius: 0 !important;
  background-color: #3c444b !important;
  color: white;
  margin-bottom: 4px;
}

.expansion-title-custom {
  min-height: 40px !important;
  padding: 6px 12px !important;
  font-size: 14px;
  font-weight: 500;
}

.expansion-text-custom {
  background-color: #f3f3f3 !important;
  color: #333 !important;
  padding: 6px 8px !important;
}

.expansion-text-custom:hover {
  box-shadow: 0 0 5px #c7c7c7;
}

.price-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: flex-end;
  margin-right: 8rem;
}

.max-label {
  font-size: 14px;
  font-weight: bold;
}

.back-btn,
.lay-btn {
  width: 65px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  cursor: pointer;
  border-radius: 6px;
}

.back-btn {
  background-color: rgba(114, 187, 239, 0.5);
}

.back-btn:hover {
  background-color: #72bbef;
}

.lay-btn {
  background-color: rgba(249, 148, 186, 0.5);
}

.lay-btn:hover {
  background-color: #f994ba;
}

.team-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b5b3b3;
}

.team-name {
  font-weight: 500;
  color: #5f5b5b;
  /* width: 150px; */
}

.price-grid {
  display: grid;
  grid-template-columns: repeat(6, 65px);
  gap: 5px;
}

.price-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 40px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  border-radius: 6px;
}

.back-price-light {
  background-color: rgba(114, 187, 239, 0.65);
}

.back-price-dark {
  background-color: #72bbef;
}

.lay-price-light {
  background-color: rgba(249, 148, 186, 0.65);
}

.lay-price-dark {
  background-color: #f994ba;
}

.price-value {
  font-size: 16px;
  line-height: 1.2;
}

.price-volume {
  font-size: 13px;
  font-weight: normal;
  line-height: 1.2;
}

.cashout-btn {
  background-color: #569c6f !important;
  color: white !important;
  min-height: 24px !important;
  height: 35px !important;
  border-radius: 0 !important;
  text-transform: none !important;
  padding: 0 8px !important;
}

::v-deep(.v-expansion-panel-text__wrapper) {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
