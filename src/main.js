import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.css'

import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faHouse, faUser, faCalendar, faPersonRunning, faBook, faSchool, faCrosshairs, faMoneyCheckDollar, faChalkboardTeacher, faUsers, faBox } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone, faEnvelope, faHouse, faUser, faCalendar, faPersonRunning, faBook, faSchool, faCrosshairs, faMoneyCheckDollar, faChalkboardTeacher, faUsers, faBox, faWhatsapp, faFacebook, faInstagram, faYoutube)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
