import { useMemo } from "react";
import { BotaoLink, ContainerBotoes } from "../../../components/Botao";
import { SubTitulo, Titulo } from "../../../components/Titulo";

const listaNumeros = [1,2];

const soma = (a: number, b: number) => a + b;

export function UseMemoExemplo() {
  const memoizedValue = useMemo(() => soma(listaNumeros[0], listaNumeros[1]), []);
  
  return (
    <div>
      <Titulo titulo="UseMemoExemplo" />
      <SubTitulo titulo={memoizedValue.toString()} />
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
