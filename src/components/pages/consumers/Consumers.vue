<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-sm-8 px-2 px-sm-12">
                <!-- <v-list>
                    <v-list-header>Наши заказчики</v-list-header> -->
                    <div class="text-h4 text-lg-h2 text-center my-16 font-weight-black">Наши заказчики</div>
                    <template v-for="(consumer, idx) in consumers" :key="idx">
                        <!-- <v-list-item :title="consumer.title"> -->
                            <div class="text-h6 text-lg-h3 text-center mt-8 font-weight-black">{{ consumer.title }}</div>
                            <div class="d-flex justify-center">
                                <v-img v-for="(img, idx) in consumer.pictures" :key="idx" class="ma-4 mb-8 rounded-lg"
                                    :src="`/pictures/${img}`" max-width="50%"></v-img>
                            </div>
                        <!-- </v-list-item> -->
                        <v-divider color="#000000" thickness="6" v-if="idx < consumers.length - 1"></v-divider>
                    </template>
                <!-- </v-list> -->
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