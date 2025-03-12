import styled from "styled-components";
import { FaRegCopy } from 'react-icons/fa';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

const CopyButtonStyle = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: #666;
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

  svg {
    font-size: 1.4rem;
  }
`;

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <CopyButtonStyle onClick={() => copyToClipboard(textToCopy)}>
      {isCopied ? '✅ copied' : <FaRegCopy />}
    </CopyButtonStyle>
  );
};

export default CopyButton;