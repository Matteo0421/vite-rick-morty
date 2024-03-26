<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
  export default {
    components:{
      Header,
      Main,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params:store.queryParamas
          // {
          //   count: 20,
          //   pages: 0
          // }
        })
        .then(result => {
          this.store.cardsList = result.data.results;
          console.log( this.store.cardsList);

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
</template>



<style lang="scss" >
@use './assets/scss/main.scss';


</style>