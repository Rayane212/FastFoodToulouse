import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import RestaurantPage from './pages/RestaurantPage';
import Error404 from './pages/Error404';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToggleProvider } from './context/ToggleContext';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Temps d'attente pour l'affichage du composant Loading (2 secondes)
  };

  return (
    <ToggleProvider>
      <BrowserRouter>
        {isLoading && <Loading />} {/* Affiche le composant Loading si isLoading est true */}
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
              onChange={handleLoading} // Appelle la fonction handleLoading avant chaque changement de page
            />
            <Route
              path="/form"
              element={<FormPage />}
              onChange={handleLoading} // Appelle la fonction handleLoading avant chaque changement de page
            />
            <Route
              path="/address/:id"
              element={<RestaurantPage />}
              onChange={handleLoading} // Appelle la fonction handleLoading avant chaque changement de page
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ToggleProvider>
  );
}

export default App;
