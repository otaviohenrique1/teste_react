import { useState } from "react";
import styled from "styled-components";
import { ContainerBotoes, BotaoLink } from "../../../components/Botao";
import { Titulo } from "../../../components/Titulo";
import { ThemeContext, Theme, useTheme } from './ThemeContext';

const MyPage = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <button
        onClick={() => setTheme(Theme.Dark)}
        style={{ marginRight: '10px' }}
      >
        switch to dark theme
      </button>
      <span>my page</span>
      </div>
  );
}

export function UseContextExemplo() {
  const [theme, setTheme] = useState(Theme.Light);

  return (
    <div>
      <Titulo titulo="UseContextExemplo" />
      <ThemeContext.Provider
        value={{ theme, setTheme }}
      >
        <div className="App">
          <header className="App-header">
            <MyPage />
          </header>
        </div>
      </ThemeContext.Provider>
      <ContainerBotoes>
        <BotaoLinkEstilizado
          to="/hooks_exemplos"
          botao_label="Voltar"
          botao_cor="danger"
          botao_type="button"
        />
      </ContainerBotoes>
    </div>
  );
}

const BotaoLinkEstilizado = styled(BotaoLink)`
  width: 100px;
  padding: 10px;
`;