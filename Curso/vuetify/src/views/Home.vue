<template>
  <div>
      <CreatComp />

  </div>
</template>

<script>
  import CreatComp from '../components/nav/Navbar.vue'
  export default {
    name: 'HomeView',
    components:{
      CreatComp
    }
  }
</script>
<style>
  .bg-dark{
    background-color: #000000;
  }
</style>
