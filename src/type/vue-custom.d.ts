
export {}

declare module "vue" {
  // 自定义选项扩展
  interface ComponentCustomOptions {
  }
  // 自定义属性扩展
  interface ComponentCustomProperties {
  }
}

declare module 'vue-router' {
  interface RouteMeta extends Menu.MetaProps {
  }
}
