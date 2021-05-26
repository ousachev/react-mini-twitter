import React from "react";
import "./search-panel.css";

const SearchPanel = ({ onUpdateSearch }) => {
  const onUpdateSearchHandler = (e) => {
    const term = e.target.value.toLowerCase();
    onUpdateSearch(term);
  };

  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Поиск по записям"
      onChange={onUpdateSearchHandler}
    />
  );
};
export default SearchPanel;
