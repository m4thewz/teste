<template>
    <nav>
      <h1>Matheus Vitor</h1>
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
  };
  </script>
  
  <style src="@/components/Navbar/style.scss" lang="scss" />
  