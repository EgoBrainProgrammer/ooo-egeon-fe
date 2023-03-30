<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-sm-8 px-2 px-sm-12">
                <template v-for="(consumer, idx) in consumers" :key="idx">
                    <div class="text-h6 text-lg-h3 text-center mt-8 font-weight-black">{{ consumer.title }}</div>
                    <div class="d-flex justify-center">
                        <v-img v-for="(img, idx) in consumer.pictures" :key="idx" class="ma-4" :src="`/pictures/${img}`"
                            max-width="50%"></v-img>
                    </div>
                </template>
            </v-card>
        </div>
    </v-parallax>
</template>

<script>
export default {
    name: "Consumers",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { ajaxGetStatic } from "@/ajax";

//--Reactive constatns--
const consumers = ref([]);

//--Hooks--
onMounted(() => {
    ajaxGetStatic("/consumers.json", (response) => {
        consumers.value = response.data;
    });
});
</script>