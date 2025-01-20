import React, { useState } from 'react';

const list = []
//titolo articolo e lista articoli
const Form = () => {
  const [title, setTitle] = useState(list);
  const [articles, setArticles] = useState({
    "text": "",
    "id": "",
    "titolo": "",
    "contenuto": "",
    "categoria": "",
    "immagini": "",
    "tags": [],
    "stato": ""
  });

  //funzione submit
  const handlerSubmit = (e) => {
    e.preventDefault();
    setTitle([articles, ...title]);
  };
  const handlerArticles = (e) => {
    const articles = {
      id: Date.now(),
      text: e.target.value,
    };
    setArticles(articles);
  };
  const handlerRemove = (id) => {
    const newTitle = title.filter((item) => item.id !== id);
    setTitle(newTitle);
  };

  return (
    <>
      <div className="container my-5">
        <form action="#" onSubmit={handlerSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Scrivi titolo da aggiungere..."
              value={articles.text}
              onChange={handlerArticles}
            />
            <button className="btn btn-outline-dark bg-success" type="submit">
              Aggiungi
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <ul className="list-group">
          {title.map((title) => (
            <li
              key={title.id}
              className="list-group-item  d-flex justify-content-between"
            >
              {title.text}
              <i
                className="fa-solid fa-trash"
                onClick={() => handlerRemove(title.id)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Form;