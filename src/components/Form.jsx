import React, { useState } from 'react';

const categorie = ["Tecnologia", "Salute", "Sport", "Cultura"];

const tags = [
  { id: 1, nome: "Javascript" },
  { id: 2, nome: "React" },
  { id: 3, nome: "CSS" },
  { id: 4, nome: "HTML" },
  { id: 5, nome: "Node" },
];

//initial form data è oggetto con tutte le proprietà
const Form = () => {
  const initialFormData = {
    id: "",
    titolo: "",
    categoria: "",
    immagini: "",
    tags: [],
    stato: "",
  };

  //post variabile setpost funzione 
  const [formData, setFormData] = useState(initialFormData);
  const [posts, setPosts] = useState([]);

  //funzione per modifica del modulo
  const handleField = (e) => {
    let value = e.target.value;
    if (e.target.name === "categorie") {
      value = categorie[e.target.value];
    }
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  //tags
  const handleTags = (e) => {
    let { tags, ...others } = formData;

    if (tags.included(e.target.value)) {
      tags = tags.filter((tag) => tag !== e.target.value);
    } else {
      tags = [...tags, e.target.value];
    }

    setFormData({ tags, ...others });
  };

  //submit
  const handlerSubmit = (e) => {
    e.preventDefault();
    setPosts([
      {
        id: self.crypto.randomUUID(),
        ...formData,
      },
      ...posts,
    ]);
  };

  //remove
  const handleRemovePost = (id) => {
    console.log(id);
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <>
      <div className="container my-5">
        <div className="card p-3 mb-3">
          <h3>Aggiungi un Articolo</h3>
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              <label htmlFor="titolo" className="form-label">
                Titolo
              </label>
              <input
                type="text"
                id="titolo"
                className="form-control"
                placeholder="Titolo..."
                name="titolo"
                value={formData.titolo}
                onChange={handleField}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="immagini" className="form-label">
                Foto
              </label>
              <input
                type="text"
                id="immagini"
                className="form-control"
                placeholder="Foto..."
                name="immagini"
                value={formData.immagini}
                onChange={handleField}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="didascalia" className="form-label">
                Scrivi una didascalia
              </label>
              <textarea
                id="didascalia"
                className="form-control"
                rows="5"
                placeholder="Didascalia..."
                name="didascalia"
                value={formData.didascalia}
                onChange={handleField}
              ></textarea>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                onChange={handleField}
                name="categoria"
                defaultValue=""
              >
                <option selected>Categorie</option>
                {categorie.map((categoria, index) => (
                  <option key={index} value={index}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <h4>Tags</h4>
              </label>
              {tags.map((tag) => (
                <div key={`tag${tag.id}`} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`tag${tag.id}`}
                    value={tag.nome}
                    onChange={handleTags}
                  />
                  <label className="form-check-label" htmlFor={`tag${tag.id}`}>
                    {tag.nome}
                  </label>
                </div>
              ))}
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="stato"
                name="stato"
                checked={formData.stato}
                onChange={handleField}
              />
              <label htmlFor="stato" className="form-check-label">
                Pubblicato
              </label>
            </div>
            <button type="submit" className="btn btn-success">
              Aggiungi
            </button>
          </form>
        </div>
        <div className="card p-4">
          <h2 className="mb-3">Lista Articoli</h2>
          {posts.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Immagine</th>
                  <th>Titolo</th>
                  <th>Contenuto</th>
                  <th>Categoria</th>
                  <th>Tags</th>
                  <th>Disponibile</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <img src={post.immagini} alt={post.titolo} width="100" />
                    </td>
                    <td>{post.titolo}</td>
                    <td>{post.didascalia}</td>
                    <td>{post.categoria}</td>
                    <td>{post.tags.join(", ")}</td>
                    <td>{post.stato ? "Sì" : "No"}</td>
                    <td>
                      <button
                        onClick={() => handleRemovePost(post.id)}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa-solid fa-trash-can">Delete</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3>Nessun Articolo</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;