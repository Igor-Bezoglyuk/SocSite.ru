import logo from './logo.svg';
import './App.css';
import './img/Logo.jpg';
import Header from'./header.js';
import Footer from'./footer.js';
import VerMenu from'./VerMenu.js';
import Profile from'./Profile.js';
import PostCreate from'./PostCreate.js';

const App =()=> {
  return (
    <div>
    <Header/>
    <VerMenu/>
    <Profile/>
    <Footer/>
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
