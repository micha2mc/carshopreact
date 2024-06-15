import './css/Carrito.css';
import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
function Carrito({ productCarrito, setProductCarrito, total, setTotal, allProducts, setAllProducts, setSelectedCategory }) {

  const [isModal, setQuery] = useState(false);
  const handleModal = () => {
    setQuery(!isModal);
  };

  const pedidoRealizado = () => {
    setProductCarrito([]);
    setQuery(!isModal);
    setSelectedCategory(null);
    setTotal(0);
  };

  const onDeleteProduct = product => {

    const productAllTemp = allProducts.map(itemTem => itemTem.id === product.id ? { ...itemTem, stock: itemTem.stock + 1 } : itemTem);
    const products = productCarrito.map(itemTem => itemTem.id === product.id ? { ...itemTem, quantity: itemTem.quantity - 1 } : itemTem).filter(it => it.quantity >= 1);

    setProductCarrito([...products]);
    setTotal(total - product.price);

    return setAllProducts([...productAllTemp]);
  };

  return (
    <>
      <div className="col-lg-3">
        <h1 className="h2 pb-4">
          <a
            className="nav-icon position-relative text-decoration-none"
            href="#"
          >
            <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
          </a>
          Carrito
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Descrip.</th>
              <th scope="col">Código</th>
              <th scope="col">Cant.</th>
              <th scope="col">Precio</th>
              <th scope="col">Elim.</th>
            </tr>
          </thead>
          <tbody id="items">

            {productCarrito.map(product => (
              <>
                <tr>
                  <td><img src={product.img} width="50" height="41" /></td>
                  <td>{product.description.substring(0, 10) + '...'}</td>
                  <td>{product.cod}</td>
                  <td>{product.quantity}</td>
                  <td><span>{product.quantity * product.price}</span>€</td>
                  <td><svg
                    className='icon-close'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    onClick={() => onDeleteProduct(product)}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg></td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        {productCarrito.length !== 0 ? <>
          <table className="table table-borderless">
            <thead></thead>
            <tbody id="footer">
              <tr>
                <td className='total-a-pagar'>Total:</td>
                <td><span className='total-a-pagar'>{total}</span>€</td>
                <td colspan="2">
                  <Button color="primary" onClick={handleModal}>{" "}Realizar Pedido
                  </Button>

                </td>
              </tr>
            </tbody>
          </table>
        </> : <></>}

      </div>

      <Modal isOpen={isModal}>
        <ModalBody>
          <p className='mensajepedido'>Pedido realizado</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => pedidoRealizado()}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Carrito;