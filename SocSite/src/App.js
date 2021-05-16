import logo from './logo.svg';
import './App.css';
import './img/Logo.jpg';
import Header from'./header.js';
import Footer from'./footer.js';
import VerMenu from'./VerMenu.js';
import Profile from'./Profile.js';
import PostCreate from'./PostCreate.js';
import Massage from'./massage.js';
import News from'./News.js';
import Music from'./Music.js';
import Game from'./Game.js';
import Option from'./Option.js';
import{BrowserRouter,Route}from"react-router-dom";

const App =()=> {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <div>
    <VerMenu/>
    <Route path='/Profile' component={Profile}/>
    <Route path='/Massage'component={Massage}/>
    <Route path='/News'component={News}/>
    <Route path='/Music'component={Music}/>
    <Route path='/Game'component={Game}/>
    <Route path='/Option'component={Option}/>
    </div>
    {/*<Profile/>*/}
    <Footer/>
    </BrowserRouter>
    </div>
  );
}




    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
        //  Learn React
      //  </a>
    //  </header>
    //</div>
//  );
//}

export default App;
