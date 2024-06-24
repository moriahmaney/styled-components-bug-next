'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: block;
  background-color: ${props => props.theme.primary};
`;

export const TestClientComponent: React.FC = () => {
  return (
    <Container>
      <h1>Test Client Component</h1>
    </Container>
  );
};
