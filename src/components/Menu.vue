<template>
  <div class="container">
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/collatz">Collatz2</router-link>
      </li>
      <li>
        <router-link to="/tablamultiplicar">Tabla Multiplicar</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li {
  display: inline;
}
li {
  margin: 10px;
}
.container {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #3498db,
    #2ecc71
  ); /* Gradient background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  border-radius: 10px; /* Rounded corners */
  position: relative;
  overflow: hidden;
}

.container::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none; /* Allow clicking through the pattern layer */
}
</style>
