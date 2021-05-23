import '../App.css';
import Avatar from '../img/avataricon.png';
import {NavLink} from "react-router-dom";

const Users = () =>{
  return(
    <div class="Massage-Blocks w-25 border-end border-2">
    <ul class="Massage-Spisok mb-5 ">
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to="">Андрей</NavLink></li>
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to="">Дмитрий</NavLink></li>
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to="">Саша</NavLink></li>
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to="">Света</NavLink></li>
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to="">Валера</NavLink></li>
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to="">Надя</NavLink></li>
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to="">Коля</NavLink></li>
     <li class="Massage-Spisok-Li"><NavLink class="Massage-Spisok-silka" to="">Катя</NavLink></li>
    </ul>
    </div>
  );
}
const Mail = () =>{
  return(
    <div class="Massage-Blocks w-50">
     <div class="Massage-Posts d-block mx-auto m-3 p-2">
     <img class="Massage-Posts-Img float-start me-3" src={Avatar} alt={"Avatar"}/>
     <h6 class="Massage-Posts-Title fs-5 fw-normal">Login Human</h6>
     <p class="Massage-Posts-Stroka fw-light">Сообщения от пользователя</p>
     </div>
    </div>
  );
}
const Massage = () => {
  return (
  	<section id="MassageContent">
    <div class="d-flex justify-content-center flex-wrap">
    <Users/>
    <Mail/>
    </div>
    </section>
  );
}

export default Massage;
