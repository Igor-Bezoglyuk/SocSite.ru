import '../App.css';
import Avatar from '../img/avataricon.png';

const Massage = () => {
  return (
  	<section id="MassageContent">
    <div class="d-flex justify-content-center flex-wrap">
    <div class="Massage-Blocks w-25 border-end border-2">
    <ul class="Massage-Spisok mb-5 ">
     <li class="Massage-Spisok-Li"><a class="Massage-Spisok-silka" to="">Андрей</a></li>
     <li class="Massage-Spisok-Li"><a class="Massage-Spisok-silka" to="">Дмитрий</a></li>
     <li class="Massage-Spisok-Li"><a class="Massage-Spisok-silka" to="">Саша</a></li>
     <li class="Massage-Spisok-Li"><a class="Massage-Spisok-silka" to="">Света</a></li>
     <li class="Massage-Spisok-Li"><a class="Massage-Spisok-silka" to="">Валера</a></li>
     <li class="Massage-Spisok-Li"><a class="Massage-Spisok-silka" to="">Надя</a></li>
     <li class="Massage-Spisok-Li"><a class="Massage-Spisok-silka" to="">Коля</a></li>
     <li class="Massage-Spisok-Li"><a class="Massage-Spisok-silka" to="">Катя</a></li>
    </ul>
    </div>

    <div class="Massage-Blocks w-50">

     <div class="Massage-Posts d-block mx-auto m-3 p-2">
     <img class="Massage-Posts-Img float-start me-3" src={Avatar} alt={"Avatar"}/>
     <h6 class="Massage-Posts-Title fs-5 fw-normal">Login Human</h6>
     <p class="Massage-Posts-Stroka fw-light">Сообщения от пользователя</p>
     </div>

    </div>
    </div>
    </section>
  );
}

export default Massage;