import React from 'react';

import { 
  Container,  
  Header,
  Total,
  DueDate,
  Details,
  Content,
  Item } from './styles';

const InvoiceInfo: React.FC = () => {
  return (
    <Container>
      <Header>
        <Total>R$1.614,98</Total>
        <DueDate>Vencimento 17 SET</DueDate>
        <Details>Fechamento em 10 SET</Details>
      </Header>

      <Content>
        <Item>
          <small>Gastos do mês</small>
          <span>R$1.834,98</span>
        </Item>
        <Item>
          <small>Valor antecipado</small>
          <span>R$220,00</span>
        </Item>
        <Item>
          <button className='current'>GERAR BOLETO</button>
        </Item>
      </Content>
    </Container>
  );
}

export default InvoiceInfo;