/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData} from '../store/Post-list-store' 
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

import { useState } from "react";

const PostList = ( ) => {
    const {postList,addInitialPosts} =useContext(PostListData );
    //*use effect hum tab use karte jab hume ye decide karna ho ki ui ko kab repaint karna hai
    //*ab yaha use effect ke andar useEffect(ek function or jo perform karna,dependancy kab perform karn hai agar isko khalo
    //* chodha toh loop me baar barr call hogi or ese arry banake chooda toh fir rk baar intaill call hogi[]) hota hai
    //! *agar hum data fetch karna hai toh useEffect ke andar fetch karnenge [] matlab page load pe 
    //&& hum chaiye toh arrray me dependancy de skte like jab post delete ho tab load hona esa
const [feching, setFetching] = useState(true);

    useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal;
        /** use effect */
    setFetching(true);
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then(data=>{
        addInitialPosts(data.posts);
        setFetching(false);
          }); 
          return ()=>{controller.abort()} //*ab yaha useEffect ke andar cleanup karna hai
 
}, []);
return (
    <>
    {feching && <LoadingSpinner/>}
    {!feching && postList.length ===0 && <WelcomeMessage/>}
    {!feching && postList.map((post)=>(<Post key={post.id} post={post} />

))}
    </>
);}
export default PostList;