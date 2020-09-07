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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 70px;

  padding: 8px 13px;
  border-left: 1px solid var(--light-gray);
  border-right: 1px solid var(--light-gray);
  
  transition: width 0.3s, height 0.3s;

  &:hover {
    width: 208px;
    height: 384px;
  }

  > div.limit {
    display: flex;
    flex-direction: column;
    height: 100%; 
    margin-right: 8px;

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
  }

  > svg {
    fill: var(--light-purple);
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