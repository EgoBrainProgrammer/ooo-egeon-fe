<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <div class="d-flex justify-center">
            <v-card class="cardColor ma-2 ma-sm-12 pa-2 px-sm-12">
                <div class="text-h4 text-lg-h2 text-center my-16 font-weight-black">Контакты</div>
                <div class="ma-lg-12">
                        <v-row v-for="(item, idx) in organization" :key="idx" class="my-2">
                            <v-chip class="bigchip text-body-1 text-lg-h4 font-weight-medium pa-3 ma-4 wsspan"
                                variant="outlined"
                                @click="() => { if (item.href) $store.dispatch('opentab', item.href); }"><v-icon
                                    v-if="item.icon" class="mr-2">{{ item.icon }}</v-icon>{{ item.data }}</v-chip>
                        </v-row>
                </div>
                <div style="position:relative;overflow:hidden;">
                    <a href="https://yandex.ru/maps/20164/holmsk/?utm_medium=mapframe&utm_source=maps"
                        style="color:#eee;font-size:12px;position:absolute;top:0px;">Холмск</a>

                    <a href="https://yandex.ru/maps/20164/holmsk/house/sovetskaya_ulitsa_71/ZU0EaAdkTk0FXEJuZGJxdXRhbQo=/?ll=142.049199%2C47.048408&utm_medium=mapframe&utm_source=maps&z=18.2"
                        style="color:#eee;font-size:12px;position:absolute;top:14px;">Советская улица, 71</a>

                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=142.049199%2C47.048408&mode=whatshere&whatshere%5Bpoint%5D=142.047659%2C47.048144&whatshere%5Bzoom%5D=17&z=18.2"
                        width="100%" :height="$isMobile ? 400 : 600" frameborder="1" allowfullscreen="true" style="position:relative;" />
                </div>
            </v-card>
        </div>
    </v-parallax>
</template>

<script>
export default {
    name: "Contacts",
};
</script>

<script setup>
import { inject } from "vue";

//--Pure constants--
const organization = inject("organization");
</script>