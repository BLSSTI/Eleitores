import { EleitoresTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard(){
  return (
    <Container>
      <EleitoresTable/>
    </Container>
  );
}