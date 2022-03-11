import { defineStore } from "pinia";

export const useSessions = defineStore('session', {
    state() {
        return {
            isLogin: false
        }
    },
    actions: {
        userHasLogin(state) {
            state.isLogin = true
        }
    }
})