<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-sm-8 px-2 px-sm-12">
                <div class="text-h4 text-lg-h2 text-center my-16 font-weight-black">Наши заказчики</div>
                <!-- <template v-for="(consumer, idx) in consumers" :key="idx">
                            <div class="text-h6 text-lg-h3 text-center mt-8 font-weight-black">{{ consumer.title }}</div>
                            <div class="d-flex justify-center">
                                <v-img v-for="(img, idx) in consumer.pictures" :key="idx" class="ma-4 mb-8 rounded-lg"
                                    :src="`/pictures/${img}`" max-width="50%"></v-img>
                            </div>
                        <v-divider color="#000000" thickness="6" v-if="idx < consumers.length - 1"></v-divider>
                    </template> -->
                <v-row v-for="(consumer, idx) in consumers" :key="idx" class="my-2">
                    <v-chip class="bigchip text-body-1 text-lg-h4 font-weight-medium pa-3 ma-4 wsspan"
                        variant="outlined"
                        @click="() => {}">{{ consumer.title }}</v-chip>
                </v-row>
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