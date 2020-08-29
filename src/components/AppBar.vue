<template>
  <div>
    <v-app-bar color="grey darken-4" absolute dense dark flat>
      <router-link to="/home" class="text-decoration-none white--text">
        <v-toolbar-title class="mr-5">
          ClassicModels
        </v-toolbar-title>
      </router-link>
      <!-- Desktop -->
      <v-btn text to="/home" v-if="currentUser" class="hidden-sm-and-down">
          Home
      </v-btn>
      <v-btn text to="/rover" v-if="currentUser" class="hidden-sm-and-down">
        Órdenes
      </v-btn>
      <v-btn text to="/rover" v-if="currentUser" class="hidden-sm-and-down">
        Inventario
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text to="/rover" v-if="currentUser" class="hidden-sm-and-down">
        Perfil
      </v-btn>
      <v-btn text v-if="currentUser" class="hidden-sm-and-down" @click="logout">
        Cerrar sesión
      </v-btn>
      <v-menu> 
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="white--text hidden-md-and-up" icon v-bind="attrs" v-on="on" depressed v-if="currentUser">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list flat elevation="0">
          <div>
            <v-list-item link to="/apod">
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item>
            <v-list-item link to="/rover">
              <v-list-item-title>
                Órdenes
              </v-list-item-title>
            </v-list-item>
            <v-list-item link to="/rover">
              <v-list-item-title>
                Inventario
              </v-list-item-title>
            </v-list-item>
            <v-list-item link to="/rover">
              <v-list-item-title>
                Perfil
              </v-list-item-title>
            </v-list-item>
            <v-list-item link @click="logout">
              <v-list-item-title>
                Cerrar sesión
              </v-list-item-title>
            </v-list-item>
          </div>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    logout(){
      Firebase.auth().signOut().then( () => {
        this.updateUser(false)
        this.$router.push('/home')
      })
    },
    ...mapActions(['updateUser'])
  },
  computed: {
    ...mapState(['currentUser']),
  },
}
</script>