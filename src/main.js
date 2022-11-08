import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router.js'
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);
app.use(router);
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('BaseDialog', BaseDialog);

app.mount('#app');


