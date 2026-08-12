import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p className="footer-meta">
          Built with <strong>React</strong> & <strong>Vanilla CSS</strong> — Registration ID: <strong>AP24110011233</strong>
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} UserDirectory Pagination Web Application. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
