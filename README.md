# react-weather

## Features

* Involve web/native/app clients, try clients fusion
* Using React Native for building native apps, include Android/iOS
* Using electron for building apps, include darwin/linux/win32
* React 15.0.1 + React Router 4.4.5 on the client and server
* Babel 6 automatically compiles ES2015 + ES7 stage-0
* Webpack HMR for instant server updates
* React Transform HMR for instant client updates
* React Transmit to preload on server and hydrate client

## Support 

* web
	* pc / mobile

* native
	* Android / iOS

* app
	* darwin / linux / win32

## Preview

<img src="http://ww2.sinaimg.cn/large/627bf01djw1f5ukfxxnh2g20dc0nmnpe.gif" width="280" title="iOS">
<img src="http://ww2.sinaimg.cn/large/627bf01djw1f5ukf11hjog20dc0nlb2b.gif" width="280" title="Android">

<img src="http://ww2.sinaimg.cn/large/627bf01djw1f5ukhf9uvhg20dc08o4qr.gif" width="280" title="web">

<img src="http://ww1.sinaimg.cn/large/627bf01djw1f5ukie6fxcg20dc08okjl.gif" width="280" title="app-osx">
<img src="http://ww1.sinaimg.cn/large/627bf01djw1f5uqrxx9e2g20dc08on5f.gif" width="280" title="app-win7">


## Dev Environment

* os：OS X Yosemite 10.10.5
* nodejs：v4.2.6
* npm：v2.14.12
* Xcode：v7.2
* Android Studio 2.1.12

## Dependencies

* react-native `0.28.0`
* electron-prebuilt `1.2.0`
* electron-packager `7.0.2`
* react `15.0.1`
* react-dom `15.0.1`
* react-redux `4.4.5`
* react-router `2.3.0`
* react-router-redux `4.0.2`
* redux `3.5.1`
* redux-thunk `2.0.1`
* react-hot-loader `1.3.0`
* webpack-hot-middleware `^2.10.0`
* webpack-dev-server `1.6.4`
* webpack-dev-middleware `1.6.1`


## Run web Dev

* webpack dev server, client side only, no server rendering

```
npm install
npm run start:dev
open http://localhost:3002
```

## Run web Prod

* Universal rendering with react-redux-router and Express

```
npm install
npm run build
npm run start:prod
open http://localhost:3002
```

## Run app

* Universal rendering in 'public' folder

```
npm install
npm run build
npm run start:app
```

## Build app

```
npm run build
npm run build:osx

or win
	npm run build:win

or all
	npm run build:all
```
## Run iOS

1.opn Terminal
```
npm install
npm run start
```

2.Open weather.xcodeproj in Xcode，Click 'product>run' or use CMD + R

## Run Android

1.opn Androi Studio
```
npm install
npm run start
```

2.Open current project folder 'weather' in Androi Studio，Click 'Run>Run app'

## Source code intro
```
for pbulic
	public/

for web and app
	.babelrc
	src_web/
	client.js
	cmrh.conf.js
	index.dev.html
	server.dev.js
	server.js
	server.prod.js
	webpack.config.dev.js
	webpack.config.prod.js

for native
	.buckconfig
	.flowconfig
	.gitignore
	.watchmanconfig
	ios/
	android/
	src_native/
	index.android.js
	index.ios.js
```

## Todo

* ☆☆☆fusion web and react-native code 
* ☆react-native filter "package.json"
* ☆featch in Safari problem

## License

[MIT](http://isekivacenz.mit-license.org/)
