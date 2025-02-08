/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData,feching} from '../store/Post-list-store' 
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";



const PostList = ( ) => {
    const {postList} =useContext(PostListData );
  

return (
    <>
     {feching && <LoadingSpinner/>} 
    {!feching && postList.length ===0 && <WelcomeMessage/>}
    {!feching && postList.map((post)=>(<Post key={post.id} post={post} />

))}
    </>
);}
export default PostList;