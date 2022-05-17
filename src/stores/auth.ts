import type { IUser } from "./../types/IUser";
import AuthService from "@/services/AuthService";
import axios from "axios";

import { defineStore } from "pinia";
import router from "@/router";
import { API_URL } from "@/api";

interface IState {
  authed: boolean;
  user: IUser;
}

export const useAuthStore = defineStore({
  id: "auth",
  state: (): IState => ({
    authed: false,
    user: {} as IUser,
  }),
  getters: {},
  actions: {
    async login(user: IUser) {
      try {
        const res = await AuthService.login(user);
        localStorage.setItem("token", res.data.token);
        this.authed = true;
        router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    async createUser(user: IUser) {
      try {
        const res = await AuthService.create(user);
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.authed = true;
      } catch (e) {
        console.log(e);
      }
    },

    async checkAuth() {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      try {
        await axios.post(`${API_URL}/users/refresh_token/`, {
          token,
        });

        this.authed = true;
        router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
});
