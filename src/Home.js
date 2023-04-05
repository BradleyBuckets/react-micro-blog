import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect run");
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
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
