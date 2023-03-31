import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "../COMPONENTES/Detalle/Detalle";
import Index from "../COMPONENTES/Index/Index";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/producto/:id" element={<Detalle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
