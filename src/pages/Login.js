import { useDispatch } from 'react-redux';
import { Button, Form, Input } from './Pages.styled';
import { login } from '../redux/auth/authOperation';

const Login = () => {
  const dispatch = useDispatch();

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
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <Input placeholder="Email" type="email" name="email" />
        </label>
        <label>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="off"
          />
        </label>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
