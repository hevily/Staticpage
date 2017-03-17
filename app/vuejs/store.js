const STORAGE_KEY = 'todo-vuejs'
export default{
	fetch () {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save:function (items) {
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	}
}