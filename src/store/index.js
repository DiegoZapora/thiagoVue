import { defineStore } from "pinia";

export const useUser = defineStore("User", {
    state: () => {
        return {
            user: {
                name: "Andre",
                lastname: "Matos",
                email: "andre@matos.com"
            }
        }   
    }
})