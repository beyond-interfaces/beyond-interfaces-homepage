<template>
    <div class="layout">
        <header class="header">
            <g-link to="/">
                <g-image src="~/assets/beyond-interfaces-logo.png"/>
            </g-link>

            <h3 class="subheadline">Enterprise UX &amp; Development</h3>
        </header>
        <slot/>
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
body {
    font-family: ff-dax-pro-wide,sans-serif;
    font-weight: 300;
    font-style: normal;
    margin:0;
    padding:0;
    line-height: 1.5;
}

.layout {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
}

.subheadline {
    text-transform: uppercase;
}
</style>
