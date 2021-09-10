import styled from "styled-components";
import { BotaoLink, ContainerBotoes } from "../../components/Botao";
import { Titulo } from "../../components/Titulo";

export function Home() {
  return (
    <div>
      <Titulo titulo="Home" />
      <ContainerBotoesEstilizado>
        <BotaoLinkEstilizado
          to="/hooks_exemplos"
          botao_label="Hooks Exemplos"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/teste_api"
          botao_label="Teste api"
          botao_cor="primary"
          botao_type="button"
        />
      </ContainerBotoesEstilizado>
    </div>
  );
}

const BotaoLinkEstilizado = styled(BotaoLink)`
  width: 200px;
`;

const ContainerBotoesEstilizado = styled(ContainerBotoes)`
  display: flex;
  flex-direction: column;

  a:first-child {
    margin-bottom: 10px;
  }
`;