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
  const [formData, setFormData] = useState({ initialFormData });
  const [posts, setPosts] = useState([]);
  //funzione per modifica del modulo
  const handleField = (e) => {
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };
  //funzione nuovo articolo
  const handlerNewTask = (e) => {
    const newArticle = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newArticle);
  };

  //rimozione con filter
  const handlerRemove = (id) => {
    const setPosts = posts.filter((item) => item.id !== id);
  };

  return
};

export default Form;