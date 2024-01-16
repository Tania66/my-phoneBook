import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 80px;
  border: 2px solid #7e8fdd;
  padding: 12px 0 12px 20px;
`;

export const ButtonSubmit = styled.button`
  border-radius: 12px;
  background: #9cdfdf;
  padding: 11px 22px;
  border: none;
  cursor: pointer;
  color: #fdfdff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;
