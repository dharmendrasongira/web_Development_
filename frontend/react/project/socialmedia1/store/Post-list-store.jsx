/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

// ✅ Pehle DEFAULT_POST_LIST define kiya
const DEFAULT_POST_LIST = [
    {
        id: 1,
        title: "Going to Mumbai",
        body: "Hi Friends, I am going to Mumbai for my vacations. Enjoy a lot. Peace out.",
        reactions: 2,
        userId: "user-9",
        tags: ["vacation", "Mumbai", "Enjoying"]
    },
    {
        id: 2,
        title: "Paas ho bhai",
        body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
        reactions: 15,
        userId: "user-12",
        tags: ["Graduating", "Unbelievable"]
    }
];

// ✅ Context create kiya
export const PostList = createContext({
    postList: [],
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
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    // ✅ Fix: addPost function sahi se call hoga
    const addPost = (userID, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
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

    return (
        <PostList.Provider
            value={{
                postList,
                addPost,
                deletePost,
            }}
        >
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
