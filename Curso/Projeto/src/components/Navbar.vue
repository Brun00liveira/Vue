<template>
    <div id="nav">
        <routerLink to="/" id="logo">
            <img :src="logo" :alt="alt" id="logo" />
        </routerLink>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Pedido">Pedido</RouterLink>
    </div>
</template>
<script>
    export default {
        name: 'Navbar' ,
        // como eu vou utilizar imagens do meu elemento Pai, vou usar o props
        props: {
            logo: String,
            alt: String
        }
    }
</script>
<style scoped>
#nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav #logo {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 40px;
  height: 40px;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
}

#nav a:hover {
  color: #FFF;
}
</style>