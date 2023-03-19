import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='w-[10%] h-screen bg-red-800 text-gray-50 p-0'>
      <p className='uppercase'>Dashboard</p>
      

   <div className='flex flex-col  justify-start items-start'>
   <Link to="/pedidos">Pedidos</Link>
    <Link to="/agotados">Agotados</Link>
    <Link to="/productos">Productos</Link>
    <Link to="/crear">Crear Producto</Link>
   </div>
      </div>
  )
}
