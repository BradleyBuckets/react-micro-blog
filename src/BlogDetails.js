import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blog, isLoading } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  return (
    <div className="blog-details">
      {isLoading && <h3>Please hold on, we are loading the data...</h3>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
