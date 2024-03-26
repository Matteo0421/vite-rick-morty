<script>
import { store } from '../../data/store';
  export default {
    data(){
      return{
        store
      }
    },
    methods:{
      nextPage(){
        this.store.pageInfo.counter++;
        this.store.pageInfo.pages = this.store.pageInfo.counter

        console.log(store.queryParams);
      }

    }
  }
</script>

<template>
  <div class="text-center my-5">
    pagina {{ store.pageInfo.counter }} di {{ store.pageInfo.totalPages }} 
    <button class="btn btn-success mx-3"
    v-if="store.pageInfo.counter >  1"

    > prev </button>
    <button class="btn btn-success "
    v-if="store.pageInfo.counter + 1 < store.pageInfo.totalPages"
    @click="nextPage"
    > next </button>


  </div>
</template>


<style lang="scss" scoped>

</style>