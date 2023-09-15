
<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Meu Site</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>Home</v-btn>
        <v-btn text>About</v-btn>
        <v-btn text>Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="8" offset-sm="2" md="6" offset-md="3">
            <v-card>
              <v-card-title>Formulário</v-card-title>
              <v-card-text>
                <v-form @submit="submitForm">
                  <v-text-field v-model="nome" label="Nome"></v-text-field>
                  <v-text-field v-model="email" label="Email"></v-text-field>
                  <v-textarea v-model="mensagem" label="Mensagem"></v-textarea>
                  <v-btn type="submit" color="primary">Enviar</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'navbar',
  data() {
    return {
      drawer: true,
      nome: '',
      email: '',
      mensagem: ''

    }
  },
  methods: {
    submitForm() {
      console.log('Formulario enviado!!');
      console.log('Nome', this.nome);
      console.log('Email', this.email);
      console.log('Mensagem', this.mensagem);
    }
  }
}
</script>

<style scoped>
.bg-dark{
  background: #000000
}
</style>
