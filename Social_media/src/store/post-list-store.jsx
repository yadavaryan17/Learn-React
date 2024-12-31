import { createContext,useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost: () => {},
    deletePost:() => {},
    addInitialPost:() =>{},
});
const postListReducer = (currPostList,action)=>{
    let newPostList = currPostList;
    if(action.type == "DELETE_POST"){
        newPostList= currPostList.filter((post) =>post.id !== action.payload.postId)

    }
    else if(action.type == "ADD_POST"){
        newPostList = [action.payload,...currPostList]
    }
    else if(action.type == "ADD_Initial_POST"){
        newPostList = action.payload.posts; 
    }
     return newPostList;
}

const PostListProvider = ({children}) =>{
    const [postList,dispatchPostList] = useReducer(postListReducer,[]);

    const addPost = (userId,postTitle,postBody,reaction,hashTags) =>{

        dispatchPostList({
            type: "ADD_POST",
            payload:{
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reaction: reaction,
                userId: userId,
                tags: hashTags,
            },
        })      
    };
    const deletePost = (postId) =>{
        dispatchPostList({
            type: "DELETE_POST",
            payload:{
                postId,
            },
        })
    }
    const addInitialPost = (posts)=>{
        dispatchPostList({
            type: "ADD_Initial_POST",
            payload:{
               posts,
            },
        })      

    }

    return <PostList.Provider value={
       { postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPost:addInitialPost,}
    
    }>{children}</PostList.Provider>
};



export default PostListProvider;