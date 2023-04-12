<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <!-- <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-lg-8 pa-4 pa-sm-16">
                <div class="text-h6 text-lg-h3 text-center mt-sm-8 font-weight-black">Сертификаты и лицензии</div>
                <v-img v-if="$isMobile" src="/pictures/certooo.png" class="mt-sm-16"></v-img>
                <img v-else src="/pictures/certooo.png" class="mt-sm-16"
                    :style="$isMobile ? 'min-width:100%' : 'min-width:75%'" />
                <v-btn prepend-icon="mdi-file-pdf-box" class="mt-4"
                    @click="$store.dispatch('open', '/files/СертификатСоответсвияОООЭГЕОН.pdf')">Открыть PDF</v-btn>
            </v-card>
        </div> -->        
        <v-card class="cardColor ma-2 pb-sm-6 ma-sm-8 pa-2 px-sm-12 text-h3 wsspan font-weight-medium">
            <div class="text-center text-h4 text-lg-h2 my-2 my-sm-16 font-weight-black">Сертификаты и лицензии</div>
            <!-- <v-container class="text-center wsspan"> -->
                <template v-for="(row, idx) in certs" :key="idx">
                    <v-row align="center">
                        <v-col :cols="$isMobile ? 12 : cols" v-for="(col, icol) in row" :key="icol">
                            <v-hover>
                                <template v-slot:default="{ isHovering, prps }">
                                    <v-card height="242" class="pointer" v-bind="prps" :elevation="isHovering ? 16 : 4"
                                        @click="$store.dispatch('open', `/files/${col.file}`)">
                                        <v-carousel cycle :show-arrows="false" hide-delimiters height="242">
                                            <v-carousel-item v-for="(slide, i) in col.pictures" :key="i">
                                                <v-sheet height="100%" tile>
                                                    
                                                        <v-img :src="`/pictures/certs/${slide}`" height="242" cover>
                                                            <div class="fill-height d-flex align-end">
                                                                <v-chip class="wsspanw text-h6 ma-2"
                                                                    style="border-radius: 5px; background-color: rgba(158, 158, 158, .5);">
                                                                    {{ col.title }}
                                                                </v-chip>
                                                            </div>
                                                        </v-img>
                                                    
                                                </v-sheet>
                                            </v-carousel-item>
                                        </v-carousel>
                                    </v-card>
                                </template>
                            </v-hover>
                        </v-col>
                    </v-row>
                </template>
            <!-- </v-container> -->
        </v-card>
    </v-parallax>
</template>

<script>
export default {
    name: "CertsLicenses",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { ajaxGetStatic } from "@/ajax";

const certs = ref([]);
const cols = ref(12);

//--Hooks--
onMounted(() => {
    ajaxGetStatic("/certs.json", (response) => {
        certs.value = response.data;
        let max = 0;
        certs.value.forEach(x => { if (x.length > max) max = x.length });
        cols.value = 12 / max;
    });
});
</script>