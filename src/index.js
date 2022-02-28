import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import reducer from './reducers'
import EventIndex from './componets/events_index';
import EventNew from './componets/events_new';
import EventShow from './componets/events_show';
import reportWebVitals from './reportWebVitals';

import { composeWithDevTools } from 'redux-devtools-extension';

//thunk を store にいれる
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/event/new" element={<EventNew/>}/>
          <Route path="/event/:id" element={<EventShow/>}/>          
          <Route path="/" element={<EventIndex/>}/>
          <Route path="/events" element={<EventIndex/>}/>          
        </Routes>
      </BrowserRouter>
      
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
