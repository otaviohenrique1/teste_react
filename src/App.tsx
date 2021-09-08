import { Container } from "reactstrap";
import styled from "styled-components";
import { Routes } from "./pages/routes";

const ContainerExtilizado = styled(Container)`
  margin: 50px;
`;

function App() {
  return (
    <ContainerExtilizado>
      <Routes />
    </ContainerExtilizado>
  );
}

export default App;
