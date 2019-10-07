import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
// import ListAdd from '@/components/ListAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        'TodoList':TodoList,
        // 'ListAdd':ListAdd,
      }
    }
  ]
})
