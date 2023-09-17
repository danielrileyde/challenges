import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <ArticleComponent />
    </div>
  );
}

function ArticleComponent() {
  return (
    <article className="article">
      <h2 className="article__title">Title of Article</h2>
      <label htmlFor="article-title">Random</label>
      <input type="text" id="article-title" name="article-title" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Wikipedia:Random"
      >
        Random Wikipedia Article
      </a>
    </article>
  );
}
