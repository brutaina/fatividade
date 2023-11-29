// Cabecalho.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Cabecalho.module.css';

export default function Cabecalho(props) {
  return (
    <div className={`${styles.cabecalho} logo`}>
      <img src={props.logo} alt="Logo da Aplicação" className={styles.logo} />
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faHome} className={styles.menuIcon} />
        <FontAwesomeIcon icon={faHeart} className={styles.menuIcon} />
        <FontAwesomeIcon icon={faUser} className={styles.menuIcon} />
      </div>
      <p className={styles.titulo}>{props.titulo}</p>
    </div>
  );
}
