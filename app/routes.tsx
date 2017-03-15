import App from './components/App'

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}


export default {
  component: App,
  path: "/",
 childRoutes: [
   {
     path: '/A',
     getComponent(location, cb) {
       _import('./components/A').then(loadRoute(cb)).catch(errorLoading);
      }
   },
   {
     path: '/B',
     getComponent(location, cb) {
       _import('./components/B').then(loadRoute(cb)).catch(errorLoading);
      }
   }
 ]
};
