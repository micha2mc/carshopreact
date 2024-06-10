import { Button } from "reactstrap";

function Card({ img, cod, description, price, stock, productCarrito, setProductCarrito, filteredProducts }) {

  const onAddProduct = () => {

    let product = filteredProducts.find(item => item.cod === cod);

    if (productCarrito.find(item => item.id === product.id)) {

      const products = productCarrito.map(itemTem => itemTem.id === product.id ?
        { ...itemTem, quantity: itemTem.quantity + 1 } : itemTem
      );
      return setProductCarrito([...products]);
    }
    setProductCarrito([...productCarrito, product]);

  }


  return (
    <div class="col-12  mb-2  col-md-4">
      <div class="card mb-6 product-wap rounded-0">
        <div class="card rounded-0">
          <img class="card-img rounded-0 img-fluid" src={img} />
        </div>
        <div class="card-body">
          <p class="text-left mb-0">{cod}</p>
          <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
            <li>
              Descripción: <p>{description}</p>
            </li>
          </ul>
          <p class="text-left mb-0">
            Precio: <span>{price}</span>€
          </p>
          <p class="text-left mb-0">
            Unidades Stock: <span>{stock}</span>
          </p>
          <div class="row pb-3">
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
