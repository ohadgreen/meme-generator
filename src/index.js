import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import CounterWrapper from "./components/counter/CounterWrapper";
import TilesWrapper from "./components/tiles/TilesWrapper";
import SubscriptionForm from "./components/form/SubscribeForm";
import Meme from "./components/meme/Meme";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Meme />}/>
              <Route path="/counter" element={<CounterWrapper />}/>
              <Route path="/tiles" element={<TilesWrapper />}/>
              <Route path="/subscribe" element={<SubscriptionForm />}/>
              <Route path="/ynet" element={"https://www.ynet.co.il/"}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
