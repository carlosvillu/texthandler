/* eslint no-console:0 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import {register} from '@schibstedspain/sui-bundler/registerServiceWorker'
import {Provider} from '@schibstedspain/ddd-react-redux'
import {AppContainer} from 'react-hot-loader'
import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import routes from './routes'
import browserHistory from 'react-router/lib/browserHistory'

import Root from './components/Root'
import i18n from './literals'
import TextHandler from './domain'

const domain = new TextHandler()

const render = Component => match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  if (error) { console.error({error}) }

  ReactDOM.render(
    <AppContainer>
      <Provider i18n={i18n} domain={domain}>
        <Router {...renderProps} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
})

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default
    render(NewRoot)
  })
}

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()
