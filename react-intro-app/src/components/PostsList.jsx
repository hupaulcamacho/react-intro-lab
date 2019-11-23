import React from 'react';
import './PostsList.css'
import Post from './Post'

class PostsList extends React.Component {
    render() {
        return (
            <div id='posts-list'>
                <h1> Posts </h1>
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}

export default PostsList;