import { useDispatch } from 'react-redux';
import {
  Button,
  CreateAcc,
  Input,
  LoginText,
  RegForm,
  RegImg,
  RegisterContainer,
  RegisterImg,
  SingUp,
} from './Pages.styled';
import { register } from '../redux/auth/authOperation';
import defaultRegister from './register.png';

const Register = () => {
  const dispatch = useDispatch();
  const registerImg = defaultRegister;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <SingUp>
      <RegisterImg>
        <RegImg src={registerImg} alt="girl" />
      </RegisterImg>
      <RegisterContainer>
        <RegForm onSubmit={handleSubmit} autoComplete="off">
          <label>
            <Input placeholder="Username" type="name" name="name" />
          </label>
          <label>
            <Input placeholder="Email" type="email" name="email" />
          </label>
          <label>
            <Input placeholder="Password" type="password" name="password" />
          </label>
          <Button type="submit">Register</Button>
          <LoginText>
            Already got an account?<CreateAcc to="/login"> Sing in</CreateAcc>
          </LoginText>
        </RegForm>
      </RegisterContainer>
    </SingUp>
  );
};

export default Register;
