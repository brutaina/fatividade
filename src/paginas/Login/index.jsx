import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
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
            <h1>simbora, loga aí</h1>
            <form>
                <label htmlFor="login_email">Email</label>
                <input type="text" onChange={(e) => handleEmailChange(e)} />

                <label htmlFor="login_senha">Senha</label>
                <input type="password" onChange={(e) => handleSenhaChange(e)} />

                <button onClick={(e) => handleLoginSubmit(e)}>Login</button>

                {/* Link para navegar para a página de cadastro */}
                <Link to="/cadastro">Ainda não tem uma conta? Cadastre-se aqui.</Link>
            </form>
        </div>
    );
}

export default Login;
