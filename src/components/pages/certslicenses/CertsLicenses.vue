<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-1 ma-lg-8 pa-4 pa-sm-16">
                <div class="text-h6 text-lg-h3 text-center mt-sm-8 font-weight-black">Сертификаты и лицензии</div>
                <v-img src="/pictures/certooo.png" class="mt-sm-16"></v-img>
                <v-btn prepend-icon="mdi-file-pdf-box" class="mt-4" @click="$store.dispatch('open','/files/СертификатСоответсвияОООЭГЕОН.pdf')">Открыть PDF</v-btn>
            </v-card>
        </div>
    </v-parallax>
</template>

<script>
export default {
    name: "CertsLicenses",
};
</script>

<script setup>
</script>