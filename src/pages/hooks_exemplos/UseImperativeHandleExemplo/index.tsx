import { ChangeEventHandler, FormEvent, forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import { BotaoLink, ContainerBotoes } from "../../../components/Botao";
import { Titulo } from "../../../components/Titulo";

export function UseImperativeHandleExemplo() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const formRef = useRef(null);
  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Email => ${email}`);
    console.log(`Senha => ${password}`);
  }

  return (
    <div>
      <Titulo titulo="UseImperativeHandleExemplo" />
      <Formulario
        onSubmit={handleSubmit}
        valueEmail={email}
        onChangeUpdateEmail={(event) => setEmail(event.target.value)}
        valuePassword={password}
        onChangeUpdatePassword={(event) => setPassword(event.target.value)}
      />
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

interface FormularioProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  valueEmail?: string;
  onChangeUpdateEmail?: ChangeEventHandler<HTMLInputElement>;
  valuePassword?: string;
  onChangeUpdatePassword?: ChangeEventHandler<HTMLInputElement>;
}

function Formulario(props: FormularioProps) {
  return (
    <FormEstilizado onSubmit={props.onSubmit}>
      <InputEstilizado
        type="email"
        placeholder="E-mail"
        value={props.valueEmail}
        onChange={props.onChangeUpdateEmail}
        required
      />
      <InputEstilizado
        type="password"
        placeholder="Senha"
        value={props.valuePassword}
        onChange={props.onChangeUpdatePassword}
        required
      />
    </FormEstilizado>
  );
}

export default forwardRef(Formulario);

const FormEstilizado = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const InputEstilizado = styled.input`
  margin-bottom: 10px;
`;