import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state : () => ({
    list : [{
      name : 'test',
      imageUrl : 'https://picsum.photos/id/237/200/300',
      quantity : 10 , 
      about : 'test',
      status : 'open',
      price : 100
    },
    {
      name : 'test2',
      imageUrl : 'https://picsum.photos/200/300?grayscale',
      quantity : 10 , 
      about : 'test',
      status : 'open',
      price : 100
    },
    {
      name : 'test3',
      imageUrl : 'https://picsum.photos/seed/picsum/200/300',
      quantity : 10 , 
      about : 'test',
      status : 'open',
      price : 100
    },
  ]
  }),

  getters : {

  },

  actions : {
    filterProducts(searchText){
      return this.list.filter((product) => product.name.includes(searchText))
    }
  }
})
