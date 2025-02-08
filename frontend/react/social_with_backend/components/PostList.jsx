import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData} from '../store/Post-list-store' 
import WelcomeMessage from "./WelcomeMessage";

const PostList = ( ) => {
    
    const {postList,addInitialPosts} =useContext(PostListData );
    const handelonGetPostClick=()=>{
        fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(data=>{
    addInitialPosts(data.posts);
});
    }
return (
    <>
    {postList.length ===0 && <WelcomeMessage onGetPostClick ={handelonGetPostClick}/>}
    {postList.map((post)=>(<Post key={post.id} post={post} />

))}
    </>
);}
export default PostList;