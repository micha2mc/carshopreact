import { Button } from "reactstrap";
import "./css/Card.css";

function Card({ img, cod, description, price, stock, productCarrito, setProductCarrito, filteredProducts, total, setTotal }) {

  const onAddProduct = () => {

    let product = filteredProducts.find(item => item.cod === cod);

    if (productCarrito.find(item => item.id === product.id)) {

      const products = productCarrito.map(itemTem => itemTem.id === product.id ?
        { ...itemTem, quantity: itemTem.quantity + 1 } : itemTem
      );
      setTotal(total + product.price * product.quantity);
      return setProductCarrito([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setProductCarrito([...productCarrito, product]);

  }


  return (
    <div className="col-12  mb-2  col-md-4">
      <div className="card mb-6 product-wap rounded-0">
        <div className="card rounded-0">
          <img className="card-img rounded-0 img-fluid" src={img} />
        </div>
        <div className="card-body">
          <p className="text-left mb-0">{cod}</p>
          <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
            <li>
              Descripción: <p>{description.substring(0, 170) + '...'}</p>
            </li>
          </ul>
          <p className="text-left mb-0">
            Precio: <span>{price}</span>€
          </p>
          <p className="text-left mb-0">
            Unidades Stock: <span>{stock}</span>
          </p>
          <div className="row pb-3">
            <div class="col d-grid">
              <Button className="btn btn-success btn-lg" onClick={() => onAddProduct()} >Agregar a la cesta</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
