import styled from "styled-components";


export const Button = styled.button`
width: 11.875rem;
height: 2.5rem;
background-color: ${(props) => props.theme.colors.main3};
color: ${(props) => props.theme.colors.main1};
margin: 2rem auto;
cursor: pointer;
transition: ease-in-out 0.5s;
&:hover{
    background-color: ${props => props.theme.colors.main2};
 
   
}
`;



export const InvertedButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.main2};
  color: ${(props) => props.theme.colors.main1};
  margin-left:auto;
  margin-right:auto;
  margin-top:2rem;
  margin-bottom:4rem;
  &:hover{
      background-color: ${props => props.theme.colors.main3};
  }
`