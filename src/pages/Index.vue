<template>
    <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

        <h1 class="headline">What we do:</h1>

        <div class="content">
            <ProcessGraphic></ProcessGraphic>
            <p>Das Web ist mehr als eine Oberfläche. Wir durchdenken alle Ebenen einer erfolgreichen Webanwendung und begleiten Sie von Projektstart bis zur Betrieb der Anwendung mit unserem Know-How und unserer langjährigen Erfahrung und dö-dö-dö. Erkunden Sie die Grafik mit der Maus um mehr zu erfahren.</p>
        </div>
    </Layout>
</template>

<script>
import ProcessGraphic from '~/components/ProcessGraphic';

export default {
    metaInfo: {
        title: 'beyond / interfaces'
    },
    components: {
        ProcessGraphic
    }
};
</script>

<style lang="scss">
.headline {
    color: $bi-color-purple;
    font-weight: 400;
    font-size: 52px;
}
</style>
