import styled from "styled-components";
import { BotaoLink, ContainerBotoes } from "../../../components/Botao";
import { Titulo } from "../../../components/Titulo";

export function HooksExemplos() {
  return (
    <div>
      <Titulo titulo="Hooks Exemplos" />
      <ContainerBotoesEstilizado>
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_state_exemplo"
          botao_label="useState"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_reducer_exemplo"
          botao_label="useReducer"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_effect_exemplo"
          botao_label="useEffect"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/"
          botao_label="Voltar"
          botao_cor="danger"
          botao_type="button"
        />
      </ContainerBotoesEstilizado>
    </div>
  );
}

const ContainerBotoesEstilizado = styled(ContainerBotoes)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BotaoLinkEstilizado = styled(BotaoLink)`
  margin-bottom: 10px;
  width: 200px;

  a:last-child {
    margin-bottom: 0;
  }
`;