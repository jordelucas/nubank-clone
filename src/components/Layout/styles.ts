import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

/* HEADER */

interface ItemProps {
  isActive?: Boolean;
}

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  height: 64px;

  box-shadow: 0 0px 9px rgba(0, 0, 0, 0.1);

  > div {
    display: flex;
    align-items: center;
  }
`

export const Brand = styled.img`
  height: 28px;
  padding: 0 16px;

  cursor: pointer;
`

export const Tabs = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  
  list-style: none;
`

export const Item = styled.li<ItemProps>`
  padding: 0 22px;
  cursor: pointer;

  > span {
    font-size: 12px;
    line-height: 64px;
    position: relative;

    ${({ isActive }) => isActive && `
      color: var(--nubank);
      font-weight: bold;
       
      &::after {
        content: '';
        height: 4px;
        width: 100%;
        background: var(--nubank);
        position: absolute;
        bottom: -26px;
        left: 0;
      }
    `}
  }

  &:hover {
    background: var(--white);
    > span {
      color: var(--nubank);
    }
  }
`

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;

  > span {
    font-size: 12px;
    line-height: 64px;
    margin-left: 10px;
    color: var(--light-blue)
  }

  &:hover {
    background: var(--white);
    > span {
      color: var(--nubank);
    }
  }
`

export const SupportIcon = styled.img``

export const CreditUsed = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px 26px;
  border-left: 1px solid var(--light-gray);
  border-right: 1px solid var(--light-gray);
  
  > div {
    width: 12px;
    background: #000;
    
    &:nth-child(1) {
      background: var(--future);
      color: var(--future);
      height: 56%;
    }

    &:nth-child(2) {
      background: var(--current);
      color: var(--current);
      height: 33%;
    }
    
    &:nth-child(3) {
      background: var(--free);
      color: var(--free);
      height: 11%;
    }
  }

`

export const UserInfo = styled.div`
  padding: 0 21px;
  cursor: pointer;

  > span {
    font-size: 14px;
    line-height: 64px;
    color: var(--nubank)
  }

  &:hover {
    background: var(--white);
    > span {
      color: var(--nubank);
    }
  }
`
