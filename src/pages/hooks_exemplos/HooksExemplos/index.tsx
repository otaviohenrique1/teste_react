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
          to="/hooks_exemplos/use_context_exemplo"
          botao_label="useContext"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_ref_exemplo"
          botao_label="useRef"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_memo_exemplo"
          botao_label="useMemo"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_debug_value_exemplo"
          botao_label="useDebugValue"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_callback_exemplo"
          botao_label="useCallback"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_imperative_handle_exemplo"
          botao_label="useImperativeHandle"
          botao_cor="primary"
          botao_type="button"
        />
        <BotaoLinkEstilizado
          to="/hooks_exemplos/use_layout_effect_exemplo"
          botao_label="useLayoutEffect"
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