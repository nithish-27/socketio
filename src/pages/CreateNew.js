import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreateNew = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  console.log(content);
  console.log(summary);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("file", image);
    data.set("content", content);
    console.log(image);
    e.preventDefault();
    const response = await fetch("http://localhost:3000/post", {
      method: "POST",
      body: data,
      credentials: "include",
      //   headers: { "content-Type": "application/json" },
    });
    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>create a new post</h5>
        <div className="form-row">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-input"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="summary" className="form-label">
            summary
          </label>
          <input
            type="text"
            className="form-input"
            id="title"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="image" className="form-label">
            image
          </label>
          <input
            type="file"
            className="form-input"
            id="title"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="form-row">
          <label htmlFor="content" className="form-label">
            content
          </label>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={content}
            onChange={setContent}
          />
        </div>
        <button type="submit" className="btn">
          create post
        </button>
      </form>
    </section>
  );
};

export default CreateNew;
