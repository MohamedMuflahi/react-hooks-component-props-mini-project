import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((e) => {
        return (
          <Article
            key={e.id}
            title={e.title}
            date={e.date}
            preview={e.preview}
            minutes={e.minutes}
          ></Article>
        );
      })}
    </main>
  );
}

export default ArticleList;
