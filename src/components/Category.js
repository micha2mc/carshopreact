import { useState } from "react";
import Buttons from "../components/Buttons";
import "./css/Category.css";
import { Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function Category({ handleClick, categorias, setCategorias }) {
  const [abierto, setQuery] = useState(false);
  const [newCat, setNewCat] = useState('');


  const handleModal = () => {
    setQuery(!abierto);
  };

  const handleChange = (event) => {
    setNewCat({ newCat: event.target.value })
  }

  const insertarNuevaCategoria = () => {
    setQuery(!abierto);
    setCategorias([...categorias, { categ: newCat.newCat.substr(0, 3).toLowerCase(), title: newCat.newCat }])
  }
  return (
    <>
      <div className="category-flex">
        {categorias.map((cat) => (
          <Buttons
            onClickHandler={handleClick}
            value={cat.categ}
            title={cat.title}
          />
        ))}
        <button onClick={handleModal}>Añadir Categoria</button>
      </div>
      <Modal isOpen={abierto}>
        <ModalHeader>Añadir Nueva Categoria</ModalHeader>
        <ModalBody>
          <FormGroup>
            <input className="form-control" name="nuevaCategoria" type="text" onChange={handleChange} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => insertarNuevaCategoria()}>Guardar</Button>
          <Button color="secondary" onClick={handleModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Category;
