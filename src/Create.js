import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  let [author, setAuthor] = useState("mario");
  let [isPending, setIsPending] = useState(false);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      console.log("New blog added");
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="luigi">Luigi</option>
        </select>
        {isPending && <button disabled>Adding...</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
