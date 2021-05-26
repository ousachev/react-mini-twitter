import React, { useState } from "react";
import "./post-add-form.css";

const PostAddForm = (props) => {
  const { onAdd } = props;
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");

  const checkEmptyStr = (value) => {
    value ? setTextError("Напишите что нибудь") : setTextError("");
    return !value;
  };

  const onValueChange = (e) => {
    setText(e.target.value);

    checkEmptyStr(e.target.value === "");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (checkEmptyStr(text === "")) {
      onAdd(text);
    }
    setText("");
  };

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="О чем вы  думаете сейчас?"
        className="form-control new-post-label"
        onChange={onValueChange}
        value={text}
      />
      <span className="error">{textError}</span>
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;
