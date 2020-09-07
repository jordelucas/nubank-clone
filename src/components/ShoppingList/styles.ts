import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin-top: 16px;
  padding: 0 0 32px 16px;

  overflow-y: auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
`

export const Period = styled.span`
  font-size: 13px;
  color: var(--light-gray-text);
`

export const Currency = styled.span`
  margin-right: 13px;

  font-size: 13px;
  color: var(--light-gray-text);
`

export const Content = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  
  height: 53px;
  margin-right: 13px;

  position: relative;

  border-bottom: 1px solid var(--light-gray);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  &:before {
    content: '';
    width: 2px;
    height: 53px;
    left: 3px;
    bottom: -25px;
    margin-right: 4px;
    background-color: var(--light-gray-text);
    position: absolute;
  }

  &:last-child {
    border: none;

    &:before {
      width: 0;
    }
  }
`

export const Date = styled.small`
  width: 96px;
  padding-left: 16px;

  font-size: 11.5px;
  color: var(--light-gray-text);

  position: relative;

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    left: 0px;
    bottom: 2px;
    margin-right: 4px;
    background-color: var(--light-gray-text);
    border-radius: 50%;
    position: absolute;
  }
`

export const Description = styled.span`
  font-size: 14.5px;
`

export const Value = styled.span`
  font-size: 14.5px;
`