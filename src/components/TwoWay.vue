<template>
    <Msg :mensagem="msg" :tipo-msg="tipo" />
    <div>
        <form @submit.prevent="formSubmit">
            <label for="nome">Nome: </label>
            <input type="text" name="nome" id="nome" v-model="nome"> <br><br>
            <label for="idade">Idade: </label>
            <input type="number" name="idade" id="idade" v-model="idade"> <br><br>

            <button>Enviar</button>
        </form>
    </div>
</template>

<script>
import Msg from './Msg.vue';


export default {
    name: "TwoWay",
    data() {
        return {
            nome: "",
            idade: "",
            msg: "",
            tipo: ""
        }
    },
    methods: {
        async formSubmit() {
            if (this.nome === "" || this.idade === "") {
                this.msg = "Erro, formulario vario!"
                this.tipo = "Error"
            } else {
                this.msg = "Formulario enviado com sucesso"
                this.tipo = "Success"

                this.nome = ""
                this.idade = ""
            }
        }
    },
    components: {
        Msg
    }
}
</script>