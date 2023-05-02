import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addnote" element={<AddNote />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
