import { useDispatch } from 'react-redux';
import {
  Button,
  CreateAcc,
  Form,
  Input,
  LogIn,
  LoginContainer,
  LoginImg,
  LoginText,
} from './Pages.styled';
import { login } from '../redux/auth/authOperation';
import loginImg from './login.png';

const Login = () => {
  const dispatch = useDispatch();
  const image = loginImg;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogIn>
      <LoginImg src={image} alt="women-login" />
      <LoginContainer>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <label>
            <Input placeholder="Email" type="email" name="email" />
          </label>
          <label>
            <Input placeholder="Password" type="password" name="password" />
          </label>
          <Button type="submit">Login</Button>
          <LoginText>
            Don't have an account?
            <CreateAcc to="/register"> Sing up</CreateAcc>
          </LoginText>
        </Form>
      </LoginContainer>
    </LogIn>
  );
};

export default Login;
