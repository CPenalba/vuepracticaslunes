<template>
  <div>
    <h1>Tabla Multiplicar</h1>

    <label style="color: red">Con boton</label>
    <br />
    <label>Introduzca número</label>
    <input type="number" v-model="numero" />
    <button @click="generarMultiplicacion()">Generar multiplicacion</button>
    <div v-html="html"></div>
    <hr />

    <!-- <button @click="generarTabla()">Generar tabla</button>
    <table border="1">
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody v-html="html"></tbody>
    </table> -->

    <label style="color: red">Con directivas</label>
    <br />
    <label>Introduzca número</label>
    <input type="number" v-model="numero" />
    <table v-if="numero > 0" border="1">
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ numero }} * {{ i }}</td>
          <td>{{ numero * i }}</td>
        </tr>
      </tbody>
    </table>
    <hr />

    <label style="color: red">Con filtros</label>
    <br />
    <label>Introduzca número</label>
    <input type="number" v-model="numero" />
    <table v-if="numero > 0" border="1">
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ $filters.getOperacion(numero, i) }}</td>
          <td>{{ $filters.getMultiplicacion(numero, i) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      html: "",
    };
  },
  methods: {
    generarMultiplicacion() {
      this.html = "";
      this.html += "<table border=1>";
      this.html += "<thead>";
      this.html += "<tr>";
      this.html += "<th>Operacion</th>";
      this.html += "<th>Resultado</th>";
      this.html += "</tr>";
      this.html += "</thead>";
      this.html += "<tbody>";
      for (var i = 1; i <= 10; i++) {
        var operacion = this.numero * i;
        var texto = this.numero + " * " + i;
        this.html += "<tr>";
        this.html += "<td>" + texto + "</td>";
        this.html += "<td>" + operacion + "</td>";
        this.html += "</tr>";
      }
      this.html += "</tbody>";
      this.html += "</table>";
    },
  },

  // methods: {
  //           generarTabla() {
  //               let aux = "";
  //               for (var i = 1; i <= 10; i++){
  //                   var operacion = this.numero + " * " + i;
  //                   var resultado = this.numero * i;
  //                   aux += "<tr>";
  //                   aux += "<td>" + operacion + "</td>";
  //                   aux += "<td>" + resultado + "</td>";
  //                   aux += "</tr>";
  //               }
  //               this.html = aux;
  //           }
  //       }
};
</script>

<style></style>
