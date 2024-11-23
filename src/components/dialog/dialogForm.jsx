import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(props) {
const [editValues, setEditValues] = useState({
id: props.selectedCard.id,
name: props.selectedCard.name,
cost: props.selectedCard.cost,
category: props.selectedCard.category,
});

// Atualiza o estado do formulário quando selectedCard mudar
useEffect(() => {
setEditValues({
id: props.selectedCard.id,
name: props.selectedCard.name,
cost: props.selectedCard.cost,
category: props.selectedCard.category,
});
}, [props.selectedCard]);

// Função para lidar com mudanças nos campos de entrada
const handleChange = (event) => {
const { id, value } = event.target;
setEditValues((prev) => ({
...prev,
[id]: value,
}));
};

// Função para salvar alterações
const handleSave = () => {
// Atualiza a lista com os novos dados do prato
props.setListCard((prevList) =>
prevList.map((item) =>
item.id === editValues.id ? { ...item, ...editValues } : item
)
);
// Fecha o diálogo após salvar
props.setOpen(false);
};

// Função para excluir o prato
const handleDelete = () => {
props.setListCard((prevList) =>
prevList.filter((item) => item.id !== editValues.id)
);
// Fecha o diálogo após excluir
props.setOpen(false);
};

return (
<Dialog open={props.open} onClose={() => props.setOpen(false)}>
<DialogTitle>Editar Prato</DialogTitle>
<DialogContent>
<TextField
disabled
margin="dense"
id="id"
label="ID"
value={editValues.id}
fullWidth
/>
<TextField
margin="dense"
id="name"
label="Nome do Prato"
value={editValues.name}
onChange={handleChange}
fullWidth
/>
<TextField
margin="dense"
id="cost"
label="Preço"
value={editValues.cost}
onChange={handleChange}
fullWidth
/>
<TextField
margin="dense"
id="category"
label="Categoria"
value={editValues.category}
onChange={handleChange}
fullWidth
/>
</DialogContent>
<DialogActions>
<Button onClick={() => props.setOpen(false)} color="primary">
Cancelar
</Button>
<Button onClick={handleDelete} color="secondary">
Excluir
</Button>
<Button onClick={handleSave} color="primary">
Salvar Alterações
</Button>
</DialogActions>
</Dialog>
);
}