import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  border: solid 1px;
  height: 50px;
  width: 500px;
  justify-content: space-around;
`;

export const CardQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const IncrementBtn = styled.button`
  width: 24px;
  height: 24px;
  
  border-radius: 5px;
  background: linear-gradient(151deg, #34c8e8 1.78%, #4e4af2 95.56%);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const DecrementBtn = styled(IncrementBtn)`
  background: #353f54;
`;
