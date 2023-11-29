// Rodape.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './rodape.module.css';

const Rodape = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={styles.rodape}>
      <p>Data Atual: {currentDate}</p>
      <div className={styles.redesSociais}>
        <FontAwesomeIcon icon={faFacebook} className={styles.iconeRedeSocial} />
        <FontAwesomeIcon icon={faTwitter} className={styles.iconeRedeSocial} />
        <FontAwesomeIcon icon={faInstagram} className={styles.iconeRedeSocial} />
      </div>
    </div>
  );
}

export default Rodape;
