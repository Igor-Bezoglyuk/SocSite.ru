import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Page from '../pages/Page.js';
import Page2 from '../pages/Page2.js';

const Menu = () => {
  return (
  <Router>
    <div>
    <nav>
    <ul class="Menu float-start">
      <li class="Menuli"><Link class="MenuSilka" to="/">Page</Link></li>
      <li class="Menuli"><Link class="MenuSilka" to="/Page2">Page2</Link></li>
      <li class="Menuli"><Link class="MenuSilka" to="">Group</Link></li>
      <li class="Menuli"><Link class="MenuSilka" to="">Music</Link></li>
      <li class="Menuli"><Link class="MenuSilka" to="">Game</Link></li>
      <li class="Menuli"><Link class="MenuSilka" to="">Option</Link></li>
    </ul>
    </nav>

    <Switch>
      <Route exact path="/" component={Page} />
      <Route path="/Page2" component={Page2} />
    </Switch>
    </div>
  </Router>
  );
}

export default Menu;