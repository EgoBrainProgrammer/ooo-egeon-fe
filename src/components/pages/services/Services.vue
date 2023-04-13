<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <!-- <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-sm-8 px-2 px-sm-12">
                <div class="text-center text-h4 text-lg-h2 my-2 my-sm-16 font-weight-black">{{ title }}</div>
                <v-row v-for="(item, idx) in services" :key="idx" class="my-2">
                    <v-chip class="bigchip text-body-1 text-lg-h4 font-weight-medium pa-3 ma-4 wsspan"
                        variant="outlined"
                        :style="($isMobile ? 'min-width: 90%;' : 'min-width: 100%;') + 'min-height: 138px;'"
                        @click="() => {}"> — {{ item }}</v-chip>
                </v-row>
            </v-card>
        </div> -->
        <!-- <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-sm-8 px-2 px-sm-12"> -->
                <div class="ma-2 ma-sm-8 pa-2 px-sm-12 text-h3 wsspan font-weight-medium">
                <div class="text-center text-h4 text-lg-h2 my-2 my-sm-16 font-weight-black">{{ title }}</div>                
                <template v-for="(item, idx) in services" :key="idx">
                    <div class="my-4 my-sm-8 text-body-1 text-lg-h4 font-weight-medium wsspan text-justify" v-html="item">                        
                    </div>
                </template>
            </div>
            <!-- </v-card>
        </div> -->
    </v-parallax>
</template>

<script>
export default {
    name: "Services",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { ajaxGetStatic } from "@/ajax";

const title = ref("");
const services = ref([]);

//--Hooks--
onMounted(() => {
    ajaxGetStatic("/services.json", (response) => {
        title.value = response.data.title;
        services.value = response.data.services;
    });
});
</script>