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
  <div class="text-center  container  ">
    <div class="row row-cols-4  p-3">
      <Card v-for=" card in this.store.cardsList"
        :key="card.id"
        :name="card.name"
        :status="card.status"
        :species="card.species"
        :image="card.image"
        />

    </div>
  </div>
</template>



<style lang="scss" scoped>

.container{
  margin: 0 auto;
}

</style>