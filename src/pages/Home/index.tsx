import { BotaoLink, ContainerBotoes } from "../../components/Botao";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ContainerBotoes>
        <BotaoLink
          to="/hooks_exemplos"
          botao_label="Hooks Exemplos"
          botao_cor="primary"
          botao_type="button"
        />
      </ContainerBotoes>
    </div>
  );
}