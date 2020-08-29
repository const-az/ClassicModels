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
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-1">{{ slide }}</div>
          </v-row>
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
        ],
        slides: [
          'Bienvenido a Classic Models',
          'La mejor empresa',
          'Compra lo que desees',
        ],
      }
    },
  }
</script>