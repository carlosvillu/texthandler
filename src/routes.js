import React from 'react'
import Loadable from 'react-loadable'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

// const loadRoot = (location, callback) =>
//   import(/* webpackChunkName: "Root" */ './components/Root').then(component => callback(null, component.default))
//
// const loadTexts = (location, callback) =>
//   import(/* webpackChunkName: "Texts" */ './components/Texts').then(component => callback(null, component.default))

const Root = Loadable({loader: () => import(/* webpackChunkName: "Root" */ './components/Root'), loading: () => null})
const Texts = Loadable({loader: () => import(/* webpackChunkName: "Texts" */ './pages/Texts'), loading: () => null})

export default (
  <Router>
    <Route component={Root}>
      <Route path='/'>
        <IndexRoute component={Texts} />
      </Route>
    </Route>
  </Router>
)
