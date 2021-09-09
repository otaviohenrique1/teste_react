import { BotaoLink, ContainerBotoes } from "../../../components/Botao";
import { Titulo } from "../../../components/Titulo";

export function UseLayoutEffectExemplo() {
  return (
    <div>
      <Titulo titulo="UseLayoutEffectExemplo" />
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
