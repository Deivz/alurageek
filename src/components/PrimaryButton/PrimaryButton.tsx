import { ButtonVariant, PrimaryButtonContainer } from "./PrimaryButton.styles";

interface PrimaryButtonProps {
  variant: ButtonVariant;
  text: string;
  type: string;
}

export default function PrimaryButton({ variant, text, type }: PrimaryButtonProps) {

  return (
    <PrimaryButtonContainer variant={variant} data-testid='primaryButton'>
      <input type={type} value={text} />
    </PrimaryButtonContainer>
  );
}