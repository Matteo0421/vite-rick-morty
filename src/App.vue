<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Paginator from './components/partials/Paginator.vue';
  export default {
    components:{
      Header,
      Main,
      Paginator
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params:store.queryParams
          // {
          //   count: 20,
          //   pages: 0
          // }
        })
        .then(result => {

          this.store.cardsList = [];

          this.store.cardsList = result.data.results;

          this.store.pageInfo.totalPages = result.data.info.pages
          console.log( this.store.cardsList);

          console.log( this.store.pageInfo.pages);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi()
    }
  }
</script>

<template>
  <Header @startSearch="getApi" />
  <Main />
  <Paginator />
</template>



<style lang="scss" >
@use './assets/scss/main.scss';


</style>