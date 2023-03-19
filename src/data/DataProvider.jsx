import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notifi } from "../components/Notificaciones";

import { createItemsRequest, deleteItemsRequest, getItemsRequest,getPedidosRequest,getProductRequest,updateProductRequest,crearPedidoRequest } from "./api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([{
   
  }])
  const [productosfiltrados, setProductosfiltrados] = useState([])
  const [isloading, setIsloading] = useState(false);
  const [newproduct, setNewProduct] = useState({
    nombre: "",
    cantidad: 0,
    fecha_entrada: "",
     precio: 0,
  });
  const [newpedido, setNewPedido] = useState({
    nombre:"",
    cantidad:0
  })






  const getData = async() => {
    try {
      setIsloading(true);
    const res =  await getItemsRequest()
    
        setProductos(res.data);
    setProductosfiltrados(res.data) 
        setIsloading(false);
    } catch (error) {
      console.log(error);
    }
      };

 const getPedidos =async ()=>{
 try {
  const res = await getPedidosRequest()
  
  
  setPedidos(res.data)
 } catch (error) {
  console.log(error);
 }
 }








  const deleteItem = async (id) => {
    console.log(id);
     await deleteItemsRequest(id)
  setProductos(productos.filter(item=>item.id != id))
  notifi("Producto eliminado")
  };


  const createItem=async(newproduct) =>{

    const productfound = productos.find(item=>item.nombre === newproduct.nombre)
   
    if(productfound){
      alert("el producto ya existe")
  return productos
    }else{
     
      const newitems = await createItemsRequest(newproduct)

      setProductos([...productos,newitems])
    }
   
  }
  const crearPedido = async (newpedido) =>{
 
    const pedidonuevo = await crearPedidoRequest(newpedido)
 setPedidos([...pedidos,pedidonuevo]);
      
    
  }



  const getProduct =async (id)=>{
try {
  const res =  await getProductRequest(id)
  return res.data
} catch (error) {
  console.log(error);
}}

const updateProduct=async (id,newproductedit)=>{
 try {

  const res = await updateProductRequest(id,newproductedit)
  setProductos(productos.map((producto)=>(producto.id === id ? res.data:producto)));
 } catch (error) {
  console.log(error);
 }

}


useEffect(() => {
  getData();
  
},[]); 
useEffect(() => {
  getPedidos();
  
},[]); 

  return (
    <DataContext.Provider value={{ setProductos,productos, isloading, deleteItem,createItem,getData,productosfiltrados ,setProductosfiltrados,getProduct,updateProduct,newproduct,pedidos,crearPedido, setNewProduct, getPedidos,newpedido, setNewPedido}}>
      {children}
    </DataContext.Provider>
  );
};
