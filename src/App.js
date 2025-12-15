import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Recommended } from "./pages/Recommended";
import { Library } from "./pages/Library";
import { MyBook } from "./pages/MyBook";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Recommended/>} />
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/recommended" element={<Recommended/>}></Route>
        <Route path="/library" element={<Library/>}></Route>
        <Route path="/reading" element={<MyBook/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
