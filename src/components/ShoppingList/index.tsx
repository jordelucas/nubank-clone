import React from 'react';

import { 
  Container,
  Header,
  Period,
  Currency,
  Content,
  Item,
  Date,
  Description,
  Value } from './styles';

const ShoppingList: React.FC = () => {
  return (
    <Container>
      <Header>
        <Period>De 10 AGO até 10 SET</Period>
        <Currency>Valores em R$</Currency>
      </Header>

      <Content>
        <Item>
          <Date>10 AGO</Date>
          <div>
            <Description>Shoptime - celulares 10/10	</Description>
            <Value>112,49</Value>
          </div>
        </Item>

        <Item>
          <Date>10 AGO</Date>
          <div>
            <Description>Shoptime - celulares 10/10	</Description>
            <Value>112,49</Value>
          </div>
        </Item>
        
        <Item>
          <Date>10 AGO</Date>
          <div>
            <Description>Shoptime - celulares 10/10	</Description>
            <Value>112,49</Value>
          </div>
        </Item>
      </Content>
    </Container>
  );
}

export default ShoppingList;