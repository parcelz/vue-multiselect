import Vue from 'vue'
import Multiselect from './Multiselect'
import multiselectMixin from './multiselectMixin'
import pointerMixin from './pointerMixin'
import VueMask from 'v-mask'
Vue.use(VueMask)

export default Multiselect

export { Multiselect, multiselectMixin, pointerMixin }
