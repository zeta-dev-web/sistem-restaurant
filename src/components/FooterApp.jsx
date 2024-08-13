import React, { useEffect, useState } from 'react';
import { FaHeart, FaCode , FaInstagram , FaWhatsapp, FaGithub } from 'react-icons/fa';
import "../css/FooterApp.css";

const FooterApp = ({ darkMode }) => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    <>Desarrollado con <FaHeart style={{ color: 'red' }} /> </>,
    <>Desarrollado por Zeta Dev <FaCode style={{ color: 'teal' }} /> </>
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 4000); // 

    return () => clearInterval(interval);
  }, []);
  return (
    <footer className={`footer ${darkMode ? 'bg-dark' : 'bg-body-secondary'}`}>
      <div className="footer-icons">
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="ig-icon-link">
          <FaInstagram  />
        </a>
        <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="ws-icon-link">
          <FaWhatsapp />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={darkMode ? 'git-dark-icon-link' : 'git-icon-link'}>
          <FaGithub />
        </a>
      </div>
      <hr className="text-secondary"/>
      <div className="footer-developer">
        <p className='fw-semibold'>{texts[currentText]}</p>
      </div>
    </footer>
  );
}

export default FooterApp;

