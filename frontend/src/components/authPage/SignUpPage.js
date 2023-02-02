import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useSignUp from "../../hooks/authentication/useSignUp";

import Home from "../HomeStyle";
import { Container } from "./AuthStyles";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigate = useNavigate();

  const { loadingSignUp, signUp } = useSignUp();

  function seeLogin() {
    navigate("/sign-in");
  }

  async function createAccount(e) {
    e.preventDefault();

    if (password !== rePassword) {
      toast("As senhas devem ser iguais!");
    } else {
      try {
        const { signUpError } = await signUp(email, password, username);
        if (signUpError) throw signUpError;
        toast("Inscrito com sucesso! Por favor, faça login.");
        navigate("/sign-in");
      } catch (error) {
        toast("Não foi possível fazer o cadastro!");
      }
    }
  }

  return (
    <Home>
      <Container>
        <h1>Crie sua conta</h1>
        <form onSubmit={createAccount}>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            placeholder="Repita a senha"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <button disabled={loadingSignUp}>Criar</button>
        </form>
        <h2 onClick={seeLogin}>Já tem uma conta? Faça Login!</h2>
      </Container>
    </Home>
  );
}
