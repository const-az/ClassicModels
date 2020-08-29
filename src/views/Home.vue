<template>
  <v-container class="my-10">
    <v-breadcrumbs>
      <v-breadcrumbs-item href="/home">
        Home
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    <Carousel/>
    <v-row>
      <v-col cols="12" md="6" v-for="(card, i) in dashboard.kpis" :key="i">
        <v-card outlined class="pt-2">
          <v-row align="center" justify="center">
            <v-col cols="12" md="4" class="text-center justify-center">
              <v-progress-circular color="success" size="70" v-if="i==0" :value="75"> 75%</v-progress-circular>
              <v-progress-circular color="success" size="70" v-else :value="2"> 2%</v-progress-circular>
              <div>
                <v-btn x-small text class="mt-3" color="primary">Ver detalles</v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="8" class="text-center">
              <p class="font-weight-bold mt-5">{{card.nombre}}</p>
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
      <v-col cols="12" lg="6">
        <p class="text-h5 font-weight-bold text-center text-md-left mt-5">Últimas órdenes</p>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nº Orden</th>
                <th class="text-left">Cliente</th>
                <th class="text-left">Fecha de entrega</th>
                <th class="text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(o, index) in dashboard.utimas_ordenes" :key="index">
                <td>{{ o.num_orden }}</td>
                <td>{{ o.cliente }}</td>
                <td>{{ o.fecha_entrega }}</td>
                <td>{{ o.estado }}</td>
                <td><v-btn x-small dark depressed color="primary">Ver detalle</v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="12" lg="6">
        <p class="text-h5 font-weight-bold text-center text-md-left mt-5">Últimas devoluciones</p>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nº Orden</th>
                <th class="text-left">Cliente</th>
                <th class="text-left">Fecha de entrega</th>
                <th class="text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(o, index) in dashboard['ultimas_devoluciones:']" :key="index">
                <td>{{ o.num_orden }}</td>
                <td>{{ o.cliente }}</td>
                <td>{{ o.fecha_entrega }}</td>
                <td><v-btn x-small dark depressed color="primary">Ver detalle</v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Carousel from '../components/Carousel'

export default {
  name: 'Home',
  components: {
    Carousel,
  },
  methods: {
    ...mapActions(['getHomeInfo'])
  },
  computed: {
    ...mapState(['dashboard'])
  },
  created(){
    this.getHomeInfo()
  }
}
</script>
