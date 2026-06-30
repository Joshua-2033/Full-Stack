import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Login from '../Pages/core/login.jsx';
import StudentTablePage from '../Pages/core/Table.jsx';
import './index.css';

function App() {
  const [page, setPage] = useState(() => {
    return window.location.pathname === '/table' ? 'table' : 'login';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setPage(path === '/table' ? 'table' : 'login');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const goToTable = () => {
    setPage('table');
    window.history.pushState({}, '', '/table');
  };

  const goToLogin = () => {
    setPage('login');
    window.history.pushState({}, '', '/');
  };

  return page === 'table' ? (
    <StudentTablePage onBack={goToLogin} />
  ) : (
    <Login onLogin={goToTable} />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
