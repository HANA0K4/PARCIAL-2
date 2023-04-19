import React from "react";

export const PostImage = ({ post }) => {
    return (
        <div className="post-list-item">
        <h3>{post.title}</h3>
        <img src={post.thumbnailUrl} alt={post.title} />
    </div>
    );
};
