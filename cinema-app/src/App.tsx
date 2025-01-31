import "./App.css";
import { Films } from "./pages/FilmsPage";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Series } from "./pages/SeriesPage";
import { Layout } from "./components/Layout";
import { SingIn } from "./pages/SinginPage";
import { SubscribePage } from "./pages/SubscribePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/serials" element={<Series />} />
      </Route>
      <Route path="/singin" element={<SingIn />} />
      <Route path="/subscribe" element={<SubscribePage />} />
    </Routes>
  );
}

export default App;
