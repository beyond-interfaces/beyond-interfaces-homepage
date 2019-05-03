<template>
    <Layout>
        <div class='content'>
            <section id='section-what-we-do' class="relative overflow-hidden">
                <div class='container'>
                    <h1 class='text-bi-purple'>What we do:</h1>
                    <!-- <WhatWeDo/> -->
                    <g-image src='~/assets/bif_what-we-do@2x.png'/>
                </div>
                <!-- <ProcessGraphic id='info-graphic-container' class='-mt-8'></ProcessGraphic> -->
            </section>

            <section id='section-info' class='relative'>
                <div class="container">
                    <p class='w-2/3 px-8 -mt-4'>
                        Das Web ist mehr als eine Oberfläche. Wir durchdenken alle Ebenen einer erfolgreichen Webanwendung und begleiten Sie vom Projektstart bis zum Betrieb der Anwendung mit unserem Know-How und unserer langjährigen Erfahrung.<br>
                        <!-- <a>Erkunden Sie die Grafik mit der Maus um mehr zu erfahren.</a> -->
                    </p>
                </div>
            </section>

            <section id='section-hiring' class='relative mt-16'>
                <div class="container">
                    <h1 class='text-bi-green'>We are hiring!</h1>
                    <div class='flex flex-column flex-stretch px-8'>
                        <div class='w-3/5'>
                            <p>
                                Du hast schon einen Gürtel in Code-Fu, willst dein UX-Jitsu verbessern oder möchtest alle 36 Kammern von Beginn an durchschreiten? Wir bieten dir eine attraktive Stelle in einem feinen interdisziplinären Dojo mit erfahrenen Meistern ihrer Zunft!
                            </p>
                        </div>
                        <div class='w-2/5 text-bi-green'>
                            <ul class='ml-8'>
                                <li>
                                    <!-- <span class="text-bi-green">Senior Frontend Developer</span> -->
                                    <g-link class="text-bi-green" to='/jobs#senior-frontend-developer'>Senior Frontend Developer</g-link>
                                </li>
                                <li>
                                    <!-- <span class="text-bi-green">Junior Frontend Developer</span> -->
                                    <g-link class="text-bi-green" to='/jobs#junior-frontend-developer'>Junior Frontend Developer</g-link>
                                </li>
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
import WhatWeDo from '~/assets/bif_what-we-do.svg';

export default {
    components: {
        ProcessGraphic,
        WhatWeDo
    }
};
</script>
<style>
.section-links {
    font-size: 1em;
}

#section-what-we-do::before {
    content: '';
    position: absolute;
    top: 3.4rem;
    left: 18%;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' preserveAspectRatio='none'><rect width='100%' height='100%' x='0' y='0' fill='%23F7F7F7' transform='skewX(4)'/></svg>") no-repeat;
    z-index: -1;
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
