import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";
function Post({post}){
  const {deletePost} = useContext(PostList);
    return(
        <div className="card post-card" style={{width: "28rem"}}>
  <div className="card-body ">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>
        deletePost(post.id)
      }>
      
    <FaDeleteLeft />
    
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>(
    <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
    ))}
    <div className="alert alert-success react" role="alert">
  Your post reacted by {post.reaction} people.
</div>
  </div>
</div>
    );
}
export default Post;