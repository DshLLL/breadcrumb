
import cbBreadcrumb from './breadcrumb'
import cbBreadcrumbItem from './breadcrumb-item'

const Component = {
  install(Vue){
    Vue.component(cbBreadcrumb.name, cbBreadcrumb)
    Vue.component(cbBreadcrumbItem.name, cbBreadcrumbItem)
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('cbBreadcrumb', cbBreadcrumb)
  window.Vue.component('cbBreadcrumbItem', cbBreadcrumbItem)
  window.Vue.use(Component)
}

export default Component
