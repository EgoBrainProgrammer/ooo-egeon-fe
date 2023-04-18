<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="ma-2 ma-sm-8 pa-2 px-sm-12">
            <div class="text-center text-h4 text-lg-h2 my-2 my-sm-16 font-weight-black">{{ title }}</div>
            <template v-for="(item, idx) in services" :key="idx">
                <div class="my-4 my-sm-8 text-body-1 text-lg-h4 font-weight-medium wsspan text-center" v-html="item">
                </div>
            </template>
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