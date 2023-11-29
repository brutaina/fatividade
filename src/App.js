
import React from 'react'

import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape';
import CadastroUsuario from './paginas/CadastroUsuario';
import Login from './paginas/Login';

const App = () => {
  const urlLogo = 'https://img.freepik.com/vetores-gratis/comecar_53876-25533.jpg?w=360&t=st=1701230177~exp=1701230777~hmac=fe7f5b5f6b760462e285403e5e3c6ff113db596e498238a3ae8055b93a1a955d';

  return (
    <div>
      <Cabecalho
        logo={urlLogo}
        titulo="Favoritinhosss da bruh"
      />
      <CadastroUsuario />
      <Login />
      <Rodape />
    </div>
  );
}

export default App;