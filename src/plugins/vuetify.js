import 'material-design-icons-iconfont/dist/material-design-icons.css' //Biblioteca para o uso dos icons
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'mdi'
    }
});
