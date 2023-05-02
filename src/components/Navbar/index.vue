<template>
    <nav :class="closed ? 'closed' : ''">
      <div>
        <h1>Matheus Vitor</h1>
        <img src="@/assets/menu.svg" alt="Menu" @click="closed = !closed">
      </div>
      <ul>
          <NavItem content="Início" href="/" />
          <NavItem content="Sobre" href="/sobre" />
          <NavItem content="Blog" href="/blog" />
      </ul>
    </nav>
  </template>
  
  <script>
  import NavItem from "@/components/Navbar/NavItem";
  
  export default {
    name: "Navbar",
    components: { NavItem },
    data() {
      return {
        closed: true
      }
    },
  };
  </script>
  
  <style src="@/components/Navbar/style.scss" lang="scss" />
  