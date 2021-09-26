<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <img :src="url" alt="" />
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          sm="8"
          v-for="quadrado in quadradinho"
          :key="quadrado.id"
        >
          <h1 class="grey--text text--darken-3 mt-5">{{ quadrado.title }}</h1>

          <p class="grey--text text--darken-3 mt-5">
            {{ quadrado.description }}
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <router-link to="/">
       <v-btn depressed color="error" class="btn-back"> Voltar
    </v-btn>
      </router-link>
   
    </div>
  </div>
</template>

<script>
import { public_key, ts, hash } from "../auth";
import { mapState } from 'vuex';
import axios from "axios";
export default {
  name: "Quadradinho",

  data() {
    return {
      
      url:'',
      size: "standard_fantastic.jpg",
    };
  },
  mounted() {

    this.$store.dispatch('getQuadradinho', this.$route.params.id)

    this.getImage()

  },

  computed: {
    ...mapState({
      quadradinho: state => state.quadradinho,
      preUrl: state => state.url
    })
  },

  methods: {

    getImage: function(){
      this.url = `${this.preUrl}${this.size}`
    }
   
  },
};
</script>

<style>
.btn-back{
  width: 0px;
  padding: 15px;
  border-radius: 25px;
  background-color: transparent;
  margin-left: 50%;
  margin-top: 100px;
  font-size: 20px;
  cursor: progress;
}
</style>