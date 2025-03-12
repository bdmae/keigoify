import styled from 'styled-components';
import { TiDeleteOutline } from "react-icons/ti";

const ClearTextButtonStyled = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 1.6rem;
  cursor: pointer;
  padding: 0.8rem;
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    border: none;
  }
`;

// extend the ButtonHTMLAttributes to allow for custom props
interface DeleteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ClearTextButton: React.FC<DeleteButtonProps> = ({onClick, ...rest}) => {
  return (
    <ClearTextButtonStyled onClick={onClick} aria-label="Delete" {...rest}>
      <TiDeleteOutline />
    </ClearTextButtonStyled>
  );
}

export default ClearTextButton;