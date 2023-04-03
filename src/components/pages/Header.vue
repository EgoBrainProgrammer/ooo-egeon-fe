<template>
    <v-app-bar app flat :height="props.height">
        <v-row no-gutters :class="$isMobile ? 'ma-2' : null">
            <v-col cols="0" lg="1" class="d-none d-lg-block">
            </v-col>
            <v-col cols="10" lg="1" class="pointer d-flex align-center" @click="$router.push('/')">
                <v-row no-gutters align="center">
                    <v-col cols="6" lg="12" class="text-center">
                        <!-- <v-img src="/logo.png" :max-height="$isMobile ? props.height / 4 : props.height / 2" /> -->
                        <v-img src="/logo.png" />
                        <span class="d-none d-sm-block text-caption">ООО «ЭГЕОН»</span>
                    </v-col>
                    <v-col cols="6" class="d-block d-sm-none text-center">
                        <span class="text-caption" style="line-height: 100%;">ООО «ЭГЕОН»</span>
                    </v-col>
                </v-row>
            </v-col>
            <!-- <v-col cols="6" lg="2" class="pointer d-flex align-center" @click="$router.push('/')">
                <span class="text-body-2 text-sm-h5 mr-5" style="font-family: Andale Mono, monospace; line-height: 100%;">{{ $store.getters.orgName }}</span>
            </v-col> -->
            <!-- NORMAL -->
            <v-col cols="8" class="d-none d-lg-flex align-center justify-center">
                <span v-for="(link, idx) in links" :key="idx" class="mx-12 pointer text-subtitle-1"
                    @click="$router.push(link.route)">
                    {{ link.text }}
                </span>
            </v-col>
            <v-col cols="2" class="d-none d-lg-flex align-center">
                <v-container>
                    <v-row no-gutters align="center">
                        <v-btn size="small" icon @click="$store.dispatch('opentab',
                            findIfNull(organization, x => x.name == 'phone', 'href').href)">
                            <v-icon>mdi-phone</v-icon>
                        </v-btn>
                        {{ findIfNull(organization, x => x.name == "phone").data }}
                    </v-row>
                    <v-row no-gutters align="center">
                        <v-btn size="small" icon @click="$store.dispatch('opentab',
                            findIfNull(organization, x => x.name == 'email', 'href').href)">
                            <v-icon>mdi-email</v-icon>
                        </v-btn>
                        {{ findIfNull(organization, x => x.name == "email").data }}
                    </v-row>
                </v-container>
            </v-col>
            <!-- MOBILE -->
            <v-col class="d-flex d-lg-none align-center justify-end">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon flat size="x-small"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="(link, idx) in links" :key="idx">
                            <v-list-item-title class="text-caption" style="cursor: pointer"
                                @click="$router.push(link.route)">{{ link.text
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
        text: "О компании",
        route: "/about",
    },
    {
        text: "Услуги",
        route: "/services",
    },
    {
        text: "Наши заказчики",
        route: "/consumers",
    },
    {
        text: "Сертификаты лицензии",
        route: "/certs",
    },
    {
        text: "Контакты",
        route: "/contacts",
    },
];

const organization = inject("organization");
</script>