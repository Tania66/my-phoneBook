import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperation";
  import { useSelector } from 'react-redux';
  import { isLogin, selectUser } from '../../redux/auth/authSelector';
import {  AuthMobMenu, AvatarMobile, 
  ButtonMobileMenu, 
  LogoutMobile, 
  MobileHome,  
  MobileMenu,  
  MobileUserMenu, 
  NavigateMobile, 
  UserNameMob, 
  UserProf, 
  WrapMobile } from "./MobileMenu.styled";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import defaultAvatar from '../UserMenu/defaul-avatar.png';
import { Link } from "components/AppBar/AppBar.styled";
import { IoMdClose } from "react-icons/io";
export default function BurgerMenu (){
  const isLoggedIn = useSelector(isLogin);
  const login = useSelector(isLogin);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatar = defaultAvatar;
  const [openMobileMenu, setOpenMobileMenu] = useState(false);



return (
  <MobileMenu>
  <ButtonMobileMenu onClick={() => setOpenMobileMenu(!openMobileMenu)}>
    {openMobileMenu? <IoMdClose size={25}/> : <HiOutlineMenu size={25}/>}
    </ButtonMobileMenu>

<WrapMobile>
  {openMobileMenu&& (
      <NavigateMobile>    
 
  {login ? (
  <MobileUserMenu>
    <UserProf>
       <AvatarMobile src={avatar} alt="avatar" />
    <UserNameMob>{user.name}</UserNameMob>   
    </UserProf>
    <MobileHome>
          <Link to="/">Home</Link>
    {isLoggedIn && <Link to="/contacts">Contacts</Link>}    
      </MobileHome>
    <LogoutMobile type="button" onClick={() => dispatch(logout())}>Logout</LogoutMobile>
  </MobileUserMenu>): (  <AuthMobMenu>
       <Link to="/register">Register</Link>  
            <Link to="/login">Login</Link>
    </AuthMobMenu>
    
    )  }
  
  
    </NavigateMobile>  
        )}
  </WrapMobile>  

</MobileMenu>
)

}
