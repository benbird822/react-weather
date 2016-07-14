import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, hashHistory, useRouterHistory } from 'react-router'
import { configureStore } from './src_web/store'
import routes from './src_web/routes'
let state = window.__initialState__ || undefined

// 1. https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#browserhistory
// import { syncHistoryWithStore } from 'react-router-redux'
// import useScroll from 'scroll-behavior/lib/useStandardScroll'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// const store = configureStore(browserHistory, state)
// const createScrollHistory = useScroll(createBrowserHistory)
// const appHistory = useRouterHistory(createScrollHistory)()
// const history = syncHistoryWithStore(appHistory, store)

// 2. https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#hashhistory
const store = configureStore(hashHistory, state)
const history = hashHistory

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('mount')
)
