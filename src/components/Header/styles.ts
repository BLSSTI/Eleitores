import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  max-height: 200px;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 100px;
    height: 100px;
  
  }
  h1{
    font-size: 50px;
    color: #FEFFFE;
    font-family: 'Rubik Mono One', sans-serif;
  }

  
`
export const Ct = styled.div`

button{
  float:right;
  font-size: 1rem;
  color: #fff;
  background: var(--blue);
  border:0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  margin-right: 2rem;
  margin-bottom: 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9)
  } 
}
 
 `