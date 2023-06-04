import { defineStore } from "pinia";

import { GLOBAL } from "./CONST";

import type { GlobalState } from "../interface";

export default defineStore({
	id: GLOBAL,
	state: (): GlobalState => ({
		token: ""
	}),
	getters: {},
	actions: {
		setToken(payload: string) {
      this.token = payload;
    }
	},
	persist: true
});