import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#007bff', color: 'white' }}>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ border: '4px solid rgba(255, 255, 255, 0.3)', borderLeftColor: '#fff', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite' }}></div>
          <p>Chargement...</p>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <p>Chargement terminé !</p>
        </div>
      )}
    </div>
  );
};

export default Loading;
