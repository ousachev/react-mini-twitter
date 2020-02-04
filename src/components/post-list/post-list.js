import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

const PostList = ({ posts, onDelete, onImportant, onLike }) => {
  const elements = posts.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={id}>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onImportant={() => onImportant(id)}
          onLike={() => onLike(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
