import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Layout.css';
import { useLoginCheck } from '../hooks/useLoginCheck';

const Layout: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const isLogin = useLoginCheck();
  useEffect(() => {
    if (!isLogin) {
      navigate('/question6/login');
    } else {
      navigate('/question6/main');
    }
  }, [isLogin, navigate]);
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
