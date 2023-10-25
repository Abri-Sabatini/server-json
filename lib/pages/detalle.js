import { getOneProducto } from "../service/productAPI.js"

const id = new URLSearchParams(window.location.search).get("id");

//Iniciar elementos 
const producto_imagen = document.getElementById("producto-imagen")
const producto_titulo = document.getElementById("producto-titulo")
const producto_tiempo = document.getElementById("producto-tiempo")
const producto_descripcion = document.getElementById("producto-descripcion")
const producto_responsable = document.getElementById("producto-responsable")

//Rellenamos los detalles del producto
const fillProducto = async()=>{
    return await getOneProducto(id)
    console.log(producto)
}

const fillDetailProducto = async () => {
    const producto = await fillProducto();
    if (producto) {
        producto_imagen.src = producto.imagen
        producto_titulo.innerText = producto.titulo
        producto_tiempo.innerText = `${producto.tiempo} días`;
        producto_descripcion.innerText  = producto.descripcion
        producto_responsable.innerText = producto.responsable
    }
}

fillDetailProducto()