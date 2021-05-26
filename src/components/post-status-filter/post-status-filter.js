import React from "react";
import "./post-status-filter.css";

const PostStatusFilter = (props) => {
  const { filter, onFilterSelect } = props;
  const buttons = [
    { name: "all", label: "Все" },
    { name: "like", label: "Понравилось" },
  ];

  const buttonsArr = buttons.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        key={name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttonsArr}</div>;
};
export default PostStatusFilter;
