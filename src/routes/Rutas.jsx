import React from "react";
import { Route, Routes } from "react-router-dom";
import Agotados from "../Agotados";
import Form from "../components/Form";
import Dashboard from "../Dashboard";
import Pedidos from "../Pedidos";
import Productos from "../Productos";

export default function Rutas() {
  return (
    <>
     <div className="flex">
      <Dashboard />
      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/agotados" element={<Agotados />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/crear" element={<Form/>} />
        <Route path="/editar/:id" element={<Form/>} />
      </Routes>
      </div>
    </>
  );
}
