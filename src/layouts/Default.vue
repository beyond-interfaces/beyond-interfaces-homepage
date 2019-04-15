<template>
    <div class="layout">
        <header id="header">
            <div class="container flex flex-column items-center">
                <g-link to="/">
                    <g-image src="~/assets/beyond-interfaces-logo.png"/>
                </g-link>

                <span class="opacity-50 font-light uppercase font-sm ml-2">Enterprise UX &amp; Development</span>
            </div>
        </header>

        <main id="main">
            <slot/>
        </main>

        <footer id="footer" class="mt-16 pt-12">
            <div class="container flex flex-column">
                <div id="footer-contact" class="w-3/5 flex flex-column leading-tight">
                    <div class="footer-contact__address flex-1 opacity-50">
                        <p>beyond interfaces GmbH & Co KG</p>
                        <p>Eythstrasse 17</p>
                        <p>51103 Köln</p>
                    </div>
                    <div class="footer-contact__phone flex-1 opacity-50">
                        <p>T. 0221 - 922 69 20</p>
                        <p>F. 0221 - 922 69 24</p>
                        <p>M. info@beyond-interfaces.com</p>
                    </div>
                </div>

                <div id="footer-nav" class="w-2/5 pt-20 pl-20">
                    <div class="footer-nav__links flex flex-col">
                        <g-link to="/">Impressum</g-link>
                        <g-link to="/">Datenschutzerklärung</g-link>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<static-query>
query {
    metaData {
        siteName
    }
}
</static-query>

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

#header {
    height: 160px;
}
#footer {
    position: relative;
}
#footer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 260px;
    background: url(../assets/footer-background.svg) no-repeat 50% 50%;
}

#footer-contact div,
#footer-nav div {
    position: relative;
}

#footer-contact div::before,
#footer-nav div::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1.5rem;
    width: 20px;
    height: 80px;
    mask: url(../assets/line.svg) no-repeat;
    mask-size: cover;
}
#footer-nav {}

.footer-contact__address::before {
    background-color: config('colors.bi-pink');
}
.footer-contact__phone::before {
    background-color: config('colors.bi-purple');
}
.footer-nav__links::before {
    background-color: config('colors.bi-blue');
}

</style>
