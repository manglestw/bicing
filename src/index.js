import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {bicing} from './reducers/bicing';
import {presentation} from './reducers/presentation';
import {watcher} from './sagas/bicingSaga';
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleWare = createSagaMiddleWare();
const reducers = combineReducers({bicing,presentation});
const store = createStore(  reducers,
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                            applyMiddleware(sagaMiddleWare)
    );
sagaMiddleWare.run(watcher);
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
