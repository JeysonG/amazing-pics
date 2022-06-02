import styled from 'styled-components';
import { FaRocketchat } from 'react-icons/fa';

export const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${({ theme }) => theme.chatBackground};
  color: ${({ theme }) => theme.chatText};
  margin-top: 1rem;
`;

export const IconChat = styled(FaRocketchat)`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.background};

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }

  ${Link}:hover & {
    color: rebeccapurple;
  }
`;
