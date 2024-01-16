import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 25px;
  width: 50%;
  margin: 16px auto;
  padding: 0;
`;

export const ItemWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #7e8fdd;
`;

export const ContactInner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Name = styled.p`
  margin: 0 0 3px 0;
  color: #000;
  font-size: 15px;
  font-weight: 700;
`;

export const Number = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
`;
