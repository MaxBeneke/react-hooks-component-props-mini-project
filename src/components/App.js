import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";

console.log(blogData);
const {name, image, about, posts} = blogData

function App() {
  return (
    <div className="App">
     <Header name={name} />
     <About image={image} about={about} />
     <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
