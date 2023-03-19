import { createStore } from 'vuex'
import common from './modules/common'
import user from './modules/user'
import dictionary from './modules/dictionary'

export default createStore({
	modules: {
		common,
		user,
		dictionary
	}
});