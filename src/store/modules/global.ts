import { defineStore } from "pinia";

import { GLOBAL } from "./const";

import type { GlobalState } from "../interface";

export const useGlobalStore = defineStore({
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