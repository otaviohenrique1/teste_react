import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import { ContainerBotoes, BotaoLink } from "../../../components/Botao";
import { Titulo } from "../../../components/Titulo";
import { listaDadosBrasil } from "./listaEstadosBrasil";

interface DataTypes {
  bandeira: string;
  nome: string;
  sigla: string;
  capital: string;
}

const initialData: DataTypes = {
  bandeira: '',
  nome: '',
  sigla: '',
  capital: '',
};

export function UseEffectExemplo() {
  const [dataBrasil, setDataBrasil] = useState<DataTypes>(initialData);
  const [dataEstadosBrasil, setDataEstadosBrasil] = useState<DataTypes[]>([]);

  useEffect(() => {
    const data = {
      bandeira: listaDadosBrasil[0].bandeira,
      nome: listaDadosBrasil[0].nome,
      sigla: listaDadosBrasil[0].sigla,
      capital: listaDadosBrasil[0].capital,
    };
    setDataBrasil(data);
    setDataEstadosBrasil(listaDadosBrasil[0].estados);
  }, []);

  return (
    <div>
      <Titulo titulo="UseStateExemplo" />
      <Table>
        <thead>
          <tr>
            <td>Bandeira</td>
            <td>Nome</td>
            <td>Sigla</td>
            <td>Capital</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><ImagemEstilizada src={dataBrasil.bandeira} alt={dataBrasil.nome} /></td>
            <td>{dataBrasil.nome}</td>
            <td>{dataBrasil.sigla}</td>
            <td>{dataBrasil.capital}</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Table>
        <thead>
          <tr>
            <td>Bandeira</td>
            <td>Nome</td>
            <td>Sigla</td>
            <td>Capital</td>
          </tr>
        </thead>
        <tbody>
          {dataEstadosBrasil.map((item, index) => {
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

const ImagemEstilizada = styled.img`
  width: 200px;
`;

const BotaoLinkEstilizado = styled(BotaoLink)`
  width: 100px;
  padding: 10px;
`;
