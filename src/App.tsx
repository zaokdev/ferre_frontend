import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ContactoPage from "@/pages/contacto";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ContactoPage />} path="/contacto" />
    </Routes>
  );
}

export default App;
