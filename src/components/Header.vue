<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store,
        name: '',
        status: ''
      }
    },
    methods:{
      startSearch(){
        this.store.queryParams= {
          count: 20,
          pages: 0,
          name: this.name,
          status: this.status

        }
        this.$emit('startSearch')
        console.log(this.store.queryParams)      }
    }
    
  }
</script>


<template>
  <div class="text-center my-5  ">
    <h1>- Ricky&Morty -</h1>

    <div class="search-container">
      <input class="p-1 col-3" type="text" id="searchInput" placeholder="Cerca il personaggio per Nome"  @keyup.enter="startSearch" v-model.trim="name">

      <select class="col-1 p-1 m-3 " v-model="status">
        <option value="">Tutti</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
      </select>

      <button class="btn btn-warning m-3  " @click="startSearch">Cerca</button>

    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>