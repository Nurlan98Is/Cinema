import "./App.css";
import { Films } from "./pages/Films";
import { HomePage } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Series } from "./pages/Series";
import { Layout } from "./components/Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/serials" element={<Series />} />
      </Route>
    </Routes>
  );
}

export default App;
