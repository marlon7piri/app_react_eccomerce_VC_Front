import axios from "axios";

export const getItemsRequest = async () => {
  return await axios.get("http://localhost:5000/productos");
};

export const deleteItemsRequest = async(id) => {

  return await axios.delete(`http://localhost:5000/productos/${id}`);
};

export const createItemsRequest =async(newproduct)=>{

  return await axios.post("http://localhost:5000/productos/",newproduct)
}



export const getProductRequest = async(id)=>{
return await axios.get(`http://localhost:5000/productos/${id}`)
}
export const updateProductRequest = async(id,newproductedit)=>{

return await axios.put(`http://localhost:5000/productos/${id}`,newproductedit)
}

/* --------------------------------------------------------- */


export const getPedidosRequest = async () => {
  return await axios.get("http://localhost:5000/pedidos");
};

export const crearPedidoRequest = async (newpedido) => {
  
  return await axios.post("http://localhost:5000/pedidos",newpedido);
};