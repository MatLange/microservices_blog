import React from 'react';
import axios from 'axios';
import { useState } from 'react';


const PostCreate = () => {
    const [title, setTitle] = useState('');    
    const makePostRequest = async (title) => {
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle('');
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle('');   
    }
    return (
        <div className='container'>
            <h1>Create Post</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} className="form-control" onChange={event => setTitle(event.target.value) }/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;