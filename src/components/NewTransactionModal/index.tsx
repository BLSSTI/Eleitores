import Modal from "react-modal";
import { Container } from "./style";
import closeImg from "../../assets/close.svg";
import { FormEvent, useState } from "react";
import { useEleitores } from "../../hooks/useTransactions";

interface NewEleitorModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewEleitorModal({
  isOpen,
  onRequestClose}: NewEleitorModalProps) {


  const { createEleitor } = useEleitores();
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [titulo, setTitulo] = useState('');
  const [zona, setZona] = useState('');
  const [secao, setSecao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  async function handleCreateNewEleitor(event: FormEvent) {
    event.preventDefault();

    await createEleitor({
      nome,
      endereco,
      titulo,
      zona,
      secao,
      telefone,
      bairro,
      cidade,
    });
    setNome('');
    setEndereco('');
    setTitulo('');
    setZona('');
    setSecao('');
    setTelefone('');
    setBairro('');
    setCidade('');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewEleitor}>
        <h2>Cadastrar Eleitor</h2>

        <input
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <input
          placeholder="Endereço"
          value={endereco}
          onChange={(event) => setEndereco(event.target.value)}
        />
        <input
          placeholder="Titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <input
          placeholder="Zona"
          value={zona}
          onChange={(event) => setZona(event.target.value)}
        />
        <input
          placeholder="Seção"
          value={secao}
          onChange={(event) => setSecao(event.target.value)}
        />
        <input
          placeholder="Telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
        <input
          placeholder="Bairro"
          value={bairro}
          onChange={(event) => setBairro(event.target.value)}
        />
        <input
          placeholder="Cidade"
          value={cidade}
          onChange={(event) => setCidade(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
