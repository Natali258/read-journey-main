import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import { Recommended } from "./pages/Recommended";
import { Library } from "./pages/Library";
import { MyBook } from "./pages/MyBook";
import './App.css';
import { AuthLayout } from "./components/Layouts/AuthLayout";
import { MainLayout } from "./components/Layouts/MainLayout";


function App() {

  return (
    <div className="app">
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<AuthLayout/>} />
          <Route path="/recommended" element={<Recommended/>}></Route>
          <Route path="/library" element={<Library/>}></Route>
          <Route path="/reading" element={<MyBook/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
