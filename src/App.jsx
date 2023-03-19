import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <BrowserRouter>
  
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
