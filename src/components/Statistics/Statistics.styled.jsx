import styled from '@emotion/styled';

export const StatisticList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
  border-radius: 15px;
  margin: 0px auto;
  padding: 10px;
`;

export const StatisticItem = styled.li`
  font-size: 20px;
  width: max-content;
  border: 2px solid yellow;
  border-radius: 40%;
  padding: 10px;
  background: linear-gradient(160deg, #f0ade4, #d108ec);
`;
