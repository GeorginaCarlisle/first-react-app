import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            newPost: {}
        }
    }

    addNewPost(post) {
        console.log("Add new post called");
        console.log(post);
        console.log(this.state.newPost);
        this.setState({
            newPost: {
                title: post.title,
                body: post.body,
                userId: post.userId
            }
        }, () => {
            console.log("this.setState called");
            console.log(this.state.newPost);
        });
    }

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title:"Create post Works",
            body: "Hello Axios world!",
            userId: 123,
        }).then(response => {
            const post = response.data;
            console.log(post);
            (response.status===201) ? (this.addNewPost(post)) : (console.log("Error in retrieving data"))
        })
    }

    render() {
        return (
        <div>
            <button onClick={this.postToApi}>
                Create Post
            </button>
            {this.state.newPost ? (
                <div>
                    <h3>{this.state.newPost.title}</h3>
                    <h4>By User ID {this.state.newPost.userId}</h4>
                    <p>{this.state.newPost.body}</p>
                </div>
            ) : (
                <h3>No new Posts</h3>
            )}
            
        </div>
        )
    }
}

export default HTTPPost