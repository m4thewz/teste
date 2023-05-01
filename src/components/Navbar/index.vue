<template>
    <nav>
      <h1>Matheus Vitor</h1>
      <ul>
        <NavItem content="Início" href="/" />
        <NavItem content="Blog" href="/blog" />
        <NavItem content="Contato" href="#contato" />
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
  