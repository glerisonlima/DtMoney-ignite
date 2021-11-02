import Logo from '../../assets/logo.svg'
import { Container, Content } from './styled'

interface HeaderProps {
    onOpenNewTansacionModal: () => void;
} 

export function Header({onOpenNewTansacionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="dt money" />
                <button type="button" onClick={onOpenNewTansacionModal}>
                    Nova transação
                </button>

                
            </Content>
        </Container>
    )
}