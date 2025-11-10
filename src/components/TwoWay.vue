<template>
    <div class="formControl">
        <Msg :mensagem="msg" :tipo-msg="tipo" v-if="Mensagem" />
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
            tipo: "",
            Mensagem: false
        }
    },
    methods: {
        async formSubmit() {
            if (this.nome === "" || this.idade === "") {
                this.Mensagem = true
                this.msg = "Erro, formulario vazio!"
                this.tipo = "Error"
                this.fecha()
            } else {
                this.Mensagem = true
                this.msg = "Formulario enviado com sucesso"
                this.tipo = "Success"

                this.nome = ""
                this.idade = ""
                this.fecha()
            }
        },
        fecha() {
            setTimeout(() => {
                this.Mensagem = false
            }, 3000);
            this.$emit("fecha")
        }
    },
    components: {
        Msg
    }
}
</script>

<style scoped>
.formControl {
    display: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>