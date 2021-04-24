import { useEleitores } from "../../hooks/useTransactions";
import { Container } from "./style";

export function EleitoresTable() {
  const { eleitores } = useEleitores();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Zona</th>
            <th>Titulo</th>
            <th>Seção</th>
          </tr>
        </thead>
        <tbody>
        {eleitores.map((eleitor) => {
            return (
              <tr key={eleitor.id}>
                <td>{eleitor.nome}</td>
                <td>{eleitor.bairro}</td>
                <td>{eleitor.cidade}</td>
                <td>{eleitor.endereco}</td>
                <td>{eleitor.telefone}</td>
                <td>{eleitor.zona}</td>
                <td>{eleitor.titulo}</td>
                <td>{eleitor.secao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
