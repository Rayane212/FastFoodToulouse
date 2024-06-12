import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import RestaurantPage from './pages/RestaurantPage';
import Error404 from './pages/Error404';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToggleProvider } from './context/ToggleContext';
import Loading from './components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    handleRouteChange();

    return () => clearTimeout();
  }, [location]);

  return (
    <>
      {isLoading && <Loading />}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <ToggleProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/address/:id" element={<RestaurantPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </ToggleProvider>
      </div>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
