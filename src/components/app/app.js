import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";
import PostStatusFilter from "../post-status-filter/post-status-filter";

export default class App extends React.Component {
  state = {
    data: [
      { label: "Try to learn React", important: false, like: false, id: 1 },
      { label: "Try to learn JS", important: false, like: false, id: 2 },
      { label: "Try to learn Node", important: false, like: false, id: 3 }
    ],
    idMax: 4,
    term: "",
    filter: "all"
  };

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term) > -1;
    });
  }

  onUpdateSearch = term => {
    this.setState({ term });
  };

  filterPosts(items, filter) {
    if (filter === "like") {
      return items.filter(item => item.like);
    }
    return items;
  }

  onFilterSelect = filter => {
    this.setState({
      filter
    });
  };

  onDeleteItem = id => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return { data: newArr };
    });
  };

  onAddItem = body => {
    const newItem = {
      label: body,
      important: false,
      id: this.state.idMax + Math.random()
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  };

  onImportantLikeHandler = (id, key) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = { ...old, [key]: !old[key] };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];
      return {
        data: newArr
      };
    });
  };

  onImportant = id => this.onImportantLikeHandler(id, "important");
  onLike = id => this.onImportantLikeHandler(id, "like");

  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);
    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.onDeleteItem}
          onImportant={this.onImportant}
          onLike={this.onLike}
        />
        <PostAddForm onAdd={this.onAddItem} />
      </div>
    );
  }
}
