import styled from 'styled-components';
import Card from '../../components/Card';

export const Content = styled.div`
  justify-content: right;
  height: auto;
  padding: 1em;
`;

export const StyledApp = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2em;
  grid-template-columns: repeat(4, 20rem);
  margin-top: 1em;
  margin-bottom: 1em;
  justify-content: center;

  /* media queries are no problem */
  @media (max-width: 600px) {
    background: tomato;

    /* nested rules work as expected */
    &:hover {
      background: yellow;
    }
  }

  > p {
    /* descendant-selectors work as well, but are more of an escape hatch */
    text-decoration: underline;
  }

  /* Contextual selectors work as well */
  html.test & {
    display: none;
  }
`;

export const GrayCard = styled(Card)`
  background-color: #969696;
`;
