import React from 'react';

import { 
  Container,
  Brand, 
  Tabs, 
  Item, 
  Contacts, 
  SupportIcon, 
  CreditUsed,
  DropdownCredit, 
  UserInfo,
  ArrowDropDownIcon,
  Dropdown,
  DropdownItem } from './styles';

import Logo from '../../assets/images/nubank-logo.png'
import Support from '../../assets/images/support-icon.png'

import { UnlockFill } from '@styled-icons/bootstrap'

const Header: React.FC = () => {
  return (
    <Container>
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

          <Dropdown>
            <DropdownItem><a href="#">Dúvidas Frequentes</a></DropdownItem>
            <DropdownItem><a href="#">0800 591 2117</a></DropdownItem>
            <DropdownItem><a href="#">meajuda@nubank.com.br</a></DropdownItem>
          </Dropdown>
        </Contacts>

        <CreditUsed>
          <DropdownCredit className="">
            <div className="limits">
              <div className="future">
                <main>
                  <small>Próximas faturas</small>
                  <span>R$ 2.000,00</span>
                </main>
                <div className="barra">.</div>
              </div>
              
              <div className="current">
                <main>
                  <small>Fatura atual</small>
                  <span>R$ 2.000,00</span>
                </main>
                <div className="barra">.</div>
              </div>
              
              <div className="free">
                <main>
                  <small>Limite disponível</small>
                  <span>R$ 2.000,00</span>
                </main>
                <div className="barra">.</div>
              </div>
            </div>
            <ArrowDropDownIcon />
          </DropdownCredit>
        </CreditUsed>
        
        <UserInfo>
          <span>Jordevá Lucas Santos da Silva</span>
          <ArrowDropDownIcon />

          <Dropdown>
            <DropdownItem><a href="#">MEUS DASOS</a></DropdownItem>
            <DropdownItem><a href="#">SAIR</a></DropdownItem>
            <DropdownItem noLink>
              <legend>última compra</legend>

              <div>
                <span>01 setembro</span>
                <small>Gugatec</small>
                <small>R$100,00</small>
              </div>
            </DropdownItem>
            <DropdownItem unlock><button><UnlockFill />desbloquear cartão</button></DropdownItem>
          </Dropdown>
        </UserInfo>
      </div>
    </Container>
  );
};

export default Header;
