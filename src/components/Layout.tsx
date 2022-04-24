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
        ProAca
      </header>
      <main className="layoutMain">{children}</main>
      <footer className="layoutFooter">presented by ProAca</footer>
    </section>
  );
};

export default Layout;
