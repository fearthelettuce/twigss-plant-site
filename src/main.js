import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router.js'
import BaseButton from './components/UI/BaseButton.vue';
import BaseToggle from './components/UI/BaseToggle.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);
app.use(router);
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('BaseDialog', BaseDialog);
app.component('BaseToggle', BaseToggle)

app.mount('#app');


