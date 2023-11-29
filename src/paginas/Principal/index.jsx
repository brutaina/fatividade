import React from 'react';
import { Link } from 'react-router-dom';
import Cabecalho from '../../componentes/Cabecalho';
import Conteudo from '../../componentes/Conteudo2';
import Rodape from '../../componentes/Rodape';
import styles from './Principal.module.css';

const Principal = () => {
  return (
    <div className={styles.principalContainer}>
      <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!" />
      <Conteudo />

      {/* Opções de cadastro e login */}
      <div className={styles.opcoesContainer}>
        <Link to="/cadastro" className={styles.opcaoLink}>Cadastro</Link>
        <Link to="/login" className={styles.opcaoLink}>Login</Link>
      </div>

      <Rodape />
    </div>
  );
}

export default Principal;