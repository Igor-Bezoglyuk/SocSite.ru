import clas from'./Post.module.css';

const Post =(props)=> {
  return (
    <div class="Post float-start w-50 mt-5">
      <div class="float-start" className={clas.PostImg}></div>
      {props.message}
      <div class="PostlikeDis float-start position-absolute top-100 mt-1">
      <span>Like</span>/<span>Dislike</span>
      </div>
     </div>
  );
}

export default Post;
