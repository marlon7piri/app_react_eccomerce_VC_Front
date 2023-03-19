import React, { useContext } from 'react'
import {MdDeleteForever} from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../data/DataProvider';
import { Toaster, toast } from "react-hot-toast";
export default function CardTable({item}) {
const navigate =useNavigate()
  const {deleteItem} = useContext(DataContext)

  return (
    <table className="table table-success table-striped w-full" key={item.id}>
      <thead>
        <tr>
          
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Fecha_Entrada</th>
      
          <th scope="col">precio</th>
        </tr>
      </thead>
      <tbody>
        <tr  className="relative">
         
         
         <td className='text-[14px]'>{item.nombre}</td>
          
          <td className='text-[14px]'>{item.cantidad}</td>
          <td className='text-[14px]'>{item.fecha_entrada}</td>
        
          <td className='text-[14px]'>{item.precio}</td>
          <MdDeleteForever className='text-3xl h-full text-red-700' onClick={()=>deleteItem(item.id)}/>
         <button onClick={()=>navigate(`/editar/${item.id}`)}>Editar</button>
        </tr>
        
      </tbody>
    
      <Toaster/>
    </table>
  );
}
