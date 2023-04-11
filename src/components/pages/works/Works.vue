<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-sm-8 px-2 px-sm-12">
                <div class="text-h6 text-lg-h3 text-center mt-8 font-weight-black">{{ work.title }}</div>
                <div class="text-body-1 text-lg-h4 ma-lg-14 font-weight-black">
                    <div v-html="work.text"></div>
                </div>
                <!-- <v-img v-for="(img, idx) in work.pictures" :key="idx" :min-width="$isMobile ? '100%' : '75%'" class="my-2 my-sm-8" :src="`/pictures/works/${img}`"></v-img> -->
                <div v-for="(img, idx) in work.pictures" :key="idx"
                    class="d-flex justify-center my-2 my-sm-12">
                    <img :src="`/pictures/works/${img}`" :style="$isMobile ? 'min-width:100%' : 'min-width:75%'" />
                </div>
            </v-card>
        </div>
    </v-parallax>
</template>

<script>
export default {
    name: "Works",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ajaxGet } from "@/ajax";

//--Pure constants--
const route = useRoute();

//--Reactive constatns--
const work = ref({});

//--Hooks--
onMounted(() => {
    ajaxGet(
        "/works/" + route.query.work,
        null,
        (response) => {
            if ([200, 201].includes(response.status))
                work.value = response.data;
        }
    );
});
</script>