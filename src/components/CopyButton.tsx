import styled from "styled-components";
import { FaRegCopy } from 'react-icons/fa';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const CopyButtonStyle = styled.button`
  background: none;
  border: none;
  color: #007bff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 0.3rem;
  }
`;

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <CopyButtonStyle onClick={() => copyToClipboard(textToCopy)}>
      <FaRegCopy />
      {isCopied ? 'Copied!' : 'Copy'}
    </CopyButtonStyle>
  );
};

export default CopyButton;