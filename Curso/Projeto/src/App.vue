<template>
<!-- para resgatar o props do NavBar [logo e alt]  e renomear para que o codigo fique mais limpo-->
    <div>
      <Navbar :logo="logo_src" :alt="app_name"/>
      <RouterView />
      <Footer />
    </div>

</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

    export default{
    components: {
        Navbar,
        Footer
      },
    // O data irá retornar a imagem e a mensagem de forma dinamica
    data() {
        return {
            logo_src: "/public/img/logo.png",
            app_name: "Make your burger"
        }
    }
}

</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
