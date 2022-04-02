import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Layout.css';

const Layout: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const movePage = () => {
    navigate(`/`);
  };
  return (
    <section className="layoutWrapper">
      <header className="layoutHeader" onClick={movePage}>
        React塾
      </header>
      <main className="layoutMain">{children}</main>
      <footer className="layoutFooter">Footer</footer>
    </section>
  );
};

export default Layout;
