<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-sm-8 px-2 px-sm-12">
                <div class="text-h6 text-lg-h3 text-center mt-8 font-weight-black">{{ work.title }}</div>
                <div class="text-body-1 text-lg-h4 ma-lg-14 font-weight-black">
                        <div v-html="work.text"></div>
                </div>
                <v-img v-for="(img, idx) in work.pictures" :key="idx" class="mb-2" :src="`/pictures/${img}`"></v-img>
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
const text = ref("");
const work = ref({ 
    "id": 7, 
    "title": 
    "Внутренняя отделка", 
    "pictures": ["work5.jpg"], 
    "text": "Текс содержание" 
});

//--Hooks--
onMounted(() => {
    ajaxGet(
        "/works",
        route.query.work,
        (response) => {
            if ([200, 201].includes(response.status))
                text.value = response.data;
        }
    );
});
</script>