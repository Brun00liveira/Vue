<template>
  <div class="navbar">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">ExercicioPart1</router-link></li>
          <li><router-link to="/">ExercicioPart2</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    
    
    /* outros estilos desejados */
  }

  ul {
    list-style-type: none;
    margin-left: 10px;
    padding: 0;
    /* outros estilos desejados */
  }

  li {
    margin-left: 10px;
    display: inline-block;
    /* outros estilos desejados */
  }
</style>