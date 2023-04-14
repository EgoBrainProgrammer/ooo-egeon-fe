<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="ma-2 ma-sm-8 pa-2 px-sm-12 text-h3 wsspan font-weight-medium">
            <div class="text-center text-h4 text-lg-h2 my-2 my-sm-16 font-weight-black">Наши заказчики</div>
            <template v-for="(consumer, idx) in consumers" :key="idx">
                <div class="my-4 my-sm-8 text-body-1 text-lg-h4 font-weight-medium wsspan text-justify">
                    — {{ consumer.title }}
                </div>
            </template>
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