import { createRouter, createWebHistory } from 'vue-router';
import PlantList from './components/plants/PlantList.vue'
import AddPlant from './components/plants/AddPlant.vue'
import TheBlog from './components/blog/TheBlog.vue'
import TheGuide from './components/guide/TheGuide.vue'

const routesArr = [
    { path: '/', component: PlantList, headerLabel: 'Home' },
    { path: '/plants', component: PlantList, headerLabel: 'Plants' },
    { path: '/plants/addPlant', component: AddPlant, headerLabel: 'Add Plant' },
    { path: '/plants/updatePlant', component: AddPlant },
    { path: '/guide', component: TheGuide, headerLabel: 'Care Guide' },
    { path: '/blog', component: TheBlog, headerLabel: 'Blog' }
]

const router = createRouter({
    routes: routesArr,
    history: createWebHistory(),
});

export { router, routesArr };