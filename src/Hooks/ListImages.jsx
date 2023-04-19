import React from "react";
import { useSelector } from "react-redux";
import { useFetch} from "./UseFetchImages";
import { PostImage } from "./Image";
import "./Images.css"

const ListImages = () => {
    useFetch();
    const posts = useSelector((state) => state.posts.posts);

    return (
    <div className="post-list">
        {posts.map((post) => (
          <PostImage key={post.id} post={post} />
        ))}
    </div>
      
    );
};

export default ListImages;
