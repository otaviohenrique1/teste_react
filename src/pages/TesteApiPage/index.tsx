import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import { ContainerBotoes, BotaoLink } from "../../components/Botao";
import { Titulo } from "../../components/Titulo";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3333/'
});

interface DataTypes {
  nome: string;
  sigla: string;
  capital: string;
}

export function TesteApi() {
  const [dataEstadosBrasil, setDataEstadosBrasil] = useState<DataTypes[]>([]);

  useEffect(() => {
    api.get('lista_estados_brasil')
      .then((data) => {
        setDataEstadosBrasil(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <TituloEstilizado titulo="Estados do Brasil" />
      <Tabela data={dataEstadosBrasil} />
      <Separador />
      <ContainerBotoes>
        <BotaoLinkEstilizado
          to="/"
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
            <td>Nome</td>
            <td>Sigla</td>
            <td>Capital</td>
          </TrEstilizado>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
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

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;

const TrEstilizado = styled.tr`
  td {
    font-weight: bold;
  }
`;