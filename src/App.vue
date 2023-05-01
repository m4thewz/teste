<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";

export default {
  components: { Navbar },
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins:wght@400;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  outline: none;

  box-sizing: border-box;
}

#app {
  font-family: "Poppins", sans-serif;
  background-color: #18181b;
  color: white;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background: #008dff;
  border-radius: 30px;
}
::-webkit-scrollbar-track {
  background: #18181b;
  box-shadow: inset 0px 0px 0px 0px #f0f0f0;
}
</style>