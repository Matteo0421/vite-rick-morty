<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    },
    methods:{
      startSearch(){
        this.store.queryParams= {
          count: 20,
          pages: 0,
          name
        }
        this.$emit('startSearch')
      }
    }
    
  }
</script>


<template>
  <div class="text-center my-5  ">
    <h1>- Ricky&Morty -</h1>

    <div class="search-container">
      <input type="text" id="searchInput" placeholder="Cerca il personaggio per Nome" @change="startSearch" >
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>