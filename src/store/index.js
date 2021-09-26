import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { public_key, ts, hash } from '../auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personagens: [],
    personagem: [],
    quadradinhos: [],
    quadradinho: [],
    url:''
  },
  mutations: {
    getPersonagens(state) {

      state.personagens = []

      axios.get(
        `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`
      ).then((result) => {

        result.data.data.results.forEach((item) => {
          
          console.log(item)

          state.personagens.push(item)
        })
      })
        .catch((error) => {

          console.log(error)
        })
    },
    //outro
    getPersonagem(state, id) {

      state.personagem = []

      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${public_key}&hash=${hash}`)
        .then((result) => {

          console.log(result)

          result.data.data.results.forEach((item) => {

            state.personagem.push(item)

            state.url = `${item.thumbnail.path}/`

            console.log(this.url)
          })
        })
        .catch((error) => {

          console.log(error)
        })
    },
    //outrooo
    getQuadradinhos(state) {

      state.quadradinhos = []
      axios
        .get(
          `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${public_key}&hash=${hash}&limit=10`
        )
        .then((result) => {
          result.data.data.results.forEach((item) => {
            console.log(item);

            state.quadradinhos.push(item)
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //outro
    getQuadradinho(state, id) {

      state.quadradinho = []

      axios
        .get(
          `http://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${public_key}&hash=${hash}`
        )
        .then((result) => {
          console.log(result);

          result.data.data.results.forEach((item) => {
            state.quadradinho.push(item);

            state.url = `${item.thumbnail.path}/`;

            
          });
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
  },
  actions: {
    getPersonagens: context => {

      context.commit('getPersonagens')
    },

    getPersonagem(context, id) {

      context.commit('getPersonagem', id)
    },

    getQuadradinhos: context => {

      context.commit('getQuadradinhos')
    },

    getQuadradinho(context, id) {
      context.commit('getQuadradinho', id)
    }
  }  
})
