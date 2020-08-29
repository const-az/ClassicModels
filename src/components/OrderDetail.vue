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
              <v-col cols="6"><p class="text-caption">Nª Orden</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.orden.num_orden}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Monto Orden</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.orden.monto}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Cant. Productos</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.orden.cant_productos}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Fecha Entrega</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.orden.fecha_entrega}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Vendedor</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.orden.vendedor}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Estado</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.orden.estado}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Avance preparación</p></v-col>
              <v-col cols="6"><v-progress-linear class="mt-2" :value="details.orden.avance_preparacion*100"></v-progress-linear></v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat class="pa-10">
            <v-row>
              <v-col cols="6"><p class="text-caption">Nombre</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.cliente.nombre}}</p></v-col>
              <v-col cols="6"><p class="text-caption">RUT</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.cliente.rut_n}}-{{details.cliente.rut_dv}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Dirección de Entrega</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.cliente.direccion_entrega}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Contacto</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.cliente.contacto}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Fono</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.cliente.fono}}</p></v-col>
              <v-col cols="6"><p class="text-caption">Email</p></v-col>
              <v-col cols="6"><p class="text-caption">{{details.cliente.email}}</p></v-col>
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