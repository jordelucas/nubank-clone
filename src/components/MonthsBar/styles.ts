import styled, { css } from 'styled-components';
import bg from '../../assets/images/bg.jpg' 

interface StatusProps {
  free?: Boolean;
  current?: Boolean;
  future?: Boolean;
}

interface MonthProps {
  active?: Boolean;
}

export const Container = styled.div`
  display: flex;
  height: 102px;
  width: 100%;

  background-image: url(${bg});
  background-position: center center;
  background-size: 100% auto;
`

export const InvoiceList = styled.ul`
  width: 100%;
  display: flex;

  list-style: none;
`

export const Month = styled.li<MonthProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 123px;

  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    ${({ active }) => !active && `
      background: var(--hover-white)
    `}
  }

  ${({ active }) => active && `
    background: var(--active-white);
      
    &> div > div{
      display: none;
    }
  `}
`

export const Initials = styled.span`
  font-size: 17.5px;
  color: var(--white);
  opacity: 0.7;

  margin-bottom: 3px;
`

export const Value = styled.div`
  display: flex;
  align-items: center;

  > small {
    font-size: 11.5px;
    color: var(--white);
    opacity: 0.7
  }
`

export const Status = styled.div<StatusProps>`
  width: 8px;
  height: 8px;
  margin-right: 4px;
  border-radius: 50%;

  background: ${props => props.free ? 'var(--free)' : ''};
  background: ${props => props.current ? 'var(--current)' : ''};
  background: ${props => props.future ? 'var(--future)' : ''};
`

const ButtonsCSS = css`
  width: 32px;
  height: 100%;

  cursor: pointer;

  > svg {
    width: 23px;
    fill: var(--white);
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  &:hover {
    > svg {
      opacity: 1;
    }
  }
`

export const PreviusButton = styled.button`${ButtonsCSS}`

export const NextButton = styled.button`${ButtonsCSS}`