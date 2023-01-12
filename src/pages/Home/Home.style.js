import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #ffffff;
`;

export const MoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 220px);
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 0;
  padding-left: 0;
`;
