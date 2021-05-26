import React from "react";
import "./app-header.css";

const AppHeader = ({ liked, allPosts }) => {
  const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) =>
    txt[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  let a = sklonenie(allPosts, ["запись", "записи", "записей"]);
  return (
    <div className="app-header d-flex">
      <h1>Oleg Usachev</h1>
      <h2>
        {allPosts} {a}, из них понравилось {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
