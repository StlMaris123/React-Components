import React from 'react';
import Faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar"  src={Faker.image.avatar()}/>
        </a>
        <div className="content">
            <a href="/" className="author">Sam</a>
            <div className="metadata">
                <span className="date">Today at 6:00 P.M</span>
            </div>
            <div className="text">
                Nice Blog Post
            </div>
        </div>
    </div> 
    );
};

export default CommentDetail;