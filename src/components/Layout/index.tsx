import React from 'react';

import Header from '../Header';
import MonthsBar from '../MonthsBar';
import InvoiceInfo from '../InvoiceInfo';
import ShoppingList from '../ShoppingList';

import { 
  Container,
  Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <MonthsBar />

      <Wrapper>
        <InvoiceInfo />
        <ShoppingList />
      </Wrapper>
      
    </Container>
  );
};

export default Layout;
