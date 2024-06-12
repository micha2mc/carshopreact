import './css/TypeProduct.css';
function TypeProduct({ categorias, selectedCategory }) {

    let message = 'Todos los productos'

    if (selectedCategory !== '') {
        const categTemp = categorias.filter(cat => cat.categ === selectedCategory);
        message = 'Productos de la categoria ' + categTemp[0].title;
    }
    return (
        <div className="typeproduct">
            <p>{message}</p>
        </div>


    );
}

export default TypeProduct;