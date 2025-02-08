/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { useEffect, useState } from "react";

// ✅ Context create kiya
export const PostList = createContext({
    postList: [],
    feching:false,
    addPost: () => {},
    deletePost: () => {},
    
});

// ✅ Reducer function
const postListReducer = (CurrPostList, action) => {
    let newPostList = CurrPostList;

    if (action.type === "DELETE_POST") {
        newPostList = CurrPostList.filter((post) => post.id !== action.payload.postId);
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...CurrPostList]; // ✅ Naya post add kiya
    }
    else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts; // ✅ Multiple posts add kiya
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    const [feching, setFetching] = useState(true);

    
    // ✅ Fix: addPost function sahi se call hoga
    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postId },
        });
    };
    
  
    useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal;
        /** use effect */
    setFetching(true);
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then(
      
        setFetching(false)
          ); 
          return ()=>{controller.abort()} //*ab yaha useEffect ke andar cleanup karna hai
 
}, []);
    return (
        <PostList.Provider
            value={{
                postList,
                feching,
                addPost,
                deletePost,
              // ✅ addInitialPosts function se call hoga, postList add kiya
            }}
        >
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
