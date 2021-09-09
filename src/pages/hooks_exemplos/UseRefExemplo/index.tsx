import { useRef } from "react";
import { Botao, BotaoLink, ContainerBotoes } from "../../../components/Botao";
import { Titulo } from "../../../components/Titulo";

export function UseRefExemplo() {
  const inputEl = useRef<HTMLInputElement>(null);

  function onButtonClick() {
    if (inputEl.current) {
      inputEl.current.focus();
    } else {
      return;
    }
  }

  return (
    <div>
      <Titulo titulo="UseRefExemplo" />
      <div>
        <input ref={inputEl} type="text" />
        <Botao
          botao_label="Focus no input"
          onClick={onButtonClick}
        />
      </div>
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
