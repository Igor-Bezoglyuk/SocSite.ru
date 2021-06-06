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

  let dialMAP = props.dialogs.map(d => <Users name={d.name} id={d.id}/>)
  let massMAP = props.massage.map(m => <Mail LogoName={m.LogoNam} Stroka={m.Stroka}/>)

  return (
  	<section id="MassageContent">
    <div class="d-flex justify-content-center flex-wrap">
    <div class="Massage-Blocks w-25 border-end border-2">
    {dialMAP}
    </div>

    <div class="Massage-Blocks w-50">
    {massMAP}
    </div>
    </div>
    </section>
  );
}

export default Massage;
