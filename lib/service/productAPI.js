//npm install -g json-server
//npx json-server --watch assets/db.json  (es sin npx, pero a mí me sale error si no lo pongo)

export function getAllProductos(){
  return fetch('http://localhost:3000/productos')
    .then(res=>res.json())
    .then(json=>json)
}

export function getOneProducto(id){
  return fetch(`http://localhost:3000/productos/${id}`)
    .then(res=>res.json())
    .then(json=>json)
}