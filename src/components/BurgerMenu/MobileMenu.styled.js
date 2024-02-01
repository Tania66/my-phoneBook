import styled from 'styled-components';

export const MobileMenu = styled.div`
  display: none;
  @media (min-width: 320px) and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const WrapMobile = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  left: 49%;
  width: 50%;
  z-index: 1;
  background-color: #7e8fdd;
  border-radius: 10px;
  transform: ${({ openMobileMenu }) =>
    openMobileMenu ? 'translateY(-100%)' : 'translateY(0)'};
  opacity: ${({ openMobileMenu }) => (openMobileMenu ? 0 : 1)};
  visibility: ${({ openMobileMenu }) =>
    openMobileMenu ? 'hidden' : 'visible'};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
`;

export const NavigateMobile = styled.div`
  padding: 24px;
`;

export const MobileUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`;

export const UserProf = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AvatarMobile = styled.img`
  width: 35px;
  border-radius: 50px;
`;

export const UserNameMob = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #fdfdff;
`;

export const MobileHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  margin: 0 auto;
`;

export const LogoutMobile = styled.button`
  border-radius: 8px;
  background: transparent;
  border: 2px solid #9cdfdf;
  padding: 10px 25px;
  color: #fdfdff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
`;

export const ButtonMobileMenu = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: #ffff;
`;

export const AuthMobMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
