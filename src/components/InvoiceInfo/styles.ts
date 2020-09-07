import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 333px;
  margin-top: 16px;

  background-color: var(--white);

  border: 1px solid var(--light-gray);
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 112px;

  background-color: var(--current-card);
`

export const Total = styled.h1`
  font-size: 24px;
  font-weight: normal;
  color: var(--white);
`

export const DueDate = styled.span`
  font-size: 18px;
  margin-top: 3px;
  color: var(--white);
`

export const Details = styled.small`
  margin-top: 3px;
  color: var(--white);
  opacity: 0.7;
`

export const Content = styled.div`
  list-style: none;
  margin: 3px 6%;
`

export const Item = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 16px 0;

  > small {
    font-size: 11.5px;
    line-height: 40px;
    color: var(--gray);
  }

  > span {
    line-height: 40px;
    color: var(--gray);
  }

  > button.current {
    width: 100%;
    padding: 16px 32px;
    color: var(--current-card);
    border: 1px solid var(--current-card);
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: var(--current-card);
      color: var(--white);
    }
  }
`