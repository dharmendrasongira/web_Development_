import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {
    const { addPost } = useContext(PostList);

    const userIDElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userID = userIDElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = parseInt(reactionsElement.current.value) || 0; // ✅ Convert to number
        const tags = tagsElement.current.value.split(" ");

        // ✅ Clear input fields
        userIDElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

        // ✅ Correct function call
        addPost(userID, postTitle, postBody, reactions, tags);
    };

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="userID" className="form-label">ENTER YOUR USER ID</label>
                <input ref={userIDElement} type="text" className="form-control" id="userID" placeholder="Enter your user ID" />
            </div>

            <div className="form-group">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input ref={postTitleElement} type="text" className="form-control" id="title" placeholder="What's on your mind?" />
            </div>

            <div className="form-group">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea ref={postBodyElement} className="form-control" rows="4" id="body" placeholder="Tell us more about your day"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                <input ref={reactionsElement} type="text" className="form-control" id="reactions" placeholder="How many people reacted?" />
            </div>

            <div className="form-group">
                <label htmlFor="tags" className="form-label">Please Enter Your Hashtags</label>
                <input ref={tagsElement} type="text" className="form-control" id="tags" placeholder="Example: happy sunny rainy" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default CreatePost;
