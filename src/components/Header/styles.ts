import styled, { css } from 'styled-components';

import { ArrowDropDown } from '@styled-icons/material'

interface ItemProps {
  isActive?: Boolean;
}

interface DropdownItemProps {
  unlock?: Boolean;
  noLink?: Boolean;
}

export const Container = styled.header`
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
  position: relative;
  cursor: pointer;

  > span {
    font-size: 12px;
    line-height: 64px;
    margin-left: 5px;
    color: var(--light-blue);
  }

  &:hover {
    background: var(--white);

    > span {
      color: var(--nubank);
    }

    > ul {
      display: flex;
    }
  }
`

export const SupportIcon = styled.img``

export const CreditUsed = styled.div`
  height: 100%;
  width: 70px;

  border-left: 1px solid var(--light-gray);
  border-right: 1px solid var(--light-gray);

  transition: width 0.3s, height 0.3s;

  position: relative;

  &:hover {
    width: 208px;
  }
`

export const DropdownCredit = styled.div`
  height: 100%;
  width: 70px;
  padding: 8px 13px;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 2000;
  
  display: flex;
  justify-content: flex-end;
  
  transition: width 0.3s, height 0.3s, background 0.3s;

  > div.limits {
    display: flex;
    flex-direction: column;
    height: 100%; 
    width: 100%;
    margin-right: 8px;

    > div {
      display: flex;
      justify-content: flex-end;
      
      > small {
        font-size: 11px;
      }

      > span {
        font-size: 16px;
      }

      > main {
        display: none;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        margin-right: 10px;
      } 
    }

    .future {
      height: 56%;

      .barra {
        background: var(--future);
        color: var(--future);
        height: 100%;
        width: 12px;
      }
    }

    .current {
      height: 33%;

      .barra {
        background: var(--current);
        color: var(--current);
        height: 100%;
        width: 12px;
      }
    } 

    .free {
      height: 11%;

      .barra {
        background: var(--free);
        color: var(--free);
        height: 100%;
        width: 12px;
      }
    }
  }

  > svg {
    margin-top: 13px;
    fill: var(--light-purple);
  } 

  &:hover {
    width: 208px;
    height: 384px;

    background: var(--white);
    box-shadow: 0 0px 9px rgba(0, 0, 0, 0.1);

    
    div.limits div main {
      display: flex;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 21px;
  position: relative;
  cursor: pointer;

  > span {
    font-size: 14px;
    line-height: 64px;
    color: var(--nubank);
    margin-right: 8px;
  }

  > svg {
    fill: var(--light-purple);
  }

  &:hover {
    background: var(--white);
    
    > span {
      color: var(--nubank);
    }

    > ul {
      display: flex;
    }
  }
`

export const Dropdown = styled.ul`
  min-width: 100%;
  display: none;
  flex-direction: column;
  position: absolute;
  top: 64px;
  right: 0px;
  z-index: 1000;
  
  background-color: var(--white);
  box-shadow: 0 0px 9px rgba(0, 0, 0, 0.1);

  list-style: none;
`

export const DropdownItem = styled.li<DropdownItemProps>`
  width: 100%;
  padding: 0 21px;
  
  border-bottom: 1px solid var(--light-gray);
  background-color: var(--primary);
  transition: background-color 0.1s;

  > a {
    font-size: 12px;        
    line-height: 64px;
    text-transform: uppercase;
    color: var(--light-gray-text);
    text-decoration: none;
    
    transition: color 0.1s;
  }

  ${({ unlock }) => unlock && `
    padding: 16px 21px;
    cursor: default;

    > button {
      display: flex;
      align-items: center;
      padding: 10px;
      font-size: 11px;
      color: var(--white);
      background-color: var(--nubank);
      border-radius: 3px;
      outline: none;
      cursor: pointer;
      transition: opacity 0.3s;

      > svg {
        width: 14px;
        fill: var(--white);
        margin-right: 6px;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  `}
  
  ${({ noLink }) => noLink && `
    cursor: default;
    display: flex;
    flex-direction: column;

    > legend {
      font-size: 16px;        
      line-height: 64px;
      color: var(--light-gray-text);
    }

    > div {
      display: flex;
      flex-direction: column;

      margin-bottom: 24px;

      > span {
        font-size: 12px;
        color: var(--light-gray-text);
        margin-bottom: 5px;
      }

      > small {
        font-size: 12px;

        margin-bottom: 5px;
      }
    }
  `}
  
  &:hover { 
    background-color: var(--hover-white);

    > a {
      color: var(--nubank);
    }
  }
`

const IconsCSS = css`
  width: 22px;
  height: 22px;
`

export const ArrowDropDownIcon = styled(ArrowDropDown)`${IconsCSS}`;