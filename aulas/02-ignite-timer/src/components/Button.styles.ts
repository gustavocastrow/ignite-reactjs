import styled, { css } from "styled-components";

export type ButtonVariant = 'primary'| 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color:  ${props => props.theme.primary}; //vem lá do theme/default.js
  color: ${props => props.theme.white}; //vem lá do theme/default.js

  //propriedade variant vai vir pra dentro do props
  /* ${props => {
    return css`
      background-color: ${ButtonVariants[props.variant]} 
      `
  }} */
  /* -> styled componentes vai executar esse código como um função
   e vai enviar todas as propriedades(props) do buttonContainer, então 
  no arquivo button.tsx a propriedade variant do button container
  vai vir para o lugar de props
   background-color: $ {ButtonVariants[ButtonContainer.variant]} 
   então estamos correndo no objeto ButtonVariants e setando as cores
   */
`