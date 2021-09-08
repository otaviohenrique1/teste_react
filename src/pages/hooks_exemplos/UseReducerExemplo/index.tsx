import { useReducer } from "react";
import { BotaoLink, ContainerBotoes } from "../../../components/Botao";

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

interface CountState {
  count: number;
}

function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;

  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        value: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        value: state.count - payload,
      };
    default:
      return state;
  }
}

export function UseReducerExemplo() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h1>UseReducerExemplo</h1>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}
      >-</button>
      <button
        onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}
      >+</button>
      <ContainerBotoes>
        <BotaoLink
          to="/hooks_exemplos"
          botao_label="Voltar"
          botao_cor="danger"
          botao_type="button"
        />
      </ContainerBotoes>
    </div>
  );
}

/*
  const [state, dispatch] = useReducer(reducer, initialArg, init);
  Uma alternativa para useState. Aceita um reducer do tipo (state, action) => newState e retorna o estado atual, junto com um método dispatch. (Se você está familiarizado com o Redux, você já sabe como isso funciona.)
  useReducer é geralmente preferível em relação ao useState quando se tem uma lógica de estado complexa que envolve múltiplos sub-valores, ou quando o próximo estado depende do estado anterior. useReducer também possibilita a otimização da performance de componentes que disparam atualizações profundas porque é possível passar o dispatch para baixo, ao invés de callbacks.
*/