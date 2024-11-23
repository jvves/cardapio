import React, { useState } from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = useState(false);

  // Função para abrir o diálogo de edição
  const handleOpenDialog = () => {
    setOpen(true);
  };

  // Função para fechar o diálogo de edição
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <FormDialog
        open={open}
        setOpen={setOpen}
        selectedCard={props} // Passando o prato selecionado como objeto
        setListCard={props.setListCard}
        onRegisterGame={props.onRegisterGame}
      />
      <div className="card-container" onClick={handleOpenDialog}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-category">{props.category}</p>
        <h3 className="card-cost">R${props.cost}</h3>
      </div>
    </div>
  );
}
