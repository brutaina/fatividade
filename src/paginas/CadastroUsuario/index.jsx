import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import styles from "../../componentes/Conteudo/Conteudo.module.css";

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  function handleNome(e) {
    setNome(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleConfirmacaoDeSenha(e) {
    setConfirmacaoSenha(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !email || !confirmacaoSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (confirmacaoSenha) {
      const user = { nome, email, senha: confirmacaoSenha };
      localStorage.setItem('user', JSON.stringify(user));
      alert("Usuário salvo com sucesso!");
    } else {
      alert("A senha não pode estar vazia");
    }
  }

  return (
    <div id="div-cadastro-usuario" className={styles.conteudo}>
      <h1>Cadastro de Usuário</h1>
      <form className={styles.formulario}>
        <label htmlFor="cadastro_nome">Nome</label>
        <input type="text" onChange={(e) => handleNome(e)} />

        <label htmlFor="cadastro_email">Email</label>
        <input type="text" onChange={(e) => handleEmail(e)} />

        <label htmlFor="cadastro_confirmacaoSenha">Confirmação de Senha</label>
        <input type="password" onChange={(e) => handleConfirmacaoDeSenha(e)} />

        <button onClick={(e) => handleSubmit(e)}>Salvar Usuário</button>

        {/* Link para navegar para a página de login */}
        <Link to="/login">Já tem uma conta? Faça login aqui.</Link>
      </form>
    </div>
  );
}

export default CadastroUsuario;
