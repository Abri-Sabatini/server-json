//Importaciones
import { getAllProductos } from "../service/productAPI.js"

//Instancias de elementos
const contenedor_porHacer = document.getElementById("contenedor-porHacer")
const contenedor_enProduccion = document.getElementById("contenedor-enProduccion")
const contenedor_porTestear = document.getElementById("contenedor-porTestear")
const contenedor_completada = document.getElementById("contenedor-completada")

const fillProductos = async ()=>{
    const productos = await getAllProductos()

    productos.forEach(producto => {
        const estado = producto.estado
        let container;

        if (estado === "Por hacer") {
            container = contenedor_porHacer;
        } else if (estado === "En producción") {
            container = contenedor_enProduccion;
        } else if (estado === "Por testear") {
            container = contenedor_porTestear;
        } else if (estado === "Completada") {
            container = contenedor_completada;
        }

        //Crear elemento en la categoría
        container.innerHTML += `
        <div class="col">
                <div class="card h-100">
                  <img 
                    style="min-height: 300px; max-height: 300px"
                    class="card-img-top"
                    src="${producto.imagen}" 
                    alt=""
                  >
                  <div class="card-body p-4">
                    <div class="text-center">
                      <h3 class="fw-bolder">${producto.titulo}</h3>
                      <p>Tiempo: ${producto.tiempo} días</p>
                    </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparen">
                    <div class="text-center">
                      <a href="/detalle.html?id=${producto.id}" class="btn btn-outline-info mt-auto">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>`
    });
}

fillProductos()