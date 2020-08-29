<template>
  <v-main>
    <p class="text-h5 font-weight-bold">Orden #{{details.orden.num_orden}}</p>
    <v-card flat>
      <v-tabs
        v-model="tab"
        background-color="primary"
        dark
      >
        <v-tab>
          General
        </v-tab>
        <v-tab>
          Datos Cliente
        </v-tab>
        <v-tab>
          Productos
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat class="pa-10">
            <v-row>
              <v-col cols="6">Nª Orden</v-col>
              <v-col cols="6">{{details.orden.num_orden}}</v-col>
              <v-col cols="6">Monto Orden</v-col>
              <v-col cols="6">{{details.orden.monto}}</v-col>
              <v-col cols="6">Cant. Productos</v-col>
              <v-col cols="6">{{details.orden.cant_productos}}</v-col>
              <v-col cols="6">Fecha Entrega</v-col>
              <v-col cols="6">{{details.orden.fecha_entrega}}</v-col>
              <v-col cols="6">Vendedor</v-col>
              <v-col cols="6">{{details.orden.vendedor}}</v-col>
              <v-col cols="6">Estado</v-col>
              <v-col cols="6">{{details.orden.estado}}</v-col>
              <v-col cols="6">Avance preparación</v-col>
              <v-col cols="6"><v-progress-linear class="mt-2" :value="details.orden.avance_preparacion*100"></v-progress-linear></v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat class="pa-10">
            <v-row>
              <v-col cols="6">Nombre</v-col>
              <v-col cols="6">{{details.cliente.nombre}}</v-col>
              <v-col cols="6">RUT</v-col>
              <v-col cols="6">{{details.cliente.rut_n}}-{{details.cliente.rut_dv}}</v-col>
              <v-col cols="6">Dirección de Entrega</v-col>
              <v-col cols="6">{{details.cliente.direccion_entrega}}</v-col>
              <v-col cols="6">Contacto</v-col>
              <v-col cols="6">{{details.cliente.contacto}}</v-col>
              <v-col cols="6">Fono</v-col>
              <v-col cols="6">{{details.cliente.fono}}</v-col>
              <v-col cols="6">Email</v-col>
              <v-col cols="6">{{details.cliente.email}}</v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Cod. Producto</th>
                    <th>Descripción</th>
                    <th>Precio unitario</th>
                    <th>Cant. Pedido</th>
                    <th>Cant. Pickeado</th>
                    <th>Cumplimiento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p, index) in details.productos" :key="index">
                    <td>{{ p.cod_prod }}</td>
                    <td>{{ p.descripcion }}</td>
                    <td>{{ p.precio_unit }}</td>
                    <td>{{ p.cant_pedido }}</td>
                    <td>{{ p.cant_pickeado }}</td>
                    <td><v-progress-linear :value="p.cant_pedido-p.cant_pickeado"></v-progress-linear></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        tab: null,
      }
    },
    computed: mapState(['details']),
    methods: mapActions(['getOrderDetails']),
    created(){
      this.getOrderDetails()
    }
  }
</script>