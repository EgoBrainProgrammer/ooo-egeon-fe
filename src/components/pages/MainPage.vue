<template>
    <v-parallax src="/pictures/main.jpg" height="100%">
        <!-- <v-card class="ma-8 cardColor"> -->
        <div class="d-flex justify-center mt-1">
            <div :class="`text-h5 text-lg-h4 text-center font-weight-black text-indigo ${$isMobile ? 'w-75' : 'w-50'}`"
                :style="$isMobile ? '' : 'line-height: 275%;'">
                <!-- {{ $store.getters.orgNameTitle }} -->
                Общество с ограниченной ответственностью
                <div class="text-h5 text-lg-h2 font-weight-bold">
                    «ЭГЕОН»
                </div>
            </div>
        </div>
        <div class="mt-4">
            <template v-for="(row, idx) in works" :key="idx">
                <v-row class="mx-2 mx-sm-16">
                    <v-col :cols="$isMobile ? 12 : cols" v-for="(col, icol) in row" :key="icol">
                        <v-hover>
                            <template v-slot:default="{ isHovering, prps }">
                                <v-card height="242" class="pointer" v-bind="prps" :elevation="isHovering ? 16 : 4"
                                    @click="$router.push('/ourworks?work=' + col.id)">
                                    <v-carousel cycle :show-arrows="false" hide-delimiters height="242">
                                        <v-carousel-item v-for="(slide, i) in col.pictures" :key="i">
                                            <v-sheet height="100%" tile>
                                                <div class="d-flex fill-height justify-center align-center text-start">
                                                    <v-img :src="`/pictures/works/${slide}`" height="242" cover>
                                                        <div class="h-100 d-flex align-end pa-4 wsspanw text-h6">
                                                            {{ col.title }}
                                                        </div>
                                                    </v-img>
                                                </div>
                                            </v-sheet>
                                        </v-carousel-item>
                                    </v-carousel>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                </v-row>
            </template>
        </div>
    </v-parallax>
</template>

<script>
export default {
    name: "MainPage",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { ajaxGetStatic } from "@/ajax";

const works = ref([]);
const cols = ref(12);

//--Hooks--
onMounted(() => {
    ajaxGetStatic("/ourworks.json", (response) => {
        works.value = response.data;
        let max = 0;
        works.value.forEach(x => { if (x.length > max) max = x.length });
        cols.value = 12 / max;
    });
});
</script>