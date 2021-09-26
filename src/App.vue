<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app dark class="black">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> MARVEL COMICS </v-list-item-title>
          <v-list-item-subtitle> Desafio </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          class="text-color red darken-4"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark shrink-on-scroll src="marvel.gif" prominent>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>MARVEL COMICS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    //item no menu lateral da app
    items: [
      { title: "Comics", icon: "home", to: "/" },
      { title: "Personagens", icon: "groups", to: "/personagens" },
      { title: "Perfil", icon: "account_circle" },
      { title: "Histórico", icon: "menu_book" },
      { title: "Grupos", icon: "groups" },
      { title: "Pacotes de Planos", icon: "payment" },
      { title: "App Configurações", icon: "settings" },
      { title: "Partilhar link da Api", icon: "share" },
      { title: "Terminar Sessão", icon: "power_settings_new" },
      { title: "Sobre Api", icon: "mdi-help-box", to: "/about" },
    ],
  }),
};
</script>