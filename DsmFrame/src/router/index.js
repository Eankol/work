import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import errPage from '@/components/pages/errPage'
import dsmEnergyUse from '@/components/pages/EnergyManager/dsmEnergyUse'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    
    {
      path: '/kode/basic/basic.html',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/kode/EnergyManager/DSM_power_consumption/DSM_energy_use.html',
      name: '用能数据',
      component: dsmEnergyUse
    },
    {
      path: '/*',
      name: '404',
      component: errPage
    }
  ]
})
