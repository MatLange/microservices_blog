import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CommentList = ({comments}) => {

    const renderedComments = Object.values(comments).map(comment => {    
        return (
            <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={comment.id}>
                <div className="card-body">
                    <li key={comment.id}>{comment.content}</li>
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
             {renderedComments}
        </div>
     );
};

export default CommentList;