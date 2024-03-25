<script>
import Card from './partials/Card.vue';
import {store} from '../data/store';
  export default {
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
  <div class="text-center my-5 container ">
    <div class="row row-cols-3 ">
      <Card v-for=" card in this.store.cardsList"
        :key="card.id"/>

    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>