import React from "react";
import blogData from "../data/blog";

function Header(props) {
  return (
    <header>
      <h1>{props.blogName}</h1>
    </header>
  );
}

function About(props) {
  const { imageSrc = "https://via.placeholder.com/215", aboutText } = props;

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

function ArticleList(props) {
  const articles = props.posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date || "January 1, 1970"}
      preview={post.preview}
    />
  ));

  return <main>{articles}</main>;
}

function Article(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>{props.preview}</p>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About imageSrc={blogData.image} aboutText={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;