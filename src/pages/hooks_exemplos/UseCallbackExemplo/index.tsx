import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { Botao, BotaoLink, ContainerBotoes } from "../../../components/Botao";
import { Titulo } from "../../../components/Titulo";

export function UseCallbackExemplo() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const updateEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value),
    [setEmail]
  );

  const updatePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value),
    [setPassword]
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Email => ${email}`);
    console.log(`Senha => ${password}`);
  }

  return (
    <div>
      <Titulo titulo="UseCallbackExemplo" />
      <FormEstilizado onSubmit={handleSubmit}>
        <InputEstilizado
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={updateEmail}
          required
        />
        <InputEstilizado
          type="password"
          placeholder="Senha"
          value={password}
          onChange={updatePassword}
          required
        />
        <ContainerBotoes>
          <Botao
            botao_label="Salvar"
            botao_cor="info"
            botao_type="submit"
          />
        </ContainerBotoes>
      </FormEstilizado>
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

/*
import { useCallback } from "react";
import { BotaoLink, ContainerBotoes } from "../../../components/Botao";
import { SubTitulo, Titulo } from "../../../components/Titulo";

export function UseCallbackExemplo() {  
  const soma = (a: number, b: number) => a + b;
  const memoizedCallback = useCallback(() => soma(1, 2), []);

  return (
    <div>
      <Titulo titulo="UseCallbackExemplo" />
      <SubTitulo titulo={`${memoizedCallback}`}/>
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
*/
