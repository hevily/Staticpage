const Storage_Key = 'todolist'
export default {
	get(){
		return JSON.parse(window.localStorage.getItem(Storage_Key) || '[]')
	},
	save(data){
		window.localStorage.setItem(Storage_Key,JSON.stringify(data));
	}
}