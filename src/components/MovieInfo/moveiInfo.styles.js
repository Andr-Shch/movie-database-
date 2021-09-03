import styled from "styled-components";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";


export const Wrapper = styled.div`
  background: ${({backdrop})=> 
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : '#000'
  };
  
  background-size: cover;
  background-position:center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s ;

  @keyframes animateMovieInfo{
      from{
          opacity: 0;
      }
      to{
          opacity: 1;
      }
  }



`;

export const Content = styled.div`
 display: flex;
 max-width: var(--maxWidth);
 margin: 0 auto;
 background: rgb(0, 0, 0, 0.7);
 border-radius: 20px;

 @media screen and (max-width: 768px){
    display: block;
    max-height: none;
 }

`;

export const Text = styled.div`
     width: 100%;
     padding: 10px 50px;
     color:white;
     overflow: hidden;
    
     
     .rating-directors-cast{
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         color: (--white);
     }
     .rating-directors-cast>h3{
        color: (--white);
     }

     .score{
         border-radius: 50%;
         background-color:white;
         width: 35px;
         height: 35px;
         display: flex;
         justify-content: center;
         align-items: center;
         color: black;
         font-weight: 600;
         
     }

`;