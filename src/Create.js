import React from "react";

const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required />
        <label>Blog Content:</label>
        <textarea required></textarea>
        <label>Blog Author:</label>
        <select>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
