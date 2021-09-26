<template>
  <div>
    <h1>COMINCS</h1>
     <div>
      <v-col cols="12" md="4">
        <v-text-field
          label="Pesquisar comics"
          prepend-icon="search"
          color="red"
          dense
        ></v-text-field>
      </v-col>
      </div>

    <div class="card-container">

      <div
        class="card"
        v-for="quadradinho in quadradinhos"
        :key="quadradinho.id"
      >
        
        <h3>{{ quadradinho.title }}</h3>
        

        <router-link
          :to="{ name: 'quadradinho', params: { id: quadradinho.id } }"
        >
          <button class="btn btn-view">detalhes</button>
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import { public_key, ts, hash } from "../auth";
import { mapState } from 'vuex'
import axios from "axios";
export default {
  name: "Quandradinhos",


  mounted() {
    
     this.$store.dispatch('getQuadradinhos')
      console.log(this.quadradinhos)
  },

  computed: {

      ...mapState({
          quadradinhos: state => state.quadradinhos
      })

  },

  methods: {
    
  }
};
</script>

<style lang="css">
.card-container {
  margin-left: 10px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 10px;
}

.card {
  text-align: center;
  background-color: rgb(84, 55, 55);
  min-height: 200px;
}

.card h3 {
  color: white;
}

.btn-view {
  padding: 10px;
  margin-top: 80px;
  border-radius: 15px;
  width: 120px;
  background-color: rgba(206, 205, 202, 0.041);
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
</style>