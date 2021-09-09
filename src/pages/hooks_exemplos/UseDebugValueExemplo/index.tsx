import { useDebugValue, useState } from "react";
import { Botao, BotaoLink, ContainerBotoes } from "../../../components/Botao";
import { SubTitulo, Titulo } from "../../../components/Titulo";

export function UseDebugValueExemplo() {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const useDebugValueResultado = useDebugValue(isOnline ? 'Online' : 'Offline');

  console.log(useDebugValueResultado);
  

  return (
    <div>
      <Titulo titulo="UseDebugValueExemplo" />
      <SubTitulo
        titulo={`O usuario esta => ${isOnline ? 'Online' : 'Offline'}`}
      />
      <ContainerBotoes>
        <Botao
          botao_label="Muda status do usuario"
          botao_type="button"
          botao_cor="info"
          onClick={() => setIsOnline(!isOnline)}
        />
      </ContainerBotoes>
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
