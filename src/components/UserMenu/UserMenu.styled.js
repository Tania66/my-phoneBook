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
  @media (min-width: 320px) and (max-width: 450px) {
    display: none;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 35px;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 25px;
  }
  @media (min-width: 320px) and (max-width: 400px) {
    display: none;
  }
  @media (min-width: 400px) {
    display: block;
  }
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
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 15px;
    padding: 5px 12px;
    border: 2px solid #9cdfdf;
    font-weight: 500;
  }
`;
