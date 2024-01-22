import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  padding: 30px 24px 0 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Span = styled.span`
  display: block;
`;

export const MainTitle = styled.h1`
  text-align: center;
  margin-top: 0;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke: 2px #7e8fdd;
  font-weight: 900;
  font-size: 50px;
`;

export const GetStared = styled(NavLink)`
  border-radius: 12px;
  background: #7e8fdd;
  padding: 16px 44px;
  text-decoration: none;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke: 1px #7e8fdd;
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 25px;
`;

/****LOGIN*******************/

export const LogIn = styled.div`
  padding: 30px 24px 0 24px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  padding: 25px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 80px;
  border: 2px solid #7e8fdd;
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
  width: 100%;
  cursor: pointer;
`;

export const LoginText = styled.p`
  margin: 0;
  color: rgba(17, 17, 17, 0.5);
  font-size: 16px;
  font-weight: 400;
`;

export const CreateAcc = styled(NavLink)`
  color: #7e8fdd;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
`;

///***REGISTER*******//

export const SingUp = styled.div`
  padding: 30px 24px 0 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const RegisterImg = styled.div`
  background: rgba(126, 143, 221, 0.4);
  border-radius: 20px 0px 0px 20px;
`;

export const RegisterContainer = styled.div`
  padding: 25px 0;
`;

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 0px 20px 20px 0px;
  background: #f3f3f3;
  padding: 25px;
  height: 379px;
`;

export const Contact = styled.div`
  padding: 30px 24px 0 24px;
`;

export const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin: 0 auto;
`;
