function Carrito ({productCarrito, setProductCarrito}){
  console.log(productCarrito)
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
                  <th scope="col">Código</th>
                  <th scope="col">Cant.</th>
                  <th scope="col">Acción</th>
                  <th scope="col">Precio</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody id="items">
                
              </tbody>
            </table>
            <table class="table table-borderless">
              <thead></thead>
              <tbody id="footer"></tbody>
            </table>
          </div>
        </>
    );
}

export default Carrito;