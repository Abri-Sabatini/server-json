import { getOneProducts } from "../service/productAPI.js"

//const id = data.products.map(product => product.id);

//Iniciar elementos 
const product_imagen = document.getElementById("product-imagen")
const product_titulo = document.getElementById("product-titulo")
const product_tiempo = document.getElementById("product-tiempo")
const product_descripcion = document.getElementById("product-descripcion")
const product_responsabe = document.getElementById("product-responsable")

//Rellenamos los detalles del producto
const fillDetailProduct = async()=>{
    const id = 1;
    const product = await getOneProducts(id)
    console.log(product)

    if (product) {
        product_imagen.src = product.image
        product_titulo.innerText = product.title
        product_tiempo.innerText  = '$${product.price}'
        product_descripcion.innerText  = product.description
        product_responsabe.innerText = product.category
    }
}

fillDetailProduct()