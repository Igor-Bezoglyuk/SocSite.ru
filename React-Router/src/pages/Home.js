const Post = (props) =>{
  return(
    <div class="Create-Post float-start text-start">
     <form class=" mt-4">
        <div class="t-3">
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         <div id="emailHelp" class="form-text">{props.Posts}</div>
       </div>
       <div class="mb-3 form-check">
         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
         <label class="form-check-label" for="exampleCheck1">{props.checkbox}</label>
       </div>
       <button type="submit" class="btn btn-primary">{props.botton}</button>
       </form>
    </div>
  );
}
const Home = (props) => {
  let postCreate=[
  { Posts:"Andrey"},
  { checkbox:"Проверка"},
  { botton:"Создать"},
  ]

  let postMAP = postCreate.map(p => <Post Posts={p.Posts} checkbox={p.checkbox} botton={p.botton} />)
  return (
    <>
    <section id="Kontent">
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
     {postMAP}
     </div>
     </section>
     <section id="Kontent2">
     </section>
     </>
  );
}

export default Home;
