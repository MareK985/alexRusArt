// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)

// export function createRouter (ssrContext, createDefaultRouter, routerOptions) {
//   const options = routerOptions || createDefaultRouter(ssrContext).options
//   const hostname = ssrContext ? ssrContext.req.headers.host : location.host

//   // console.log(options.routes)

//   return new Router({
//     ...options,
//     routes: fixRoutes(options.routes, hostname)
//   })
// }

// function fixRoutes (defaultRoutes, hostname) {
//   if (hostname.includes('ps')) { return subdomain1Routes(defaultRoutes) }
//   return nubisoftRoutes(defaultRoutes)
// }
// function nubisoftRoutes (defaultRoutes) {
//   return defaultRoutes.filter(r => r.name !== 'ps')
// }
// function subdomain1Routes (defaultRoutes) {
//   const route = defaultRoutes.find(r => r.name === 'ps')
//   route.path = '/'
//   return [route]
// }
