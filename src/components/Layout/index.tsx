import React from 'react';

import Header from '../Header';
import MonthsBar from '../MonthsBar';
import InvoiceInfo from '../InvoiceInfo';

import { 
  Container,
  Wrapper,  
  List } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <MonthsBar />

      <Wrapper>
        <InvoiceInfo />
        <List />
      </Wrapper>
      
    </Container>
  );
};

export default Layout;
