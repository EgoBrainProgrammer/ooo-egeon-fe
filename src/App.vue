<template>
    <v-app>
        <Header :height="headerHeight"></Header>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup>
import app from "@/main";
import { ref, provide, onMounted } from "vue";
import { useDisplay, useTheme } from "vuetify";
import { ajaxGetStatic } from "@/ajax";

//--Components--
import Header from "@/components/pages/Header.vue";

//--Common constants--
const { mobile } = useDisplay();
app.config.globalProperties.$isMobile = mobile.value;
provide("mobile", mobile);
const headerHeight = 124;

//--Reactive constants--
const showsnackbar = ref(false);
const organization = ref([]);
provide("organization", organization);

//--Hooks--
onMounted(() => {
    ajaxGetStatic("/organization.json", (response) => {
        organization.value = response.data;
    });
});
</script>

<style>
p,
ul {
    line-height: 1.75;
}

.pointer {
    cursor: pointer;
}

.hover1:hover {
    color: black;
}

.hover2:hover {
    color: white;
}

.hovershd:hover {
    text-shadow: 3px 3px 2px black;
}

.hovershd1:hover {
    text-shadow: 2px 2px 2px black;
}

.hovershd2:hover {
    text-shadow: 1px 1px 1px black;
}

.wsspan {
    color: black;
    text-shadow: 1px 1px 6px grey;
    /*color: white;
    text-shadow: 2px 2px 3px black;*/
}

.wsspanw {
    color: white;
    text-shadow: 2px 2px 3px black;
}

.textshadow {
    text-shadow: 1px 1px 2px black;
}

.cardColor {
    /* background-color: rgba(200, 200, 200, 0.5) !important; */
    background-color: rgba(255, 255, 255, 0.9) !important;
    border-color: white !important;
}

.bigchip {
    height: auto;
    min-height: 72px;
    white-space: pre-wrap;
    background-color: gray;
    border-radius: 15px;
    border-width: 2px;
}
</style>