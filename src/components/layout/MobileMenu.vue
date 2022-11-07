<template>
    <li>
        <!-- <a :href="navData.url">{{navData.label}}</a> -->
    </li>
</template>
<script>
    export default {
        props: {
            navData: Object
        }
    }
</script>
<style scoped>
    li {
        margin: 0 0.5rem;
    }
    
    a {
        padding: 0.5rem 1rem;
        border-radius: 4px;
    }

    a:hover,
    a:active {
        background-color: rgb(63, 60, 58);
        }
a,
button {
    font-size: 1.75rem;
    color: rgb(253, 214, 183);
}
</style>