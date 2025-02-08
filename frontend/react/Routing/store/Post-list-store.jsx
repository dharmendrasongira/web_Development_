import Post from "../components/Post";
import WelcomeMessage from "../components/WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
    const postList = useLoaderData() || []; // Ensure it's always an array

    return (
        <>
            {postList.length === 0 && <WelcomeMessage />}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;

// ✅ Corrected postloader function
export const postloader = async () => {
    try {
        const res = await fetch('https://dummyjson.com/posts');
        const data = await res.json();
        return data.posts || []; // Ensure it's an array
    } catch (error) {
        console.error("Error loading posts:", error);
        return []; // Return empty array on error
    }
};
