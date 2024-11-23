import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import "./App.css";
import Card from "./components/cards/card";

export default function App() {
  const [values, setValues] = useState({});
  const [listCard, setListCard] = useState([]);

  // Função para buscar os dados do Local Storage
  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setListCard(storedCards);
  }, []);

  // Função para adicionar um novo jogo/receita
  const handleRegisterGame = () => {
    const newCard = {
      id: Date.now(), // Gera um ID único com base no timestamp atual
      name: values.name,
      cost: values.cost,
      category: values.category,
    };

    const updatedList = [...listCard, newCard];
    setListCard(updatedList);
    localStorage.setItem("cards", JSON.stringify(updatedList)); // Salva no Local Storage
  };

  // Função para capturar os valores do input
  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Adicionar Pratos</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Preço"
          name="cost"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Categoria"
          name="category"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterGame} className="register-button">
          Cadastrar
        </button>
      </div>

      <div className="menu">
        <h1 className="menu-title">Cardápio</h1>
        {listCard.map((val) => (
          <Card
            listCard={listCard}
            setListCard={setListCard}
            key={val.id}
            id={val.id}
            name={val.name}
            cost={val.cost}
            category={val.category}
          />
        ))}
      </div>
    </div>
  );
}