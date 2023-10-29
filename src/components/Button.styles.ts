import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success"

type ButtonContainerProps = {
  variant: ButtonVariants
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  width: 100px;

  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }}
`