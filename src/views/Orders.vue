<template>
  <v-container class="mt-15">
    <v-breadcrumbs>
      <v-breadcrumbs-item href="/home">
        Home
      </v-breadcrumbs-item>
      <v-icon>mdi-chevron-right</v-icon>
      <v-breadcrumbs-item class="primary--text" @click="detail=false">
        <a>Monitor de Órdenes</a>
      </v-breadcrumbs-item>
      <v-icon v-if="detail">mdi-chevron-right</v-icon>
      <v-breadcrumbs-item v-if="detail">
        Detalle Orden
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    
    <order-detail v-if="detail"></order-detail>
    
    <div v-else>
      <p class="text-h6">Monitor de Órdenes</p>
      <v-card outlined>
        <v-row class="pa-4">
          <v-col cols="12" md="3">
            <v-select :items="offices" item-text='name' label="Oficinas">
            </v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select :items="status" item-text='name' label="Estado"></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-menu
              ref="menu"
              v-model="fechaEntrega"
              :close-on-content-click="false"
              :return-value.sync="dateInicio"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateInicio"
                  label="Fecha de entrega"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="dateInicio" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text small color="primary" @click="fechaEntrega = false">Cancelar</v-btn>
                <v-btn small rounded depressed color="success" @click="$refs.menu.save(dateInicio)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="2">
            <v-menu
              ref="menu"
              v-model="fechaFin"
              :close-on-content-click="false"
              :return-value.sync="dateFin"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFin"
                  label="Fecha de fin"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="dateFin" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text small color="primary" @click="fechaFin = false">Cancelar</v-btn>
                <v-btn small rounded depressed color="success" @click="$refs.menu.save(dateFin)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn small depressed color="primary" class="mt-5">Buscar</v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nº Orden</th>
              <th>Cliente</th>
              <th>Monto Orden</th>
              <th>Cant Productos</th>
              <th>Fecha de entrega</th>
              <th>Avance Preparación</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(o, index) in orders['ordenes:']" :key="index">
              <td>{{ o.num_orden }}</td>
              <td>{{ o.cliente }}</td>
              <td>{{ o.monto }}</td>
              <td>{{ o.cant_productos }}</td>
              <td>{{ o.fecha_entrega }}</td>
              <td><v-progress-linear :value="o.avance_preparacion*100"></v-progress-linear></td>
              <td>{{ o.estado }}</td>
              <td><v-icon :color="o.estado=='Entregado' ? 'green' : 'primary'">{{o.estado=='Entregado' ? 'mdi-check-circle' : 'mdi-minus-circle'}}</v-icon></td>
              <td><v-btn x-small dark depressed color="primary" @click="detail=true">Ver detalle</v-btn></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination disabled v-model="orders.pagedResult.page" :length="orders.pagedResult.total"></v-pagination>
    </div>
  </v-container>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import OrderDetail from '../components/OrderDetail'

export default {
  components: {
    OrderDetail
  },
  data() {
    return {
      detail: false,
      dateInicio: new Date().toISOString().substr(0, 10),
      dateFin: new Date().toISOString().substr(0, 10),
      fechaEntrega: false,
      fechaFin: false,
    }
  },
  computed: {
    ...mapState(['orders','offices','status']),
  },
  methods: {
    ...mapActions(['getOrdersInfo','getOffices','getStatus'])
  },
  created(){
    this.getOrdersInfo(),
    this.getOffices(),
    this.getStatus()
  }
}
</script>