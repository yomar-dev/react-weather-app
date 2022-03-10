import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      created by&nbsp;
      <a
        href="https://github.com/yomar-dev/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footer__link}
      >
        yomar-dev
      </a>
      &nbsp;- devChallenges.io
    </footer>
  );
};

export default Footer;
