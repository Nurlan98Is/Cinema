import "./App.css";
import { Films } from "./pages/FilmsPage";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Series } from "./pages/SeriesPage";
import { Layout } from "./components/Layout";
import { SingIn } from "./pages/SinginPage";
import { SubscribePage } from "./pages/SubscribePage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/serials" element={<Series />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/signin" element={<SingIn />} />
      <Route path="/not-found" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
