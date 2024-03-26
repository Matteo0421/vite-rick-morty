	
import { reactive } from 'vue'

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: [],
  queryParams: {
    count: 20,
    pages: 0
  }
})