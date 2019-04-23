<template>
    <div class="layout flex flex-col items-center content-between h-screen overflow-x-hidden relative">
        <header id="header" class="w-full">
            <div class="container flex items-center justify-between pt-8 pb-12">
                <g-link to="/">
                    <Logo/>
                </g-link>

                <nav class="list-reset flex">
                    <!-- <g-link class='mr-6' to='/team'>Team</g-link> -->
                    <g-link class='mr-6' to='/jobs'>Jobs</g-link>
                    <g-link class='mr-6' to='/technologien'>Technologien</g-link>
                    <g-link class='mr-6' to='/trainings'>Trainings</g-link>
                </nav>
            </div>
        </header>

        <main id="main" class="w-full flex-1">
            <slot/>
        </main>

        <footer id="footer" class="w-full h-48 mt-32">
            <FooterBackground class="absolute h-64 w-full"/>
            <div class="container flex pt-12">
                <div id="footer-contact" class="w-3/5 flex leading-tight">
                    <div class="footer-contact__address flex-1">
                        <LineElement class="fill-current text-bi-pink absolute"/>
                        <p class="opacity-50 pl-8">
                            beyond interfaces GmbH & Co KG<br>
                            Eythstrasse 17<br>
                            51103 Köln
                        </p>
                    </div>

                    <div class="footer-contact__phone flex-1">
                        <LineElement class="fill-current text-bi-purple absolute"/>
                        <p class="opacity-50 pl-8">
                            T. 0221 - 922 69 20<br>
                            F. 0221 - 922 69 24<br>
                            M. <a href="mailto:info@beyond-interfaces.com">info@beyond-interfaces.com</a>
                        </p>
                    </div>
                </div>

                <div id="footer-nav" class="w-2/5 pt-20 pl-20">
                    <div class="footer-nav__links flex">
                        <LineElement class="fill-current text-bi-blue absolute"/>
                        <nav class="flex flex-wrap opacity-50 pl-8">
                            <g-link class="w-full" to="/impressum">Impressum</g-link>
                            <!-- <g-link class="w-full" to="/datenschutz">Datenschutzerklärung</g-link> -->
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Logo from '~/assets/bif_logo.svg';
import LineElement from '~/assets/line.svg';
import FooterBackground from '~/assets/footer-background.svg';

export default {
    components: {
        FooterBackground,
        Logo,
        LineElement
    }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;

body {
    font-family: ff-dax-pro-wide,sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 18px;
    margin: 0;
    padding: 0;
    line-height: 2;
}

h1 {
    font-size: config('textSizes.5xl');
    font-weight: 400;
}
h2 {
    font-size: config('textSizes.4xl');
}
h3 {
    font-size: config('textSizes.3xl');
}
h4 {
    font-size: config('textSizes.2xl');
}

a {
    color: config('colors.bi-blue');
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
