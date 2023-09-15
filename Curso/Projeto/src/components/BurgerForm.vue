<template>
  <div>
    <!-- v-show="msg"  -->
    <Message :msg="msg" v-show="msg"/>
    <form id="burger-form" @submit="CreateBurger">
      <div class="input-container">
        <label for="nome">Nome do cliente:</label>
        <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
      </div>
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione o seu pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo" v-html="pao.tipo"></option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="">Selecione o tipo de carne</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo" v-html="carne.tipo"></option>
        </select>
      </div>
      <div id="opcionais-container" class="input-container">
        <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
        <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
          <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
         <span>{{opcional.tipo}}</span>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!">
      </div>
    </form>
  </div>
</template>

<script>
import Message from "./Mensagem.vue";

export default {
    name: 'BurgerForm',
    components: {
        Message
    },
    data() {
        return {
            nome: null,
            //   Esses são os dados do backend
            paes: null,
            carnes: null,
            opcionaisdata: null,
            // Esses são os dados que serão enviados
            pao: null,
            carne: null,
            opcionais: [],
            msg: null

        }
      },
    methods: {
        // resgata os valores do backend da API
        async getIngredientes() {
            const req = await fetch("http://localhost:3000/ingredientes"); //recebe
            const data = await req.json(); 

            this.carnes = data.carnes;
            this.paes = data.paes;
            this.opcionaisdata = data.opcionais;
        },
        // envia os dados do form para o backend 
        async CreateBurger(e) {
            e.preventDefault();
            
            // console.log("Criou o burguer") para verificar se o submit esta funcionando
        // traz os dados que serão enviados
            const data = {
                nome: this.nome,
                pao: this.pao,
                carne: this.carne,
                opcionais: Array.from(this.opcionais),
                status: 'Solicitado'
            }
        
            // console.log(data) para verificar se esta envindo

            // Json.stringify(data) usasse para tratar os dados e enviar o json em forma de texto para o bd
            const dataJson = JSON.stringify(data);

            //req será a constant responsavel de salvar as informações, fetch busca o metodo, e header é o tipo de aplicação
            const req = await fetch("http://localhost:3000/burgers",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dataJson
            });

            const res = await req.json();

            console.log(res);

            //envia a mensagem
            this.msg = `Pedido n° ${res.id} realizado com sucesso!`;


            // limpar msg
            setTimeout(() => this.msg = '',3000);

            // limpar o campo do form

            this.pao = '',
            this.carne = '',
            this.nome = '',
            this.opcionais = []

        }
    },
    mounted() {
        this.getIngredientes();
    }
}
</script>


<style scoped>
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
  }

  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>