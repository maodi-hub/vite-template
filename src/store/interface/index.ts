export interface GlobalState {
  token: string
}

export interface LoadingState {
  fullLoading: boolean;
  localeLoading: boolean;
}

export interface MenuState {
  defaultMenu: Menu.MenuOptions[]
}

export interface UserState {
  info: { account: string, nick_name: string }
}