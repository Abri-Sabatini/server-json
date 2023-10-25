export function getAllProducts() {
    return fetch('/lib/service/products.json') // Reemplaza con la ruta correcta a tu archivo JSON
      .then(response => response.json())
      .then(data => data.products);
  }

  export function getOneProducts(id) {
    return fetch('/lib/service/products.json?id=${id}') // Reemplaza con la ruta correcta a tu archivo JSON
    .then(response => response.json())
    .then(data => data.products);
  }