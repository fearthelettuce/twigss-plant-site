<template>
    <li>
        <a :href="navData.path">{{ navData.headerLabel }}</a>

    </li>
</template>
<!-- //TODO: add logic to only show options for authorized user - navData.isAuthorized navData.isLoggedIn navData.isAdmin -->
<script>
export default {
    props: {
        navData: Object
    },
    methods: {
        selectComponent() {
            this.$emit('toggle-component', this.navData.componentName)
        },
    }
}
</script>

<style scoped>
li {
    margin: 0 0.5rem;
}

a {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    flex-wrap: nowrap;
    display: block;
}

a:hover,
a:active {
    background-color: rgb(63, 60, 58);
}
</style>