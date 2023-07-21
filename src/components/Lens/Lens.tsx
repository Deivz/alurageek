import lens from '@/images/Lupa.svg';
import { LensContainer } from './Lens.styles';

export default function Lens() {
  return (
    <LensContainer>
      <img src={lens} alt='Botão de pesquisar, ícone de uma lupa' />
    </LensContainer>
  );
}