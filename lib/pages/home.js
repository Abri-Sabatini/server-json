//Importaciones
import { getAllProducts } from "../service/productAPI.js"

//Instancias de elementos
const contenedor_porHacer = document.getElementById("contenedor-porHacer")
const contenedor_enProduccion = document.getElementById("contenedor-enProduccion")
const contenedor_porTestear = document.getElementById("contenedor-porTestear")
const contenedor_completada = document.getElementById("contenedor-completada")

const fillProducts = async ()=>{
    const products = await getAllProducts()

    products.forEach(product => {
        const category = product.category
        let container;

        if (category === "men's clothing") {
            container = contenedor_porHacer;
        } else if (category === "jewelery") {
            container = contenedor_enProduccion;
        } else if (category === "electronics") {
            container = contenedor_porTestear;
        } else if (category === "women's clothing") {
            container = contenedor_completada;
        }

        //Crear elemento en la categoría
        container.innerHTML += `
        <div class="col">
                <div class="card h-100">
                  <img 
                    style="min-height: 300px; max-height: 300px"
                    class="card-img-top"
                    src="${product.image}" 
                    alt=""
                  >
                  <div class="card-body p-4">
                    <div class="text-center">
                      <h3 class="fw-bolder">${product.title}</h3>
                      <p>${product.price} </p>
                      <p>${product.description} </p>
                    </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparen">
                    <div class="text-center">
                      <a href="/detalle.html?id=${product.id}" class="btn btn-outline-info mt-auto">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>`
    });
}

fillProducts()