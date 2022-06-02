import styled from 'styled-components';

interface IconProps {
  checked: boolean;
}

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Icon = styled.div<IconProps>`
  position: absolute;
  right: ${({ checked }) => (checked ? '2.5em' : '0.8em')};
  top: 0.7em;
`;

export const Switch = styled.div`
  position: relative; /* <-- Add relative positioning */
  width: 60px;
  height: 32px;
  background: ${({ theme }) => theme.background};
  border-radius: 32px;
  padding: 4px; /* <!-- Add padding

  /* Add pseudo element */
  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px; /* <!-- Make up for padding */
    background: ${({ theme }) => theme.navBackground};
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: ${({ theme }) => theme.background};

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
