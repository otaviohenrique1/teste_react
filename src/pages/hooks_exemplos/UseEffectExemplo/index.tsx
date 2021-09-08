import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import { ContainerBotoes, BotaoLink } from "../../../components/Botao";
import { SubTitulo, Titulo } from "../../../components/Titulo";
import { listaDadosBrasil } from "./listaEstadosBrasil";

interface DataTypes {
  bandeira: string;
  nome: string;
  sigla: string;
  capital: string;
}

export function UseEffectExemplo() {
  const [dataBrasil, setDataBrasil] = useState<DataTypes[]>([]);
  const [dataEstadosBrasil, setDataEstadosBrasil] = useState<DataTypes[]>([]);

  useEffect(() => {
    setDataBrasil(listaDadosBrasil);
    setDataEstadosBrasil(listaDadosBrasil[0].estados);
  }, []);

  return (
    <div>
      <Titulo titulo="UseEffectExemplo" />
      <SubTitulo titulo="Pais"/>
      <Tabela data={dataBrasil} />
      <Separador />
      <SubTitulo titulo="Unidades federativas"/>
      <Tabela data={dataEstadosBrasil} />
      <Separador />
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

const Separador = styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ImagemEstilizada = styled.img`
  width: 200px;
`;

const BotaoLinkEstilizado = styled(BotaoLink)`
  width: 100px;
  padding: 10px;
`;

interface TabelaProps {
  data: DataTypes[];
}

function Tabela(props: TabelaProps) {
  return (
    <Table>
        <thead>
          <TrEstilizado>
            <td>Bandeira</td>
            <td>Nome</td>
            <td>Sigla</td>
            <td>Capital</td>
          </TrEstilizado>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <td><ImagemEstilizada src={item.bandeira} alt={item.nome} /></td>
                <td>{item.nome}</td>
                <td>{item.sigla}</td>
                <td>{item.capital}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  );
}

const TrEstilizado = styled.tr`
  td {
    font-weight: bold;
  }
`;