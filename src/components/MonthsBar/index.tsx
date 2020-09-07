import React from 'react';

import { KeyboardArrowRight, KeyboardArrowLeft } from 'styled-icons/material'

import { 
  Container,
  PreviusButton,
  InvoiceList,
  Month,
  Initials,
  Value,
  Status,
  NextButton, } from './styles';

const MonthsBar: React.FC = () => {
  return (
    <Container>
      <PreviusButton>
        <KeyboardArrowLeft />
      </PreviusButton>
      
      <InvoiceList>
        <Month active >
          <Initials>NOV 19</Initials>
          <Value>
            <Status free></Status>
            <small>R$ 1.614,98</small>
          </Value>
        </Month>
        <Month>
          <Initials>DEZ 19</Initials>
          <Value>
            <Status free></Status>
            <small>R$ 646,97</small>
          </Value>
        </Month>
        <Month>
          <Initials>JAN</Initials>
          <Value>
            <Status current></Status>
            <small>R$ 567,82</small>
          </Value>
        </Month>
      </InvoiceList>

      <NextButton>
        <KeyboardArrowRight />
      </NextButton>
    </Container>
  );
}

export default MonthsBar;