import { useState } from "react";
import styled from "styled-components";
import { ContainerBotoes, BotaoLink, Botao } from "../../../components/Botao";
import { Titulo } from "../../../components/Titulo";

export function UseStateExemplo() {
  const [counter, setCounter] = useState<number>(0);

  function increment() {
    setCounter(value => value + 1);
  }

  function decrement() {
    setCounter(value => value - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <Titulo titulo="UseStateExemplo" />
      <TituloEstilizado titulo={counter.toString()} />
      <ContainerBotoesEstilizado>
        <BotaoEstilizado
          botao_cor="info"
          botao_type="button"
          botao_label="+"
          onClick={increment}
        />
        <BotaoEstilizado
          botao_cor="warning"
          botao_type="button"
          botao_label="-"
          onClick={decrement}
        />
        <BotaoEstilizado
          botao_cor="secondary"
          botao_type="button"
          botao_label="Reset"
          onClick={reset}
        />
      </ContainerBotoesEstilizado>
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

const TituloEstilizado = styled(Titulo)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BotaoEstilizado = styled(Botao)`
  width: 100px;
  font-size: 20px;
  padding: 10px;
`;

const ContainerBotoesEstilizado = styled(ContainerBotoes)`
  button:nth-child(2) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const BotaoLinkEstilizado = styled(BotaoLink)`
  width: 100px;
  padding: 10px;
`;