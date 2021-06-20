import '../App.css';
import Avatar from '../img/avataricon.png';
import React from 'react';

const Posts = (props) =>{
  return(
    <div class="Post col w-25 text-start mt-5">
    <div class="PostBlock w-100 float-start mb-4">
       <img src={props.img1}/>
       <img class="Post-Img float-start me-3" src={Avatar} alt={"Avatar"}/>
       <h5 class="Post-Title">{props.TitleLogin}</h5>
       <p class="Post-Stroka">{props.StrokaSub}</p>
    </div>
    </div>
  );
}
const Home = (props) => {

  let postMAP = props.postCreate.map(p => <Posts TitleLogin={p.TitleLogin} StrokaSub={p.StrokaSub} img1={p.img1}/>)

  let newPostElement= React.createRef();

  let Test=()=>{
    debugger;
    let control=document.getElementById("file");
    control = control.files;
    if(control.length!== 0){
      let image;
      for (let i =0; i < control.length; i++){
         image = window.URL.createObjectURL(control[i]);
      }
      let posttext= newPostElement.current.value;
      if(posttext!=0){
        props.addImg1(image);

        props.addPost1(posttext);
      }
      else if(control.length ==0){
        props.addPost1(posttext);
      }
      else{
        props.addImg1(image);
      }
    }
  //
    //props.addPost1(posttext);
  }

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
     <div class="Create-Post float-start text-start mb-5">
     <form class=" mt-4" enctype="multipart/form-data">
        <div class="t-3">
         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={newPostElement}/>
         <input type="file" id="file" class="form-file-img mt-2 mb-2"/>
       </div>
       <div class="mb-3 form-check">
         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
         <label class="form-check-label" for="exampleCheck1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
       </div>
       <button type="button" class="btn btn-primary" onClick={Test}>Button</button>
       </form>
    </div>
       {postMAP}
     </div>
     </section>
     </>
  );
}

export default Home;
