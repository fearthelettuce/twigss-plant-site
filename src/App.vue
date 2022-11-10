<template>
    <TheHeader />
    <main>
        <router-view></router-view>
    </main>
</template>
 


<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
    components: { TheHeader },
}
</script>


<style >
* {
    box-sizing: border-box;
}

html {
    font-family: 'Righteous', 'sans-serif';
}

body {
    background-color: rgb(37, 34, 31);
    color: rgb(207, 201, 195);
    margin: 0;
}

main {
    width: 100%;
    max-width: 110rem;
    margin: 0 auto;
}

h2 {
    font-size: 18px;
    font-weight: bold;
}

p {
    font-size: 14px;
}

ul,
ol {
    list-style: none;
    margin: 0;
    padding: 0;
}

a,
a:visited {
    text-decoration: none;
    color: inherit;
}

header a {
    color: rgb(103, 202, 37);
}

.currency::before {
    content: "$";
}
</style>
