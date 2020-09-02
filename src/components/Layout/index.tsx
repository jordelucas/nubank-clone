import React from 'react';

import { 
  Container, 
  Header, 
  Brand, 
  Tabs, 
  Item, 
  Contacts, 
  SupportIcon, 
  CreditUsed, 
  UserInfo, 
  MonthsBar, 
  Wrapper, 
  Info, 
  List,
  ArrowDropDownIcon } from './styles';

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
              <span>FATURAS</span>
            </Item>
          </Tabs>
        </div>

        <div>
          <Contacts>
            <SupportIcon src={Support} alt="Icone de atendimento"/>
            <span>ATENDIMENTO</span>
          </Contacts>
          <CreditUsed>
            <div className="limit">
              <div>.</div>
              <div>.</div>
              <div>.</div>
            </div>
            <ArrowDropDownIcon />
          </CreditUsed>
          <UserInfo>
            <span>Jordevá Lucas Santos da Silva</span>
            <ArrowDropDownIcon />
          </UserInfo>
        </div>
      </Header>
      <MonthsBar />

      <Wrapper>
        <Info />
        <List />
      </Wrapper>
    </Container>
  );
};

export default Layout;
