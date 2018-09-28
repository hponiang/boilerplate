import Vue from 'vue'
import module from  './module'
import component from  './component'
import imageAdpter from  './path/imageAdpter'
import path from  './path'
import mixin from  './mixin'



export default {

  init(weex,vue){
    window.vue=vue
    window.eventBus=new Vue()
    vue.prototype.path = path
    module.install(weex,vue)
    component.install(weex,vue)
    mixin.install(weex,vue)
    imageAdpter.install(weex,vue)

  }
}