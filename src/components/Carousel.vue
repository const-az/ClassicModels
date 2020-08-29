<template>
  <v-card outlined>
    <v-carousel
      cycle
      height="400"
      hide-delimiters
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(slide, i) in colors"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-card-title>Bienvenido</v-card-title>
    <v-card-subtitle>Bienvenido al sistema de órdenes e Inventario de ClassicModels</v-card-subtitle>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'grey',
          'grey darken-1',
          'grey darken-2',
          'grey darken-3',
          'grey darken-4',
        ]
      }
    },
  }
</script>