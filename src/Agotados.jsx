import React, { useContext, useEffect, useState } from "react";
import CardTable from "./components/CardTable";
import { DataContext } from "./data/DataProvider";

export default function Agotados() {
  const [agotados, setAgotados] = useState([]);
  const { productos } = useContext(DataContext);
 
  const verificarAgotados = () => {
    const productsfound = productos.filter(
      (producto) => producto.estado === false
    );

    setAgotados(productsfound);
   
  };

  useEffect(() => {
    verificarAgotados();
  }, []);

  return (
    <div>
      {agotados.map((item) => (
        <table className="table table-success table-striped w-full" key={item.id}>
          <thead>
            <tr>
              <th scope="col">Nombre</th>

              <th scope="col">precio</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.id} className="relative">
             
                <td className="text-red-600 font-black text-[14px]">
                  {item.nombre}
                </td>
            

              <td className="text-[14px]">{item.precio}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}
