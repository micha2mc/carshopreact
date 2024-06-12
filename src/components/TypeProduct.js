import './css/TypeProduct.css';
function TypeProduct({ categorias, selectedCategory }) {

    let message = 'Todos los productos'
    const categTemp = categorias.filter(cat => cat.categ === selectedCategory);
    if (selectedCategory !== '' && categTemp.length !== 0) {
        message = 'Productos de la categoria ' + categTemp[0].title;
    }
    return (
        <div className="typeproduct">
            <p>{message}</p>
        </div>


    );
}

export default TypeProduct;