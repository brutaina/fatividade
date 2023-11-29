import React, { useState } from 'react';
import styles from "../../componentes/Conteudo/Conteudo.module.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleSenhaChange(e) {
        setSenha(e.target.value);
    }

    function handleLoginSubmit(e) {
        e.preventDefault();

        // Buscar usuário e senha cadastrados na tela 1
        const usuarioCadastrado = JSON.parse(localStorage.getItem('user'));

        if (usuarioCadastrado !== null) {
            if (email === usuarioCadastrado.email && senha === usuarioCadastrado.senha) {
                alert("Usuário Logado com Sucesso!");
            } else {
                alert("Credenciais Incorretas. Tente Novamente!");
            }
        } else {
            alert("Usuário não encontrado. Registre-se primeiro.");
        }
    }

    return (
        <div id="div-login" className={styles.conteudo}>
            <h1>Login</h1>
            <form>
                <label htmlFor="login_email">Email</label>
                <input type="text" onChange={(e) => handleEmailChange(e)} />

                <label htmlFor="login_senha">Senha</label>
                <input type="password" onChange={(e) => handleSenhaChange(e)} />

                <button onClick={(e) => handleLoginSubmit(e)}>Login</button>
            </form>
        </div>
    );
}

export default Login;
