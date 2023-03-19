import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/DataProvider";

import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import {notifi} from './Notificaciones.js'
export default function Form() {
  const {
    setProductos,
    productos,
    createItem,
    getProduct,
    newproductedit,
    updateProduct,
    newproduct,
    setNewProduct,
  } = useContext(DataContext);
  const navigate = useNavigate();
  const params = useParams();

 

  const handlersubmit = (e) => {
    e.preventDefault();

    createItem(newproduct);
    notifi("Producto creado")

    setNewProduct({
      nombre: "",
      cantidad: 0,
      fecha_entrada: "",
      precio: 0,
    });

    /* navigate("/productos"); */
  };

  const handlerEdit = (e) => {
    e.preventDefault();
    updateProduct(params.id, newproduct);
    notifi("Producto editado")
    setNewProduct({
      nombre: "",
      cantidad: 0,
      fecha_entrada: "",

      precio: 0,
    });
    navigate(-1);
  };

  useEffect(() => {
    (async () => {
      if (params.id) {
        const producto = await getProduct(params.id);
        setNewProduct({
          id: producto.id,
          nombre: producto.nombre,
          cantidad: producto.cantidad,
          fecha_entrada: producto.fecha_entrada,

          precio: producto.precio,
        });
      } else {
        if (!params.id) {
          setNewProduct({
            nombre: "",
            cantidad: 0,
            fecha_entrada: "",
            precio: 0,
          });
        }
      }
    })();
  }, [params.id]);

  return (
    <>
      <form
        className="m-auto"
        onSubmit={!params.id ? handlersubmit : handlerEdit}
      >
        <div>
          <label>Producto</label>
          <input
            type="text"
            placeholder="nombre del producto"
            className="p-2"
            onChange={(e) =>
              setNewProduct({ ...newproduct, nombre: e.target.value })
            }
            value={newproduct.nombre}
          />
        </div>

        <div>
          <label>Cantidad</label>
          <input
            type="number"
            placeholder="cantidad"
            className="p-2"
            onChange={(e) =>
              setNewProduct({ ...newproduct, cantidad: e.target.value })
            }
            value={newproduct.cantidad}
          />
        </div>
        <div>
          <label>Fecha de entrada</label>
          <input
            type="date"
            placeholder="fecha_entrada"
            className="p-2"
            onChange={(e) =>
              setNewProduct({ ...newproduct, fecha_entrada: e.target.value })
            }
            value={newproduct.fecha_entrada}
          />
        </div>

        <div>
          <label>Precio</label>
          <input
            type="number"
            placeholder="precio"
            className="p-2"
            onChange={(e) =>
              setNewProduct({ ...newproduct, precio: e.target.value })
            }
            value={newproduct.precio}
          />
        </div>

        <button className="group relative inline-block text-sm font-medium text-gray-900 focus:outline-none focus:ring active:text-indigo-500 shadow-md ">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block border border-current bg-white px-8 py-3">
            {!params.id ? "Crear" : "Editar"}
          </span>
        </button>
      </form>
      <Toaster />
    </>
  );
}
