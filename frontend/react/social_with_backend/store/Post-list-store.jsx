/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";


// ✅ Context create kiya
export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
    addInitialPosts: () => {},
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

    // ✅ Fix: addPost function sahi se call hoga
    const addPost = (userID, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions.like,
                userId: userID,
                tags: tags,
            },
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postId },
        });
    };
    
    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: { posts },
        });
    };

    return (
        <PostList.Provider
            value={{
                postList,
                addPost,
                deletePost,
                addInitialPosts, // ✅ addInitialPosts function se call hoga, postList add kiya
            }}
        >
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
