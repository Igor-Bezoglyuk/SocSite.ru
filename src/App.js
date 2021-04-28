import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import footer from './footer.js';
import Menu from './menu.js';
import Profile from './profile.js';
import Createpost from './createpost.js';

const App = () => {
  return (
  	<div className="App">
    <Header/>
    <Menu/>
    <Profile/>
    <Createpost/>
    </div>
  );
}

export default App;
