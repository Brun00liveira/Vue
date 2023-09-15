<template>
    <div id="burger-table">
        <Message :msg="msg" v-show="msg"/>
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#;</div>
                <div class="">Cliente:</div>
                <div class="">Pão:</div>
                <div class="">Carne:</div>
                <div class="">Opcionais:</div>
                <div class="">Acões:</div>
            </div>
        </div>
        <div>
            <div id="burger-table-rows" v-for="Burger in burgers" :key="Burger.id">
                <div class="burger-table-row">
                    <div class="order-number">{{Burger.id}}</div>
                    <div class="">{{Burger.nome}}</div>
                    <div class="">{{Burger.pao}}</div>
                    <div class="">{{Burger.carne}}</div>
                    <div class="">
                        <ul>
                            <li v-for="(opcional, index) in Burger.opcionais" :key="index">{{ opcional }}</li>
                        </ul>
                    </div>
                        <select name="status" class="status" @change="updatedBurguer($event, Burger.id)">
                            <option value="">Selecione</option>
                            <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="Burger.status == s.tipo">{{s.tipo}}</option>
                        </select>
                        <button type="" class="delete-btn" @click="deleteBurguer(Burger.id)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from './Mensagem.vue';
export default {
    name: 'Dashboard',

    data() {
        return{
            burgers: null,
            burger_id: null,
            status: [],
            msg: null
        }
    },
    components: {
        Message
    },
    methods: {
        async getPedidos() {

            const req = await fetch("http://localhost:3000/burgers");

            const data = await req.json();

            this.burgers = data;

            console.log(this.burgers);

            this.getStatus()
            
        },

        async getStatus() {

            const req = await fetch("http://localhost:3000/status")

            const data = await req.json()

            this.status = data;

            console.log(this.status);
        },
        async deleteBurguer(id) {
            
            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "DELETE"
            });

            
            const res = await req.json();   

            this.msg = `pedido deletado com sucesso`;

            setTimeout(() => this.msg = "", 3000)

            // para retornar para o inicio
            this.getPedidos();

        },
        
        async updatedBurguer(event, id) {
            
            const option = event.target.value;

            const dataJson = JSON.stringify({status: option});

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: dataJson
            })
            const res = await req.json();

            this.msg = `Status editado com sucesso`;

            setTimeout(() => this.msg = "", 3000)
    
        },
    },
    mounted() {
        this.getPedidos()
      
    }
}
</script>


<style scoped>
  #burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }

  #burger-table-heading,
  #burger-table-rows,
  .burger-table-row {
    display: flex;
    flex-wrap: wrap;
  }

  #burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }

  .burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }

  #burger-table-heading div,
  .burger-table-row div {
    width: 19%;
  }

  #burger-table-heading .order-id,
  .burger-table-row .order-number {
    width: 5%;
  }

  select {
    padding: 12px 6px;
    margin-right: 12px;
    font-size: 10px;
    width: 8%;
  }


  .delete-btn {
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
  
  .delete-btn:hover {
    background-color: transparent;
    color: #222;
  }
  
</style>