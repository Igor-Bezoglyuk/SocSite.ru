import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Components/header.js';
import Menu from './Components/menu.js';
import Footer from './Components/footer.js';
import Home from './pages/Home.js';
import Massage from './pages/Massage.js';
import News from './pages/News.js';
import Music from './pages/Music.js';
import Games from './pages/Games.js';
import Option from './pages/Option.js';
import { BrowserRouter,Route} from "react-router-dom";


const App = (props) => {
  return (
  	<BrowserRouter>
  	<div className="App">
  	<Header/>
  	<div>
  	<Menu/>
  	<Route path="/Home" render={()=><Home postCreate={props.dataArray.postCreate}/>} />
  	<Route path="/Massage" render={()=><Massage dialogs={props.dataArray.dialogs}  massage={props.dataArray.massage}/>} />
  	<Route path="/News" render={()=><News/>} />
  	<Route path="/Music" render={()=><Music/>} />
  	<Route path="/Games" render={()=><Games/>} />
  	<Route path="/Option" render={()=><Option/>} />
  	</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
