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
    if (e.target.name === "categoria") {
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
  //
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
  return
};

export default Form;