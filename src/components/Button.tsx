import { ButtonContainer, ButtonVariants } from "./Button.styles"

type ButtonProps = {
  variant?: ButtonVariants
}
export function Button({variant="primary"}: ButtonProps) {
  return <ButtonContainer variant={variant}>{variant}</ButtonContainer>
}