import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isLoading && <h3>Please hold on, we are loading the data...</h3>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title={"Featured Blogs"}
        />
      )}
    </div>
  );
};

export default Home;
