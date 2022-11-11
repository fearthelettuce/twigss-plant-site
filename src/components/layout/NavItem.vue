<template>
    <li>
        <!-- <a :href="navData.path">{{ navData.headerLabel }}</a> -->
        <router-link :to="navData.path">{{ navData.headerLabel }}</router-link>
    </li>
</template>
<!-- //TODO: add logic to only show options for authorized user - navData.isAuthorized navData.isLoggedIn navData.isAdmin -->
<script>
export default {
    props: {
        navData: Object
    },
}
</script>

<style scoped>
li {
    margin: 0 0.5rem;
}

a,
a:visited {
    text-decoration: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    flex-wrap: nowrap;
    display: block;
    color: rgb(103, 202, 37);
}

a:hover,
a:active,
a.router-link-active {
    background-color: rgb(63, 60, 58);
}

a:active {
    transform: scale(0.96);
}
</style>