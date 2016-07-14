import express from 'express'
import serialize from 'serialize-javascript'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { configureStore } from './src_web/store'
import routes from './src_web/routes'

const app = express()
app.use('/public', express.static(__dirname + '/public'))

/* api endpoints */

// import weatherItemInfo from './src/api/routes/weatherItemInfo'
// app.use('/api/weatherItemInfo', weatherItemInfo)

// import weatherCity from './src/api/routes/weatherCity'
// app.use('/api/weatherCity', weatherCity)

const HTML = ({ content, store }) => (
  <html>
    <head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
      <link rel='stylesheet' type='text/css' href='/public/style.css' />
    </head>
    <body>
      <div id='mount' dangerouslySetInnerHTML={{ __html: content }}/>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
      <script src='/public/vendor.js' />
      <script src='/public/bundle.js' />
    </body>
  </html>
)

app.use(function (req, res) {

  const memoryHistory = createMemoryHistory(req.path)
  let store = configureStore(memoryHistory )
  const history = syncHistoryWithStore(memoryHistory, store)

  /* react router match history */
  match({ history, routes , location: req.url }, (error, redirectLocation, renderProps) => {

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      
      /* call static fetchData on the container component */
      // fetchData().then( ()=> {
        store = configureStore(memoryHistory, store.getState() )
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        )
        res.status(200).send('<!Doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
      // }).catch(function (error) {
      //   console.log(error.stack);
      // });

      /* fetch data promise */
      // function fetchData () {
      //   let { query, params } = renderProps;
      //   return new Promise(function(resolve, reject) {
      //     let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
      //     console.log(comp);
      //     let url = req.protocol + '://' + req.get('host')
      //     resolve(comp.fetchData({ params, store, url }));
      //   });
      // }
      
    } else {
      res.sendStatus(404);
    }
  })
})

app.listen(3002, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('==> 🌎  listening on http://localhost:3002')
})