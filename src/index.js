// React
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  BrowserHistory,
  Route,
  Switch, 
  Link
} from 'react-router-dom';

// include everything in main.scss
import '../styles/main.scss';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers/index';

// Middleware
import ReduxThunk from 'redux-thunk';

// React Router Redux
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
const history = createHistory();
const middlewareForReduxRouter = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(ReduxThunk, middlewareForReduxRouter, promise)
));

// Components
import Home from './components/home';
import Drumkit from './components/1-Drumkit';
import CSSClock from './components/2-cssAndJavascriptClock';
import FlexImagePanel from './components/3-flexPanelsImageGallery';
import AjaxTypeAhead from './components/4-ajaxTypeAhead';
import SlideInOnScroll from './components/5-slideInOnScroll';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>    
        <div>
          <Switch>
            <Route path="/slideinonscroll" component={SlideInOnScroll} />
            <Route path="/cssclock" component={CSSClock} />
            <Route path="/fleximagepanel" component={FlexImagePanel} />
            <Route path="/drumkit" component={Drumkit} />
            <Route path="/ajaxtypeahead" component={AjaxTypeAhead} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);