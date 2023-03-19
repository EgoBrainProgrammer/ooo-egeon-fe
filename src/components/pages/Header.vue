<template>
    <v-app-bar app flat :height="props.height">
        <v-row no-gutters :class="$isMobile ? 'ma-2' : null">
            <v-col cols="0" lg="1" class="d-none d-lg-block">
            </v-col>
            <v-col cols="2" lg="1" class="pointer d-flex align-center" @click="$router.push('/')">
                <v-img src="/logo.png" contain :height="$isMobile ? props.height / 2 : props.height" />
            </v-col>
            <v-col cols="6" lg="2" class="pointer d-flex align-center" @click="$router.push('/')">
                <span class="text-body-2 text-sm-h5 mr-5" style="font-family: Andale Mono, monospace; line-height: 100%;">{{ $store.getters.orgName }}</span>
            </v-col>
            <v-col class="d-none d-lg-flex align-center">
                <span v-for="(link, idx) in links" :key="idx" class="mx-12 pointer text-h6"
                    @click="$router.push(link.route)">
                    {{ link.text }}
                </span>
            </v-col>
            <v-col class="d-flex d-lg-none align-center justify-end">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon flat size="x-small"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="(link, idx) in links" :key="idx">
                            <v-list-item-title class="text-caption" style="cursor: pointer" @click="$router.push(link.route)">{{ link.text
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
};
</script>

<script setup>
import { defineProps, inject } from "vue";

import { findIfNull } from "@/components/utils";

const props = defineProps({
    height: {
        type: Number
    }
});

//--Common constants--
const links = [
    {
        text: "Главная",
        route: "/",
    },
    // {
    //     text: "Проекты и решения",
    //     route: "/projects",
    // },
    // {
    //     text: "Партнеры",
    //     route: "/partners",
    // },
    // {
    //     text: "Контакты",
    //     route: "/contacts",
    // },
    // {
    //     text: "О нас",
    //     route: "/about",
    // },
];

const footerlinks = [

];

const organization = inject("organization");
</script>