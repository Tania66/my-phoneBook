import { useDispatch } from 'react-redux';
import { Button, Form, Input } from './Pages.styled';
import { register } from '../redux/auth/authOperation';

const Register = () => {
  const dispatch = useDispatch();

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
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </div>
  );
};

export default Register;
