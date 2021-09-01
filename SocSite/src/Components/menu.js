import {NavLink} from "react-router-dom";

export default function Menu ()  {
  return (
    <div>
    <nav>
    <ul class="Menu float-start">
      <li class="Menuli"><NavLink class="MenuSilka" to="/Home">Home</NavLink></li>
      <li class="Menuli"><NavLink class="MenuSilka" to="/Massage">Massege</NavLink></li>
      <li class="Menuli"><NavLink class="MenuSilka" to="/News">News</NavLink></li>
      <li class="Menuli"><NavLink class="MenuSilka" to="/Music">Music</NavLink></li>
      <li class="Menuli"><NavLink class="MenuSilka" to="/Games">Games</NavLink></li>
      <li class="Menuli"><NavLink class="MenuSilka" to="/Option">Option</NavLink></li>
    </ul>
    </nav>
    </div>
  );
}
