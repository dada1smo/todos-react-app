import { useState } from 'react';
import { useNavigate } from 'react-router';
import Api from '../api/api.utils';
import { PrimaryButton, PrimaryEmptyButton } from '../styles/Button';
import { Card, CardActions } from '../styles/Card';
import { Input } from '../styles/Input';
import { Spacer } from '../styles/Spacer';
import { Wrapper } from '../styles/Wrapper';

export default function Signup() {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmitSignUp = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await Api.signUp(signupData);

      navigate('/');
    } catch (error) {
      setError(error.data.msg);
    } finally {
      setSignupData({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <Wrapper>
      <Card minWidth="40vw">
        <h1>Cadastro</h1>
        <Spacer vertical="16px" />
        {error && (
          <>
            <p>{error}</p>
            <Spacer vertical="16px" />
          </>
        )}
        <Input
          type="text"
          value={signupData.name}
          onChange={(e) =>
            setSignupData({ ...signupData, name: e.target.value })
          }
          placeholder="Nome"
        />
        <Spacer vertical="12px" />
        <Input
          type="text"
          value={signupData.email}
          onChange={(e) =>
            setSignupData({ ...signupData, email: e.target.value })
          }
          placeholder="E-mail"
        />
        <Spacer vertical="12px" />
        <Input
          type="password"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
          placeholder="Senha"
        />
        <Spacer vertical="16px" />
        <CardActions>
          <PrimaryButton onClick={(e) => onSubmitSignUp(e)}>
            Registrar
          </PrimaryButton>
          <PrimaryEmptyButton onClick={() => navigate('/login')}>
            Ir para login
          </PrimaryEmptyButton>
        </CardActions>
      </Card>
    </Wrapper>
  );
}
