import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { getCompany } from "src/services/companyService";
export default defineStore("auth", {
  state: () => ({
    company: {},
    token: "",
    isAuthenticated: false,
  }),
  getters: {},
  actions: {
    doLogin(payload) {
      return new Promise((resolve, reject) => {
        api
          .post("/Account/Login", payload)
          .then((response) => {
            if (response.status == 200) {
              const token = response.data.Token;
              this.token = token;
              this.isAuthenticated = true;
              api.defaults.headers.common.Authorization = "Bearer " + token;
              localStorage.setItem("token", token);
              resolve(true);
            } else {
              reject(false);
            }
          })
          .catch((error) => {
            reject(error.message);
          });
      });
    },
    signOut() {
      api.defaults.headers.common.Authorization = "";
      this.token = "";
      this.isAuthenticated = false;
    },

    async getMe() {
      try {
        let com = await getCompany();
        this.company = com;
      } catch (error) {
        console.error(error);
      }
    },

    async init() {
      const token = localStorage.getItem("token");
      if (token) {
        this.isAuthenticated = true;
        api.defaults.headers.common.Authorization = "Bearer " + token;
        await this.getMe();
        return true;
      } else {
        api.defaults.headers.common.Authorization = "";
        this.token = "";
        this.isAuthenticated = false;
        return false;
      }
    },
  },
});
