import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options;
//   console.log(options.routes);
  return new Router({
    ...options,
    routes: options.routes,
  });
}

  function fixRoutes(defaultRoutes, hostname) {
    if (hostname.includes('nftProject')) return subdomain1Routes(defaultRoutes);
    return nubisoftRoutes(defaultRoutes);
  }
  function nubisoftRoutes(defaultRoutes) {
    return defaultRoutes.filter(r => r.name !== 'nftProject' );
  }
  function subdomain1Routes(defaultRoutes) {
    const route = defaultRoutes.find(r => r.name === 'subdomain1');
    route.path = '/';
    return [route];
  }