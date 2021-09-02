import styled from "styled-components";


export const Wrapper = styled.button`
   display: block;
   background: var(--darkGrey);
   width: 25%;
   min-width: 200px;
   border-radius: 15px;
   border:0;
   color:var(--white);
   font-size: var(--fontMed);
   margin:20px auto;
   transition: all 0.4s;
   outline: none;
   cursor: pointer;

   :hover{
       opacity: 0.7;
   }
`;