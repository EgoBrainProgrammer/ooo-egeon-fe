<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <!-- <div :class="`${$isMobile ? '' : 'w-75'}`"> -->
            <v-card class="cardColor ma-1 ma-lg-8">
                <!-- <div class="text-h6 text-lg-h3 text-center mt-8 font-weight-black text-indigo textshadow">{{ title }}</div>
                <ul class="text-body-1 text-lg-h4 ma-14 font-weight-black text-indigo textshadow"> -->
                <div class="text-h6 text-lg-h3 text-center mt-8 font-weight-black">{{ title }}</div>
                <ul class="text-body-1 text-lg-h4 ma-14 font-weight-black">
                    <li v-for="(li, idx) in services" :key="idx" class="mt-4">
                        {{ li }}
                    </li>
                </ul>
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
import { useRoute } from "vue-router";
import { ajaxGet } from "@/ajax";

//--Pure constants--
const route = useRoute();

const text = ref("");

//--Hooks--
onMounted(() => {
    ajaxGet(
        "/works",
        route.query.id,
        (response) => {
            if ([200, 201].includes(response.status))
                text.value = response.data;
        }
    );
});
</script>