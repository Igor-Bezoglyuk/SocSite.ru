import Createpost from './createpost.js';

const Profile = () => {
  return (
    <div id="article">
    <div id="Kontent">
	  <div id="Kontentblock" class="float-start ps-5">

    <div class="Kontent-Block-img mb-4"></div>
     
    <div class="Kontent-Profil-Block float-start text-start">
      <div class="Kontent-profile-img"></div>
      <ul class="spisok-profile float-end list-group">
        <li class="spisok-profile-li list-group-item bg-transparent">Login</li>
        <li class="spisok-profile-li list-group-item bg-transparent">Status</li>
        <li class="spisok-profile-li list-group-item bg-transparent">Adres</li>
        <li class="spisok-profile-li list-group-item bg-transparent">Interesy</li>
        <li class="spisok-profile-li list-group-item bg-transparent">Rabota</li>
        <li class="spisok-profile-li list-group-item bg-transparent">Silka</li>
      </ul>
     </div>
     <Createpost/>
     </div>
     </div>
     </div>
  );
}

export default Profile;