import { useState } from "react";
import Category from "./Category";
import "./css/Nav.css";
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

function Nav({ handleClick, addProduct }) {
  const [isModal, setQuery] = useState(false);
  const [cod, setCod] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImagen] = useState("");

  const handleModal = () => {
    setQuery(!isModal);
  };

  const handleCod = (event) => {
    setCod({ cod: event.target.value });
  };

  const handleCategory = (event) => {
    setCategory({ category: event.target.value });
  };
  const handleStock = (event) => {
    setStock({ stock: event.target.value });
  };
  const handlePrice = (event) => {
    setPrice({ price: event.target.value });
  };
  const handleDescription = (event) => {
    setDescription({ description: event.target.value });
  };
  const handleImage = (event) => {
    setImagen({ img: event.target.value });
  };

  const insertarNuevoProducto = () => {
    if (img && cod && category && stock && price) {
      let array = [
        {
          cod: cod["cod"],
          category: category["category"].substr(0, 3).toLowerCase(),
          stock: stock["stock"],
          price: price["price"],
          description: description["description"],
          img: img["img"],
        },
      ];
      
      addProduct(array);
    }
    setQuery(!isModal);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">
          <a
            class="navbar-brand text-success logo h1 align-self-center"
            href="#"
          >
            CarShop
          </a>

          <div
            class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div class="flex-fill">
              <ul class="nav navbar-nav d-flex">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Categorias
                  </a>
                  <ul class="dropdown-menu" id="categories">
                    <div class="col" id="item-categoria">
                      <Category handleClick={handleClick} />
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Button color="success" onClick={handleModal}>
              {" "}
              Añadir producto
            </Button>
          </div>
        </div>
      </nav>

      <Modal isOpen={isModal}>
        <ModalHeader>Añadir Producto</ModalHeader>
        <ModalBody>
          <FormGroup>
            <input
              className="form-control"
              name="cod"
              type="text"
              //autoComplete="off"
              onChange={handleCod}
              placeholder="Enter Cod"
            />
            <br />
            <input
              className="form-control"
              name="category"
              type="text"
              onChange={handleCategory}
              placeholder="Enter Category"
            />
            <br />
            <input
              className="form-control"
              name="stock"
              type="number"
              onChange={handleStock}
              placeholder="Enter Stock"
            />
            <br />
            <input
              className="form-control"
              name="price"
              type="text"
              onChange={handlePrice}
              placeholder="Enter Price"
            />
            <br />
            <input
              className="form-control"
              name="description"
              type="text"
              onChange={handleDescription}
              placeholder="Enter Description"
            />
            <br />
            <input
              className="form-control"
              name="image"
              type="file"
              onChange={handleImage}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => insertarNuevoProducto()}>
            Agregar
          </Button>
          <Button color="secondary" onClick={handleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Nav;
