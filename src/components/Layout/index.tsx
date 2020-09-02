import React from 'react';

import { Container, Header, Brand, Tabs, Item, Contacts, SupportIcon, CreditUsed, UserInfo, MonthsBar, Wrapper, Info, List, } from './styles';

import Logo from '../../assets/images/nubank-logo.png'
import Support from '../../assets/images/support-icon.png'

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <Brand src={Logo} alt="Nubank"/>
          <Tabs>
            <Item> 
              <span>HISTÓRICO</span>
            </Item>
            <Item isActive>
              <span>FATURA</span>
            </Item>
          </Tabs>
        </div>

        <div>
          <Contacts>
            <SupportIcon src={Support} alt="Icone de atendimento"/>
            <span>ATENDIMENTO</span>
          </Contacts>
          <CreditUsed>
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </CreditUsed>
          <UserInfo>
            <span>Jordevá Lucas Santos da Silva</span>
          </UserInfo>
        </div>
      </Header>
      <MonthsBar />

    </Container>
  );
};

export default Layout;
