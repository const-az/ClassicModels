<template>
  <v-row>
    <v-col cols="12" md="6" v-for="(card, i) in dashboard.kpis" :key="i">
      <v-card outlined>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" class="text-center justify-center">
            <v-progress-circular color="success" size="70" v-if="i==0" :value="75"> 75%</v-progress-circular>
            <v-progress-circular color="success" size="70" v-else :value="2"> 2%</v-progress-circular>
            <div>
              <v-btn x-small text class="mt-3" color="primary">Ver detalles</v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="text-center">
            <p class="font-weight-bold">{{card.nombre}}</p>
            <v-row>
              <v-col cols="6">
                <p class="text-h4 mb-0">{{card.entregadas || card.totales}}</p>
                <p class="text-caption">{{card.entregadas ? 'Órdenes entregadas' : 'Órdenes totales'}}</p>
              </v-col>
              <v-col cols="6">
                <p class="text-h4 mb-0">{{card.pendientes || card.atrasadas}}</p>
                <p class="text-caption">{{card.pendientes ? 'Órdenes pendientes' : 'Órdenes atrasadas'}}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>