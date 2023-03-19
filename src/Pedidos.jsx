
import { useContext, useEffect } from "react";
import { DataContext } from "./data/DataProvider";
import {notifi,} from "./components/Notificaciones.js"
import {Toaster} from 'react-hot-toast'

export default function Pedidos() {
  const {
    productos,
    pedidos,
    crearPedido,
    getPedidos,
    getData,
    newpedido,
    setNewPedido,
  } = useContext(DataContext);

  useEffect(() => {
    getData();
    getPedidos()
  }, [pedidos]);
 

  const handlerPedido = (e) => {
    e.preventDefault();

    crearPedido(newpedido);
    notifi("pedido realizado con exito")
  };

  const styleButton = "bg-red-500 rounded-md px-4 py-2 hover:bg-red-300 ";
  return (
    <div>
      <h1>Pedidos a realizar</h1>

      <form onSubmit={handlerPedido}>
        <select
          id=""
          onChange={(e) =>
            setNewPedido({ ...newpedido, nombre: e.target.value })
          }
          value={newpedido.nombre}
        >
          {productos &&
            productos.map((item) => (
              <option key={item.id}>{item.nombre}</option>
            ))}
        </select>

        <div>
          <label>Cantidad</label>
          <input
            type="number"
            placeholder="cantidad"
            onChange={(e) =>
              setNewPedido({ ...newpedido, cantidad:e.target.value })
            }
            value={newpedido.cantidad}
          />
        </div>
        <div>
          <button className={styleButton}>Hacer pedido</button>
        </div>
      </form>
<Toaster/>
    
    {
      pedidos.map(item=><p>{item.nombre}</p>)
    }
   
    </div>
  );
}
