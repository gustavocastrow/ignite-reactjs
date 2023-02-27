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
//styles.button
//styled: styled components
//button: qual elemento html ele vai ser
  width: 100px;
  height: 40px;

  //propriedade variant vai vir pra dentro do props
  ${props => {
    return css`
      background-color: ${ButtonVariants[props.variant]}
    `
  }}

`