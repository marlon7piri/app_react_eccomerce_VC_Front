import React, { useContext, useEffect, useState } from "react";
import CardTable from "./components/CardTable";
import Spinner from "./components/Spinner";
import { DataContext } from "./data/DataProvider";
import { BsSearch } from "react-icons/bs";

export default function Productos() {
  const [nombre, setNombre] = useState("");
  const {
    productos,
    isloading,
    getData,
    productosfiltrados,
    setProductosfiltrados,
    setProductos,
  } = useContext(DataContext);
  
  useEffect(() => {
    getData();
  
  },[]); 

  if (isloading) {
    return <Spinner />;
  }

  const filtrar = (e) => {
    setNombre(e.target.value);
    const productofiltradofound = productosfiltrados.filter((producto) => {
      if (
        producto.nombre
          .toLowerCase()
          .toString()
          .includes(nombre.toLocaleLowerCase().toString())
      ) {
        return producto;
      }
    });
    setProductos(productofiltradofound);
  };
 

  return (
    <div className=" bg-gray-500 h-[100vh] overflow-y-scroll w-full">
      <div className="flex relative">
        <input
          type="text"
          className="flex p-2 rounded-md items-end"
          onChange={(e) => filtrar(e)}
          placeholder="buscar producto"
        />
        <BsSearch className="text-5xl text-gray-50 " />
      </div>
      {productos &&
        productos.map((item) => <CardTable item={item} key={item.id} />)}
    </div>
  );
}
