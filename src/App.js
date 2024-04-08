import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import RestaurantPage from './pages/RestaurantPage';
import Error404 from './pages/Error404';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        {/* Ici, tu peux ajouter des composants qui restent constants, comme Header et Footer */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/address/:id" element={<RestaurantPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
