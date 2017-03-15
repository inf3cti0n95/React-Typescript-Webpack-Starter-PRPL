import * as React from "react";
import { render } from "react-dom";
import { Router,Route,IndexRoute, browserHistory } from "react-router";
import routes from './routes'
import App from './components/App'



function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}


// render(<Router routes={routes} history={browserHistory}></Router>,document.getElementById('app'))
render(
<Router history={browserHistory}>
    <Route path="/" component={App}>
    
        <Route path="B"  getComponent={(nextState,callback)=>{
       _import('./components/B').then(loadRoute(callback)).catch(errorLoading);
      }
    }/>
        <Route path="A"  getComponent={(nextState,callback)=>{
       _import('./components/A').then(loadRoute(callback)).catch(errorLoading);
      }
    }>
        <Route path="C" getComponent={(nextState,callback)=>{
       _import('./components/C').then(loadRoute(callback)).catch(errorLoading);
      }
    }/>
    
    </Route>
    
    </Route>
</Router>,document.getElementById('app'));