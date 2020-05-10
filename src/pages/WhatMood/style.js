import styled from 'styled-components';

export const CardMood = styled.div`
  background-color: #fff;

  border-radius: 10px;
  width: 400px;
  height: 250px;
  box-shadow: 0px 0px 4px rgba( 0, 0, 0, 0.3); /* X Y Blur Spread */ 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    margin-top: 20px;
  }

`;

export const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;