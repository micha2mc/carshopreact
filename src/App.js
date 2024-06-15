import { useState } from "react";
import Navigation from "./components/Nav";
import Products from "./components/Products";
import "./App.css";


//Database
import products from "./database/data";


import Card from "./components/Card";
import Carrito from "./components/Carrito";
import TypeProduct from "./components/TypeProduct";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allProducts, setAllProducts] = useState(products);

  const [productCarrito, setProductCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  //******************Categorias */
  const [categorias, setCategorias] = useState([
    {
      categ: "",
      title: "Todos",
    },
    {
      categ: "sed",
      title: "Sedan",
    },
    {
      categ: "suv",
      title: "SUV - 4x4",
    },
    {
      categ: "fam",
      title: "Familiar",
    },
  ]);


  //****************Input filter *************************
  const addProduct = (obj) => {

    let miImagen = obj[0]['img']

    let imagen = 'img/' + miImagen.substring(miImagen.lastIndexOf('\\') + 1);
    setAllProducts([...allProducts, {
      id: allProducts.length + 1, cod: obj[0]['cod'], description: obj[0]['description'], price: obj[0]['price'], stock: obj[0]['stock'],
      category: obj[0]['category'], img: imagen
    }]);
  }

  //****************Buttons filter *************************
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(productsTemp, selected) {
    let filteredProducts = productsTemp;

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === selected
      );
    }
    return filteredProducts.map(
      ({ img, cod, description, price, stock, category, quantity }) => (
        <Card
          img={img}
          cod={cod}
          description={description}
          price={price}
          stock={stock}
          category={category}
          quantity={quantity}
          productCarrito={productCarrito}
          setProductCarrito={setProductCarrito}
          filteredProducts={filteredProducts}
          total={total}
          setTotal={setTotal}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      )
    );
  }

  const result = filteredData(allProducts, selectedCategory);

  return (
    <>
      <Navigation
        handleClick={handleClick}
        addProduct={addProduct}
        categorias={categorias}
        setCategorias={setCategorias}
      />

      <div className="container">
        <TypeProduct
          categorias={categorias}
          selectedCategory={selectedCategory} />
        <div className="row">
          <div className="col">
            <div className="row">

              <Products result={result} />

            </div>
          </div>

          <Carrito
            productCarrito={productCarrito}
            setProductCarrito={setProductCarrito}
            total={total}
            setTotal={setTotal}
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </>
  );
}

export default App;
