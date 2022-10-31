import { HeaderContainer, HeaderContent, NewTransectionButton } from "./styles";
import logoimg from '../../assets/logo.svg'



export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoimg} alt="" />

                <NewTransectionButton>Nova transação</NewTransectionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}