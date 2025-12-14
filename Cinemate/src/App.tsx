import './App.css';
import { Films } from './pages/FilmsPage';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Series } from './pages/SeriesPage';
import { Layout } from './components/Layout';
import { SingIn } from './pages/SinginPage';
import { SubscribePage } from './pages/SubscribePage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SeriesProfilePage } from './pages/SeriesProfilePage';
import { MyProfilePage } from './pages/MyProfilePage';
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/films"
          element={<Films />}
        />
        <Route
          path="/series"
          element={<Series />}
        />
        <Route
          path="/series/:id"
          element={<SeriesProfilePage />}
        />
        <Route
          path="/subscribe"
          element={<SubscribePage />}
        />
        <Route
          path="/profile/user/:id"
          element={<ProfilePage />}
        />
        <Route
          path="profile/me"
          element={<MyProfilePage />}
        />
      </Route>
      <Route
        path="/register"
        element={<RegistrationPage />}
      />
      <Route
        path="/signin"
        element={<SingIn />}
      />
      <Route
        path="/not-found"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
