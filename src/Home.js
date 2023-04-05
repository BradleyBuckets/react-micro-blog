import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isLoading && <h2>Please hold on, we are loading the data...</h2>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All Blogs"}
          handleDelete={handleDelete}
        />
      )}
      {/* {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title={"Mario's Blogs"}
          handleDelete={handleDelete}
        />
      )} */}
    </div>
  );
};

export default Home;
