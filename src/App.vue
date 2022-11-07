<template>
    <TheHeader @toggle-component="changeSelectedComponent"/>
    <main>
      <component :is="selectedComponent" />
    </main>
  </template>
 


<script>
import TheHeader from './components/layout/TheHeader.vue'
import PlantList from './components/plants/PlantList.vue'
import AddPlant from './components/plants/AddPlant.vue'
import TheBlog from './components/blog/TheBlog.vue'
import TheGuide from './components/guide/TheGuide.vue'

    export default {
        components: {TheHeader, PlantList, AddPlant, TheBlog, TheGuide},
        data(){
            return {selectedComponent: PlantList}
            
        },
        methods: {
            changeSelectedComponent(cmp){
                console.log(cmp)
                this.selectedComponent = cmp
            }
        }
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
    width: 90%;
    max-width: 80rem;
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

a {
    text-decoration: none;
    color: rgb(0, 119, 170);
}

header a {
    color: rgb(212, 120, 14);
}


.alert {
    background-color: var(--color-error-100);
    border-radius: var(--border-radius-small);
    color: var(--color-error-500);
    padding: var(--space-4);
}

.alert h2 {
    font-size: 1rem;
    margin: var(--space-2) 0;
    text-transform: uppercase;
}

.alert p {
    margin: var(--space-2) 0;
}

.badge {
    margin-left: var(--space-2);
    padding: 0.15rem var(--space-4);
    border-radius: 10rem;
    background-color: var(--color-primary-500);
    color: var(--color-primary-500-contrast);
}

.currency::before {
    content: "$";
}
</style>
