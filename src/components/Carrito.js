function Carrito({ productCarrito, setProductCarrito, total, setTotal }) {
  return (
    <>
      <div class="col-lg-3">
        <h1 class="h2 pb-4">
          <a
            class="nav-icon position-relative text-decoration-none"
            href="#"
          >
            <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
          </a>
          Carrito
        </h1>
        <table class="table">
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
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='icon-close'
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
          <table class="table table-borderless">
            <thead></thead>
            <tbody id="footer">
              <tr>
                <td>Total:</td>
                <td><span>{total}</span>€</td>
                <td colspan="2">

                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pedidoModal">
                    Realizar Pedido
                  </button>

                </td>
              </tr>
            </tbody>
          </table>
        </> : <></>}

      </div>
    </>
  );
}

export default Carrito;