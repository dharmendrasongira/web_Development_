export async function CreatePostAction(data) {
    const { redirect } = await import("react-router-dom"); // Dynamically import redirect
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);

    // Split tags properly
    postData.tags = postData.tags.split(' ');

    try {
        const response = await fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });

        const post = await response.json();
        console.log("Post created:", post); // Debugging purpose
    } catch (error) {
        console.error("Error creating post:", error);
    }

    return redirect("/"); // Ensure redirect is correctly imported
}
