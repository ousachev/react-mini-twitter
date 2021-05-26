import React, { useState } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";
import PostStatusFilter from "../post-status-filter/post-status-filter";

const App = () => {
  const idMax = 4;
  const [data, setData] = useState([
    { label: "Try to learn React", important: false, like: false, id: 1 },
    { label: "Try to learn JS", important: false, like: false, id: 2 },
    { label: "Try to learn Node", important: false, like: false, id: 3 },
  ]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term) > -1;
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const filterPosts = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    }
    return items;
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const onDeleteItem = (id) => {
    const index = data.findIndex((elem) => elem.id === id);
    const before = data.slice(0, index);
    const after = data.slice(index + 1);
    const newArr = [...before, ...after];
    setData(newArr);
  };

  const onAddItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: idMax + Math.random(),
    };
    setData((data) => [...data, newItem]);
  };

  const onImportantLikeHandler = (id, key) => {
    const index = data.findIndex((elem) => elem.id === id);

    const old = data[index];
    const newItem = { ...old, [key]: !old[key] };

    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    setData(newArr);
  };

  const onImportant = (id) => onImportantLikeHandler(id, "important");
  const onLike = (id) => onImportantLikeHandler(id, "like");

  const liked = data.filter((item) => item.like).length;
  const allPosts = data.length;
  const visiblePosts = filterPosts(searchPost(data, term), filter);
  return (
    <div className="app">
      <AppHeader liked={liked} allPosts={allPosts} />
      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <PostStatusFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <PostList
        posts={visiblePosts}
        onDelete={onDeleteItem}
        onImportant={onImportant}
        onLike={onLike}
      />
      <PostAddForm onAdd={onAddItem} />
    </div>
  );
};

export default App;
