<template>
	<div class="todolist">
		<h2>{{title}}</h2>
		<input type="text" v-model="newItem" v-on:keyup.enter='addNew(newItem)'>
		<ol>
			<li v-for='item in todos' v-bind:class='{done:item.done}' v-on:click='done(item)'>{{item.todo}}</li>
		</ol>
	</div>
</template>

<script>
import Store from './store'
export default{
	name: 'v_todo',
  	data () {
	    return {
	      title:'感受Vue的魔力',
	      newItem:'',
	      todos:Store.get()
	    }
  	},
  	methods:{
  		done(item){
  			item.done = !item.done
  		},
  		addNew(newItem){
  			if(newItem == '') return
  			this.todos.push({
  				todo:newItem,
  				done:false
  			})
  			this.newItem = ''
  		}
  	},
  	watch:{
  		todos:{
  			handler:function () {
  				Store.save(this.todos)
  			},deep:true
  		}
  	}

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.todolist input{
		width:80%;
		height: 40px;
		padding:3px 6px;
		line-height: 34px;
		font-size: 20px;
	}
	.todolist ol li{
		line-height: 40px;
		font-size: 28px;
		cursor: default;
	}
	.todolist ol li:hover{
		background-color: rgba(7,17,27,0.2);
	}
	.todolist ol li.done{
		text-decoration: line-through;
		color: rgba(7,17,27,0.2)
	}
</style>