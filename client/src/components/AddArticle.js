import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function AddArticle() {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();

    //save state values into variable
    const articles = {
      title,
      article,
      author,
    };

    //reset state values
    setTitle("");
    setArticle("");
    setAuthor("");

    //send data to db
    axios
      .post("/articles/add", articles)
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <AddArticleContainer>
      <div className="container">
        <h1>Add New Article</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
              placeholder="Author Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="article">Article</label>
            <textarea
              type="text"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Post Article
          </button>
        </form>
      </div>
    </AddArticleContainer>
  );
}

export default AddArticle;

//MAIN CONTAINER
const AddArticleContainer = styled.div`
  margin: 2rem auto 6rem auto;
  padding: 4rem;
  width: 31.25rem;

  label {
    font-weight: bold;
  }

  h1 {
    font-weight: 900;
    color: var(--dark-green);
  }

  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover: {
      background: var(--light-green);
    }
  }

  .message {
    font-weight: 800;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
  }
`;
