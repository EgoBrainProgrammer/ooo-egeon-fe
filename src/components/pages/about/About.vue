<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-2 ma-sm-12 pa-2 px-sm-12">
                
            </v-card>
        </div>
    </v-parallax>
</template>

<script>
export default {
    name: "About",
};
</script>

<script setup>
</script>