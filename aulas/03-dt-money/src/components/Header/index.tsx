import { HeaderCointainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg';

export function Header(){
  return (
    <HeaderCointainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderCointainer>
  )
}