import {NavLink} from "react-router-dom";
const VerMenu =()=> {
  return (

    	<div id="Kontent">
    	<ul class="Menu float-start">
    	<li class="Menuli"><NavLink class="MenuSilka" to="/Profile">Home</NavLink></li>
    	<li class="Menuli"><NavLink class="MenuSilka" to="/Massage">Massage</NavLink></li>
    	<li class="Menuli"><NavLink class="MenuSilka" to="/News">News</NavLink></li>
    	<li class="Menuli"><NavLink class="MenuSilka" to="/Music">Music</NavLink></li>
    	<li class="Menuli"><NavLink class="MenuSilka" to="/Game">Game</NavLink></li>
    	<li class="Menuli"><NavLink class="MenuSilka" to="/Option">Option</NavLink></li>
        </ul>
        </div>
  );
}

export default VerMenu;
