<template>
 <header id="main-header">
    <div id="logo"><a href="/">Fear the Lettuce </a></div>

    <nav>
        <ul class="nav-items">
        <nav-item v-for="nav of navItems" :navData="nav" @toggle-component="toggleSelectedComponent"></nav-item>
        </ul>
    </nav>

    <button id="hamburger-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
    </button>
</header>
<!-- <aside>
    <mobile-menu id="mobile-menu" >
        <nav>
            <ul class="nav-items">
                <nav-item v-for="nav of navItems" :navData="nav"></nav-item>
            </ul>
        </nav>
    </mobile-menu>
</aside> -->
</template>
<script>
import NavItem from './NavItem.vue'
import MobileMenu from './MobileMenu.vue'

export default {
    components: {NavItem, MobileMenu},
    data() {
        return {
            navItems: {
                home: {label: 'Home', componentName:'PlantList'},
                plants: {label: 'Plants', componentName:'PlantList'},
                addPlant: {label: 'Add Plant',componentName: 'AddPlant'},
                guide: {label: 'Guide', componentName:'TheGuide'},
                blog: {label: 'Blog',componentName:'TheBlog'},
                login: {label: 'Login', componentName:'TheLogin',}

            },
            showMobileMenu: false,
        }
    },
    methods: {
        toggleMobileMenu(){
            this.showMobileMenu = !this.showMobileMenu
        },
        toggleSelectedComponent(cmp){
            this.$emit('toggle-component',cmp)
        },
    }
}
</script>

<style scoped>

#main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 90rem;
        height: 5rem;
        margin: 0 auto;
        padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(212, 136, 14);
    background-color: rgb(37, 34, 31);
}

#logo a {
    font-weight: bold;
    font-size: 2rem;
}

#main-header nav {
    display: none;
}

.nav-items {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: nowrap;
}



.nav-items button {
    cursor: pointer;
    font: inherit;
    border: 1px solid rgb(253, 214, 183);
    border-radius: 4px;
    background-color: transparent;
    padding: 0.5rem 1rem;
}

#hamburger-menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    background-color: transparent;
    padding: 0;
}

#hamburger-menu-btn span {
    width: 2.25rem;
    height: 0.2rem;
    background-color: rgb(207, 201, 195);
}

#mobile-menu {
    position: fixed;
    top: 5rem;
    left: 0;
    height: calc(100vh - 5rem);
    width: 100%;
    background-color: rgb(31, 26, 22);
    display: flex;
    flex-direction: column;
    align-items: center;
}

#mobile-menu.open {
    display: flex;
}

#mobile-menu nav {
    height: 20rem;
    width: 90%;
    margin: 1rem auto;
}

#mobile-menu .nav-items a,
#mobile-menu .nav-items button {
    font-size: 1.75rem;
    color: rgb(253, 214, 183);
}

@media (min-width: 48rem) {
    main {
        margin-top: 0rem;
    }

    #main-header {
        position: static;
    }

    #main-header nav {
        display: block;
    }

    .nav-items button {
        color: rgb(212, 136, 14);
        border-color: rgb(212, 136, 14);
    }

    #hamburger-menu {
        display: none;
    }

    #mobile-menu {
        display: none;
    }

    /* .nav-items a {
        padding: 0.5rem 1rem;
        border-radius: 4px;
    } */

    .nav-items {
        flex-direction: row;
    }

    /* .nav-items a:hover,
    .nav-items a:active {
        background-color: rgb(63, 60, 58);
    } */
}
</style>