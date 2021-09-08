import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import styled from "styled-components";

type ColorTypesBotao = 'primary' | 'secondary' | 'success' |
  'info' | 'warning' | 'danger' | 'link';

type TypesBotao = 'submit' | 'reset' | 'button' | undefined;

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  botao_label: string;
  botao_cor?: ColorTypesBotao;
  botao_type?: TypesBotao;
}

export function Botao(props: BotaoProps) {
  return (
    <Button
      color={props.botao_cor}
      type={props.botao_type}
      {...props}
    >
      {props.botao_label}
    </Button>
  );
}

interface BotaoLinkProps extends BotaoProps {
  to: any;
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <Link to={props.to}>
      <Botao {...props}/>
    </Link>
  );
}

interface ContainerBotoesProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ContainerEstilizado = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export function ContainerBotoes(props: ContainerBotoesProps) {
  return (
    <ContainerEstilizado {...props}>
      {props.children}
    </ContainerEstilizado>
  );
}