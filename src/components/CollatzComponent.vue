<template>
  <div>
    <h1>Conjetura de Collatz</h1>
    <label>Introduzca el numero: </label>
    <input type="number" v-model="numero" />
    <button @click="getCollatz()">Mostrar Collatz</button>
    <div v-html="html"></div>
    <h2 :class="$filters.getParoImpar(numero).clase">
      {{ $filters.getParoImpar(numero).texto }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  methods: {
    getCollatz() {
      this.html = "";
      let auxNumero = this.numero;
      let aux = [];
      aux.push(auxNumero);
      

      while (auxNumero != 1) {
        if (auxNumero % 2 === 0) {
          auxNumero = auxNumero / 2;
        } else {
          auxNumero = auxNumero * 3 + 1;
        }
        this.html += "<li>" + auxNumero + "</li>";
        aux.push(auxNumero);
      }

      this.numeros = aux;
    },
  },
  data() {
    return {
      numeros: [],
      numero: 0,
      html: "",
    };
  },
};
</script>

<style>
.par {
  color: green;
}

.impar {
  color: red;
}
</style>
