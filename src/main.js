import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
var app = createApp(App);
app.config.globalProperties.$filters = {
  evaluarNumero(num) {
    if (num % 2 == 0) {
      return "<span style='color:green'>" + num + "</span>";
    } else {
      return "<span style='color:red'>" + num + "</span>";
    }
  },
};
app.use(router).mount("#app");

// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./Router";

// var app = createApp(App);
// app.config.globalProperties.$filters = {
//   getParoImpar(numero) {
//     let data = { texto: "", clase: "" };
//     if (numero % 2 === 0) {
//       data.texto = "Par: " + numero;
//       data.clase = "par";
//     } else {
//       data.texto = "Impar: " + numero;
//       data.clase = "impar";
//     }
//     return data;
//   },
// };

// app.use(router).mount("#app");
