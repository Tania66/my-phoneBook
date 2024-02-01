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
  @media (min-width: 320px) and (max-width: 768px) {
    -webkit-text-stroke: 1.5px #7e8fdd;
    font-size: 40px;
  }
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
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
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 12px 22px;
    font-size: 22px;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const HomeImg = styled.img`
  width: 100%;
  margin-bottom: 25px;
  @media (min-width: 420px) and (max-width: 768px) {
    width: 405px;
  }
  @media (min-width: 768px) {
    margin-bottom: 20px;
    width: 405px;
    height: 315px;
  }
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

export const LoginImg = styled.img`
  width: 425px;
  @media (min-width: 320px) and (max-width: 440px) {
    width: 100%;
  }
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

  @media (min-width: 320px) and (max-width: 500px) {
    width: 208px;
  }
  @media (min-width: 500px) and (max-width: 800px) {
    width: 225px;
  }
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
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 12px 22px;
    font-size: 16px;
  }
`;

export const LoginText = styled.p`
  margin: 0;
  color: rgba(17, 17, 17, 0.5);
  font-size: 16px;
  font-weight: 400;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const CreateAcc = styled(NavLink)`
  color: #7e8fdd;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
`;

///***REGISTER*******//

export const SingUp = styled.div`
  padding: 30px 24px 20px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const RegisterImg = styled.div`
  background: rgba(126, 143, 221, 0.4);
  border-radius: 20px 0px 0px 20px;
  @media (min-width: 320px) and (max-width: 600px) {
    border-radius: 20px 20px 0 0;
  }
`;

export const RegImg = styled.img`
  width: 425px;
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
  }
  @media (min-width: 500px) and (max-width: 800px) {
    width: 305px;
  }
`;

export const RegisterContainer = styled.div`
  width: 425px;
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
  }
  @media (min-width: 500px) and (max-width: 800px) {
    width: 305px;
  }
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
  height: 378px;

  @media (min-width: 320px) and (max-width: 600px) {
    border-radius: 20px;
    height: auto;
    border-radius: 0 0 20px 20px;
  }
  @media (min-width: 500px) and (max-width: 800px) {
    height: 258px;
    gap: 15px;
  }
`;

export const Contact = styled.div`
  padding: 30px 24px 20px 24px;
`;

export const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  gap: 10px;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 540px) {
    width: 100%;
  }
`;

export const WrapContactImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 35px 0 35px 0;
`;

export const ContactImg = styled.img`
  width: 200px;
  margin-bottom: 25px;
`;

export const ContactImgText = styled.p`
  color: #242424;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 22px;
    text-align: center;
    width: 250px;
  }
`;

export const ContactSpanText = styled.span`
  color: #7e8fdd;
  font-size: 26px;
  font-style: italic;
  font-weight: 400;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 22px;
  }
`;
