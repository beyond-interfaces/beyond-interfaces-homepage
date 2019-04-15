<template>
    <Layout>
        <div class='content'>
            <section id='section-info-graphic'>
                <div class='container'>
                    <h1 class='text-bi-purple'>What we do:</h1>
                </div>
                <ProcessGraphic id='info-graphic-container' class='-mt-8'></ProcessGraphic>
            </section>

            <section id='section-info' class=''>
                <div class="container px-16">
                    <p class='w-1/2'>Das Web ist mehr als eine Oberfläche. Wir durchdenken alle Ebenen einer erfolgreichen Webanwendung und begleiten Sie von Projektstart bis zur Betrieb der Anwendung mit unserem Know-How und unserer langjährigen Erfahrung und dö-dö-dö. <a>Erkunden Sie die Grafik mit der Maus um mehr zu erfahren.</a></p>
                </div>
            </section>

            <section id='section-hiring' class='mt-16'>
                <div class="container">
                    <h1 class='text-bi-green'>We are hiring!</h1>
                    <div class='container flex flex-column flex-stretch'>
                        <div class='w-3/5'>
                            <p>Du hast schon einen Gürtel in Code-Fu, willst dein UX-Jitsu verbessern oder möchtest alle 36 Kammern von Beginn an durchschreiten? Wir bieten dir eine attraktive Stelle in einem feinen interdisziplinären Dojo mit erfahrenen Meistern ihrer Zunft!</p>
                        </div>
                        <div class='w-2/5 text-bi-green'>
                            <ul>
                                <li>Senior Frontend Developer</li>
                                <li>Junior Developer</li>
                                <li>Junior UX Designer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
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
<style>
#section-hiring {
    position: relative;
}

#section-hiring::before {
    content: '';
    position: absolute;
    top: 3rem;
    left: 0;
    width: 100%;
    height: 220px;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 220' preserveAspectRatio='none'><rect width='100%' height='100%' x='0' y='0' fill='%23F7F7F7' transform='translate(-200, 0) skewX(4)'/></svg>") no-repeat;
    z-index: -1;
}
</style>
