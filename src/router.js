import { createRouter, createWebHistory } from 'vue-router';
import PlantList from './views/PlantList.vue'
import AddPlant from './components/plants/AddPlant.vue'
import PlantDetails from './components/plants/PlantDetails.vue'
import TheBlog from './components/blog/TheBlog.vue'
import TheGuide from './views/TheGuide.vue'

const routesArr = [
    { path: '/', redirect: '/plants' },
    { path: '/plants', component: PlantList, headerLabel: 'Plants' },
    { path: '/plants/:id', component: PlantDetails, props: true },
    { path: '/plants/new', component: AddPlant, headerLabel: 'Add Plant' },
    { path: '/plants/update/:id', component: AddPlant, props: true },
    { path: '/guide', component: TheGuide, headerLabel: 'Care Guide' },
    { path: '/blog', component: TheBlog, headerLabel: 'Blog' },
    { path: '/:notFound(.*)', redirect: '/' }
]

const router = createRouter({
    routes: routesArr,
    history: createWebHistory(),
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } return {
            left: 0, top: 0
        }
    }
});

export { router, routesArr };