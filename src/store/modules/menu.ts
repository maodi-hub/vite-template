import { defineStore } from "pinia";

import { MENU } from "./CONST";

import { MenuState } from "../interface";

export default defineStore({
	id: MENU,
	state: (): MenuState => ({
		defaultMenu: []
	}),
	getters: {},
	actions: {
		setMenu(payload: Menu.MenuOptions[]) {
      const routes_length = payload.length;
      this.defaultMenu = payload;
      return !!routes_length;
    }
	}
});