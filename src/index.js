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
import reportWebVitals from './reportWebVitals';

//thunk を store にいれる
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/event/new" element={<EventNew/>}/>
          <Route path="/" element={<EventIndex/>}/>
        </Routes>
      </BrowserRouter>
      
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
