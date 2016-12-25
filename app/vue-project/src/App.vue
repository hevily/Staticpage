<template>
  <div id="app">
  <header></header>
    <h1>{{title}}</h1>
    <input type="text" v-model="newitem" v-on:keyup.enter="addNew" >
    <ul>
      <li v-for="item in items" :class="{done:item.done}" 
      @click="todoDone(item)">{{item.label}}</li>
    </ul>
  </div>
</template>
<script>
import Store from './store';
console.log(Store)
  export default{
    data:function () {
      return {
        title:'this is a todo list',
        items:Store.fetch(),
        newitem:''
      }
    },
    methods:{
      todoDone:function (item) {
        item.done = !item.done
      },
      addNew:function () {
        console.log(this.newitem);
        console.log(Store.fetch())
        this.items.push({
          label:this.newitem,
          done:false
        })
        this.newitem = '';
      }
    },
    watch:{
      items:{
        handler:function () {
          Store.save(this.items)
        },
        deep:true
      }
    }
  }
</script>
<style>
  #app{
    max-width: 640px;
    margin:50px auto;
    text-align: center;
  }
  #app ul{
    
  }
  .done{
    text-decoration: underline;
  }
</style>