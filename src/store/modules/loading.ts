import { defineStore } from "pinia";
import { Loading } from "../interface";

// MenuStore
export const LoadingState = defineStore({
	id: "Loading",
	state: (): Loading => ({
		isLoading: false
	}),
	getters: {},
	actions: {
		setLoading(payload: boolean) {
      this.isLoading = payload
    }
	}
});