import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../api/api.utils';
import { PrimaryButton, PrimaryEmptyButton } from '../styles/Button';
import { Card, CardActions } from '../styles/Card';
import { Input } from '../styles/Input';
import { Spacer } from '../styles/Spacer';
import { Wrapper } from '../styles/Wrapper';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await Api.login(loginData);
      localStorage.setItem('todos_token', data.token);
    } catch (error) {
      setError(error.data.msg);
      localStorage.setItem('todos_token', '');
    } finally {
      setLoginData({
        email: '',
        password: '',
      });
      navigate('/todos');
    }
  };

  return (
    <Wrapper>
      <Card minWidth="40vw">
        <h1>Login</h1>
        <Spacer vertical="16px" />
        {error && (
          <>
            <p>{error}</p>
            <Spacer vertical="16px" />
          </>
        )}
        <Input
          type="text"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          placeholder="E-mail"
        />
        <Spacer vertical="12px" />
        <Input
          type="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          placeholder="Senha"
        />
        <Spacer vertical="16px" />
        <CardActions>
          <PrimaryButton onClick={(e) => onSubmitLogin(e)}>
            Entrar
          </PrimaryButton>
          <PrimaryEmptyButton onClick={() => navigate('/signup')}>
            Não tenho cadastro
          </PrimaryEmptyButton>
        </CardActions>
      </Card>
    </Wrapper>
  );
}
