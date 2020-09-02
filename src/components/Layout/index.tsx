import React from 'react';

import Header from '../Header';

import { 
  Container, 
  MonthsBar, 
  Wrapper, 
  Info, 
  List } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <MonthsBar />

      <Wrapper>
        <Info />
        <List />
      </Wrapper>
    </Container>
  );
};

export default Layout;
