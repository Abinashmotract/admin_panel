<template>
    <v-footer class="footer" elevation="0">
        <v-container fluid class="container-fluid-5 pa-0">
            <v-row class="row5" no-gutters>
                <v-col cols="12" class="text-center">
                    <div class="mt-2 gt">
                        <v-icon-btn text class="pa-0 ma-1 icon-btn" @click="handle18PlusClick">
                            <v-img src="https://wver.sprintstaticdata.com/v25/static/front/img/18plus.png"
                                lazy-src="https://wver.sprintstaticdata.com/v25/static/front/img/18plus.png" height="50"
                                width="50" contain />
                        </v-icon-btn>
                        <v-icon-btn text class="pa-0 ma-1 icon-btn" href="https://www.gamcare.org.uk/" target="_blank">
                            <v-img src="https://wver.sprintstaticdata.com/v25/static/front/img/gamecare.png"
                                lazy-src="https://wver.sprintstaticdata.com/v25/static/front/img/gamecare.png"
                                height="50" width="50" contain />
                        </v-icon-btn>
                        <v-icon-btn text class="pa-0 ma-1 icon-btn" href="https://www.gamblingtherapy.org/en"
                            target="_blank">
                            <v-img src="https://wver.sprintstaticdata.com/v25/static/front/img/gt.png"
                                lazy-src="https://wver.sprintstaticdata.com/v25/static/front/img/gt.png" height="50"
                                width="50" contain />
                        </v-icon-btn>
                    </div>
                    <div class="mt-3 copyright">
                        © Copyright {{ new Date().getFullYear() }}. All Rights Reserved.
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'LoginFooter',
    methods: {
        handle18PlusClick() {
            console.log("18+ icon clicked");
            // Optional: show dialog
        }
    }
}
</script>

<style scoped>
.footer {
    padding: 20px 0;
    width: 100%;
    background-color: transparent !important;
    /* Ensures no override from Vuetify defaults */
}

.container-fluid-5 {
    padding: 0 15px;
}

.gt {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.icon-btn {
    background: transparent !important;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 0.2s ease;
}

.icon-btn:hover {
    transform: scale(1.05);
}

.copyright {
    color: #aaa;
    font-size: 0.875rem;
    margin-top: 8px;
}

.row5 {
    margin-right: -15px;
    margin-left: -15px;
}
</style>
