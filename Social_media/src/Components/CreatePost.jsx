import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost(){

  const { addPost } = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const hashTagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const hashTags = hashTagsElement.current.value.split(" ");

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionElement.current.value="";
    hashTagsElement.current.value="";

    addPost(userId,postTitle,postBody,reaction,hashTags);
  }
    return(
        <form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your user Id</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Your user Id"
    ref={userIdElement}/>
    
  </div>
  
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="How are you feeling today..."
    ref={postTitleElement}/>
    
  </div>
  
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post content</label>
    <textarea type="text" rows="3" className="form-control" id="body" aria-describedby="emailHelp"  placeholder="Tell us more about it."
    ref={postBodyElement}/>
    
  </div>
  
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Number of Reactions</label>
    <input type="text" className="form-control" id="reaction" aria-describedby="emailHelp" placeholder="How many people reacted to this post"
    ref={reactionElement}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" className="form-control" id="tags" aria-describedby="emailHelp" placeholder="Enter your hashtags using space"
    ref={hashTagsElement}/>

  </div>

  
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    );

}
export default CreatePost;