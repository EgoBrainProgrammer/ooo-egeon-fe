<template>
    <div class="ma-4 text-center">
        <span class="font-weight-medium" :style="{ fontSize: mobile ? '128px' : '350px' }">404</span>
        <h3 class="mb-12">Этой страницы не существует</h3>
        <v-btn
            depressed
            color="primary"
            @click="
                () => {
                    $router.push('/');
                }
            "
            >ВЕРНУТЬСЯ НА ГЛАВНУЮ</v-btn
        >
    </div>
</template>

<script setup>
import { inject } from "vue";

const mobile = inject("mobile");
</script>