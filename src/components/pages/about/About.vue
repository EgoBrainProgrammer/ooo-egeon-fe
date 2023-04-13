<template>
    <v-parallax :src="`/pictures/work${Math.round(Math.random() * 4 + 1)}.jpg`" height="100%">
        <!-- <div class="d-flex justify-center">
            <v-card class="cardColor ma-2 ma-sm-8 pa-2 px-sm-12 text-h3 wsspan font-weight-medium"> -->
        <div class="ma-2 ma-sm-8 pa-2 px-sm-12 text-h3 wsspan font-weight-medium">
                <div class="text-center text-h4 text-lg-h2 my-2 my-sm-16 font-weight-black">О компании</div>
                <p class="my-4 text-body-1 text-lg-h4 text-justify">Общество с ограниченной ответственностью «ЭГЕОН» является молодой и перспективно развивающейся компанией,
                    ведущей свою деятельность с 2020 года.</p>
                <p class="my-4 text-body-1 text-lg-h4 text-justify">Мы ориентированы на удовлетворение спроса широкого круга Заказчиков от крупных нефтегазовых компаний до
                частных потребителей.</p>
                <p class="my-4 text-body-1 text-lg-h4 text-justify">Приоритетом нашей компании является обеспечение гарантий надежности во всех аспектах сотрудничества.
                Основная задача - развитие и обеспечение долгосрочной и стабильной работы. Этому способствует постоянное
                совершенствование знаний в отраслевой спецификации и повышение профессионализма сотрудников компании ООО
                «ЭГЕОН».</p>
                <p class="my-4 text-body-1 text-lg-h4 text-justify">Наша компания всегда открыта для диалога с существующими и потенциальными Заказчиками. Мы оперативно
                реагируем на замечания и постоянно повышаем качество предоставляемых нами услуг.</p>
            </div>
            <!-- </v-card>
        </div> -->
    </v-parallax>
</template>

<script>
export default {
    name: "About",
};
</script>

<script setup>
</script>

<style scoped>
p {
    text-indent: 2em;
}
</style>