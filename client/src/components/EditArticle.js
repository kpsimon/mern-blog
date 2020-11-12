import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function EditArticle(props) {
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
      .put(`/articles/update/${props.match.params.id}`, articles)
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthor(res.data.author),
      ])
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <AddArticleContainer>
      <div className="container">
        <h1>Edit Article</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
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
            Edit Article
          </button>
        </form>
      </div>
    </AddArticleContainer>
  );
}

export default EditArticle;

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
