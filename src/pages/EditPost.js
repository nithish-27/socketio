import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

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
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  console.log("[image]", image);
  const [content, setContent] = useState("");
  console.log(content);
  console.log(summary);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/post/" + id).then((response) => {
      response.json().then((data) => {
        console.log("[received data]", data);
        setTitle(data.title);
        setSummary(data.summary);
        setContent(data.content);
      });
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log("[data]", data);
    data.set("title", title);
    data.set("summary", summary);
    // data.set("file", image);
    data.set("id", id);
    if (image) {
      data.set("file", image);
    }

    // data.set("file", image?.[0]);
    data.set("content", content);

    const response = await fetch("http://localhost:3000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      navigate("/post/" + id);
    }
    //   body: data,
    //   credentials: "include",
    //   //   headers: { "content-Type": "application/json" },
    // });
    // if (response.ok) {
    //   navigate("/");
    // }
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
          update
        </button>
      </form>
    </section>
  );
};

export default CreateNew;
