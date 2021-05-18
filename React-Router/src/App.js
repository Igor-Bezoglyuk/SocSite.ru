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


const App = () => {
  return (
  	<BrowserRouter>
  	<div className="App">
  	<Header/>
  	<div>
  	<Menu/>
  	<Route exact path="/Home" component={Home} />
  	<Route exact path="/Massage" component={Massage} />
  	<Route exact path="/News" component={News} />
  	<Route exact path="/Music" component={Music} />
  	<Route exact path="/Games" component={Games} />
  	<Route exact path="/Option" component={Option} />
  	</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
