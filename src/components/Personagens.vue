<template>
  <div>
    <h3>Personagens</h3>
     <div>
      <v-col cols="12" md="4">
       <v-text-field
          label="Pesquisar Personagem"
          prepend-icon="search"
          color="red"
          v-model="busca"
          dense
        ></v-text-field>
      </v-col>
      </div>
    <div class="card-container">
      <div class="card" v-for="personagem in personagens"  :key="personagem.id">
        <h3>{{ personagem.name }}</h3>

        <router-link
          :to="{ name: 'personagem', params: { id: personagem.id } }"
        >
          <button class="btn btn-view">Ver</button>
          <div>
            <img :src="url" alt="" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { public_key, ts, hash } from "../auth";
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "Personagens",

  data() {
    return {
      url: "",
      size: "standard_large.jpg",
      
    };
  },

  mounted() {
    this.$store.dispatch("getPersonagens");
    console.log(this.personagens);
    this.getImage();
  },

  computed: {
    ...mapState({
      personagens: (state) => state.personagens,

    }),

  },

  methods: {
    getImage: function () {
      this.url = `${this.preUrl}${this.size}`;
    },

    
  },
};
</script>

<style lang="css">
.card-container {
  margin-left: 10px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
}

.card {
  text-align: center;
  background-color: #333;
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

#buscabtn{
  margin-top: 2%;
}
</style>