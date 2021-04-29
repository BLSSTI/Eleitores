import brasao from '../../assets/brasao.png'
import { Container, Content,Ct } from './styles'



interface HeaderProps{
  onOpenNewEleitorModal: () => void;

}
export function Header({onOpenNewEleitorModal}:HeaderProps){

  return (
    <Container>
      <Content>
          <h1>Cadastro de Eleitores</h1> <img src={brasao} alt="eleitores"/>
      </Content>
    <Ct>
    <button type = "button" onClick={onOpenNewEleitorModal}>
          Novo eleitor
    </button>

    </Ct>
  
    </Container>  )
}