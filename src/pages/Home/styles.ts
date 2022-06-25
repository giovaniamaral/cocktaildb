import styled from 'styled-components'



export const Header = styled.div`
display: flex;
justify-content:space-around;

div, a {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  font-family: 'Roboto', sans-serif;
  color: #959595;
  font-weight: 700px;
  font-size:24px;
  padding-top:20px;
}
img {
  display: flex;
  padding: 20px;
}
`
export const Welcome = styled.div`
  border-top: 1px solid #C1B9B9;
  display: flex;
  padding:23px ;
  align-items: center;
  justify-content: center;
    font-family: 'Roboto';
     font-weight: 700;
      font-size: 20px;
       color: #FF9000;
`
export const Main = styled.div`
`

export const Search = styled.div`
display: flex;
justify-content: center;
border-radius: 15px ;
font-size: 15px ;
`



