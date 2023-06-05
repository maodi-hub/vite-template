import { isArray, isFunction, isString } from "../is";
import $router from "@/config/router";

import type { RouteRecordRaw } from "vue-router";

export function parseDynamicRouter(payload: Menu.MenuOptions[]) {
  const allPages = import.meta.glob("@/views/**/*.vue");

  const routes = [...payload];
  return routes.map((item) => {
    const { meta, path, component, name, redirect } = item;
    const route: Menu.MenuOptions = {
      path,
      name,
      meta,
      redirect,
    };

    if (!component) return route;

    if (isString(component)) {
      route.component = allPages["/src/views" + component + ".vue"];
      return route;
    }

    if (isFunction(component)) {
      route.component = component;
      return route;
    }

    return route;
  }) as RouteRecordRaw[];
}

export function flatRouter(payload: Menu.MenuOptions[]) {
  const routes = [...payload];
  return routes.reduce((pre, cur) => {
    let curRoutes = [...pre, cur];
    const children = cur.children;
    isArray(children) &&
      children.length &&
      (curRoutes = [...pre, ...flatRouter(children)]) &&
      delete cur.children;
    return curRoutes;
  }, [] as Menu.MenuOptions[]);
}

export async function setDynamicRouter(payload: Menu.MenuOptions[]) {
  let isFlat = true;
  try {
    const flatRoutes = flatRouter(payload);
    const parsedRoutes = parseDynamicRouter(flatRoutes);

    parsedRoutes.forEach((route) => {
      if (route.meta?.isFull) {
        $router.addRoute(route);
        return;
      }
      $router.addRoute("layout", route);
    });
  } catch (err) {
    isFlat = false;
  }
  return isFlat;
}
