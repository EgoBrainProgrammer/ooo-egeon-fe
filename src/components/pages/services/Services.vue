<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-lg-8 pa-2 px-sm-12">
                <div class="text-h6 text-lg-h3 text-center mt-8 font-weight-black">{{ title }}</div>
                <!-- <ul class="text-body-1 text-lg-h4 ma-14 font-weight-black">
                    <li v-for="(li, idx) in services" :key="idx" class="mt-4">
                        {{ li }}
                    </li>
                </ul> -->
                <v-row v-for="(item, idx) in services" :key="idx" class="my-2">
                    <v-chip class="bigchip text-body-1 text-lg-h4 font-weight-medium pa-3 ma-4 wsspan"
                        variant="outlined"
                        style="min-height: 128px"
                        @click="() => {}">{{ item }}</v-chip>
                </v-row>
            </v-card>
        </div>
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