import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Input = styled.input`
  border-radius: 80px;
  border: 2px solid #9cdfdf;
  padding: 12px 0 12px 20px;
  width: 300px;
`;

export const Button = styled.button`
  border-radius: 12px;
  background: #7e8fdd;
  padding: 16px 44px;
  color: #fdfdff;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  padding-top: 25px;
  margin: 0 auto;
`;
