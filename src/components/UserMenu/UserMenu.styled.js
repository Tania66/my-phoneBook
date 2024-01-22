import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.p`
  margin: 0;
  color: #fdfdff;
  font-size: 20px;
  font-weight: 600;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const ButtonLogout = styled.button`
  border-radius: 8px;
  background: transparent;
  border: 3px solid #9cdfdf;
  padding: 10px 25px;
  color: #fdfdff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
`;
