
import { ButtonContainer, ButtonVariant } from './Button.styles';

interface ButtonProps {
  variant?: ButtonVariant; //-> vem de dentro do button.styles.ts 
}

export function Button({variant = 'primary'}: ButtonProps){
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}