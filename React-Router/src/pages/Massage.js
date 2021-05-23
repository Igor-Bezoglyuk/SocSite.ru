import '../App.css';
import Avatar from '../img/avataricon.png';
import {NavLink} from "react-router-dom";

const Users = (props) =>{
  return(

    <ul class="Massage-Spisok mb-5 ">
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to={"/Massage/"+ props.id}>{props.name}</NavLink></li>
    </ul>
  );
}
const Mail = (props) =>{
  return(

     <div class="Massage-Posts d-block mx-auto m-3 p-2">
     <img class="Massage-Posts-Img float-start me-3" src={Avatar} alt={"Avatar"}/>
     <h6 class="Massage-Posts-Title fs-5 fw-normal">{props.LogoName}</h6>
     <p class="Massage-Posts-Stroka fw-light">{props.Stroka}</p>
     </div>

  );
}
const Massage = (props) => {
  return (
  	<section id="MassageContent">
    <div class="d-flex justify-content-center flex-wrap">
    <div class="Massage-Blocks w-25 border-end border-2">
    <Users name="Andrey" id="1"/>
    <Users name="Ivan" id="2"/>
    <Users name="Oleg" id="3"/>
    <Users name="Maxon" id="4"/>
    <Users name="Olga" id="5"/>
    </div>

    <div class="Massage-Blocks w-50">
    <Mail LogoName="h1" Stroka="вываыв"/>
    </div>
    </div>
    </section>
  );
}

export default Massage;
