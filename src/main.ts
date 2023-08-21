import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mixin({
  methods: {
    onIntersecting([{ isIntersecting, target }]) {
      target.classList.toggle('active', isIntersecting)
    }
  }
})

app.mount('#app')
