import React, {useState, useEffect} from 'react'
import axios from 'axios';

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [newPost, setNewPost] = useState({});

    const postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title:"Create post Works",
            body: "Hello Axios world!",
            userId: 123,
        }).then(response => {
            const post = response.data;
            console.log(post);
            response.status===201 ? (addNewPost(post)) : (console.log("Error in retrieving data"))
        })
    }

    const addNewPost = (post) => {
        console.log("Add new post called");
        console.log(post);
        console.log(newPost);
        const newestPost = {
            title: post.title,
            body: post.body,
            userId: post.userId
        };
        console.log(newestPost);
        setNewPost(newestPost);
        console.log(newPost);
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data) ? response.data : [response.data];
            setPosts(data);
        })
        .catch(error => {
            setError(error.message);
        })
    }, [])

    return (
        <div>
            <h2>Posts using hooks:</h2>
            {posts.length ? (
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <h4>By User ID {post.userId}</h4>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    )
                })) : (
                    error ? <p>{error}</p> : <h3>Loading posts</h3>
                )}
            <button onClick={postToApi}>
                Create Post
            </button>
            {newPost ? (
                <div>
                    <h3>{newPost.title}</h3>
                    <h4>By User ID {newPost.userId}</h4>
                    <p>{newPost.body}</p>
                </div>
            ) : (
                <h3>No new Posts</h3>
            )}
        </div>
    )
}

export default HTTPHooks