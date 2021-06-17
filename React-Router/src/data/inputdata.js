import {renderalways} from "../render";

export let addPost1=(postMessage)=>{
let newpost={
  TitleLogin:postMessage,
  StrokaSub:postMessage
};
data.postCreate.push(newpost);
renderalways()
}

export let addPost2=(postMessageText)=>{
  let newpost={
    LogoName:postMessageText,
    Stroka:postMessageText
  };
  data.massage.push(newpost);
  renderalways()
  }

let data ={
  dialogs:[
  {id:1, name:"Andrey"},
  {id:2, name:"Ivan"},
  {id:3, name:"Oleg"},
  {id:4, name:"Maxon"},
  {id:5, name:"Olga"}
],
massage:[
  {LogoName:"Andrey", Stroka:"Привет"},
  {LogoName:"Ivan", Stroka:"Как дела?"},
  {LogoName:"Oleg", Stroka:"Да норм по тихому?"},
  {LogoName:"Maxon", Stroka:"Я немогу понять!"},
  {LogoName:"Olga", Stroka:"Где компанента?"},
],
postCreate:[
{ TitleLogin:"Andrey", StrokaSub:"Подробный важный, текст поста"},
{ TitleLogin:"Andrey", StrokaSub:"Подробный важный, текст поста"},
{ TitleLogin:"Andrey", StrokaSub:"Подробный важный, текст поста"},
{ TitleLogin:"Andrey", StrokaSub:"Подробный важный, текст поста"}
]
}

export default data;
