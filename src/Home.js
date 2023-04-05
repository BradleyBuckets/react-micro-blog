import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading } = useFetch("http://localhost:8000/blogs");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  return (
    <div className="home">
      {isLoading && <h2>Please hold on, we are loading the data...</h2>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All Blogs"}
          //   handleDelete={handleDelete}
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
