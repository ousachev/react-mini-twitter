import React from "react";
import "./post-list-item.css";

const PostListItem = (props) => {
  const { label, onDelete, onImportant, onLike, important, like } = props;

  let classNames = "app-list-item d-flex justify-content-between";
  if (important) {
    classNames += " important";
  }
  if (like) {
    classNames += " like";
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm" type="button" onClick={onImportant}>
          <i className="fa fa-star"/>
        </button>
        <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
          <i className="fa fa-trash-o"/>
        </button>
        <i className="fa fa-heart"/>
      </div>
    </div>
  );
};

export default PostListItem;
