import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'

//import icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faUser, faBell, faMessage, faRightFromBracket, faPlus, 
    faEllipsisV, faMagnifyingGlass, faUserMinus, faEye, faPenToSquare, faUserPlus,
    faArrowLeft, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse,faUser, faBell,faMessage,faRightFromBracket, faPlus,
     faEllipsisV, faMagnifyingGlass, faUserMinus, faEye, faPenToSquare, faUserPlus,
        faArrowLeft, faCheck, faXmark     );

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
