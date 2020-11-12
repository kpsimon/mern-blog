import React, { useState } from "react";
import styled from "styled-components";
import spinner from "./giphy2.gif";
import { Link } from "react-router-dom";
import axios from 'axios';

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);
  //DELETE ARTICLE BY ID
  const deleteArticle = (id) => {
    axios.delete(`/articles/${id}`)
      .then(res => alert(res.data))
      setArticle(article.filter(elem => elem._id !== id));
  }
  return (
    <MainContainer>
      {!posts.length ? (
        <img src={spinner} alt="loading..." />
      ) : (
        posts.map((article, key) => (
          <div className="container" key={key}>
            <Link
              to={{
                pathname: `/article/${article._id}`,
              }}
            >
              <h2>{article.title}</h2>
            </Link>
            <p>{article.article}</p>
            <span className="badge badge-secondary p-2">{article.author}</span>
            <div className="row my-2">
              <div className="col-sm-2">
                <Link
                  to={`/update/${article._id}`}
                  type="submit"
                  className="btn btn-outline-success"
                >
                  Edit Article
                </Link>
              </div>
              <div className="col-sm-3">
                <button onClick={() => deleteArticle(article._id)} className="btn btn-outline-danger">
                  Delete Article
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
    </MainContainer>
  );
};

export default Articles;

//MAIN CONTAINER

const MainContainer = styled.div`
  margin: 4rem 0;

  button {
    width: 7rem;
    font-size: 14px;
  }

  img {
    width: 10rem;
    display: block;
    margin: 0 auto;
  }

  hr {
    margin: 2rem auto;
  }

  .badge {
    margin-bottom: 1rem;
  }

  .btn {
    width: 7rem;
    font-size: 14px;
  }
`;
