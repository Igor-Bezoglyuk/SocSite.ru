import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import data from './data/inputdata.js';
import {addPost1} from './data/inputdata.js';
import {addPost2} from './data/inputdata.js';


export let renderalways=()=>{
ReactDOM.render(
  <React.StrictMode>
    <App dataArray={data} addPost1={addPost1} addPost2={addPost2}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
