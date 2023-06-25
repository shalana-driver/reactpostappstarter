import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate("/posts");
    }
  }, [user]);

  const onLogin = async (e) => {
    e.preventDefault();
    let email = e.target.email?.value;
    let password = e.target.password?.value;
    if (!email || !password) return;
    loginService(email, password);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      
      <form onSubmit={onLogin} >
      <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 800 })}
      >
        Welcome back!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" name="email" placeholder="Email" type="email" required />
        <PasswordInput label="Password" name="password" placeholder="Password" type="password" required mt="md" />
        
        <Button type="submit" fullWidth mt="xl">
          Login
        </Button>
        {authLoading ? <h2>Loading...</h2> : null}
      </Paper>
    </Container>
      </form>
      
    </div>
    
  );
};

export default LoginPage;
