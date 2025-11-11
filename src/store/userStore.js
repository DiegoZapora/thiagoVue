import { defineStore } from "pinia";

export const useUser = defineStore('main', {
    state: () => ({
        user: {
            nomeUser: "Andre Matos",
            email: "andre@matos.com"
        }
    }),

    getters: {
        mensagem() {
            return this.user.nomeUser
        }
    },

    actions: {
        mudaNome(novoNome) {
            this.user.nomeUser = novoNome
        }
    }
})