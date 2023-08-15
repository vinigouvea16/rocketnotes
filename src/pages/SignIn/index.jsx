import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";
import { useState } from 'react';

import { api } from "../../services/api";

export function SignIn(){
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();

  function handleSignIn(){
    if(!name || !email || !password){
      alert("Preencha todos os campos!");
    }
    api.post("/users",{name, email, password})
    .then(()=>{
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível cadastrar :(");
      }
    });
  }

  return(
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        
        <h2>Crie sua conta</h2>
        
        <Input 
        onChange={e => setName(e.target.value)}
        placeholder = "Nome"
        type="text"
        icon={FiUser}
        />
        
        <Input 
        onChange={e => setEmail(e.target.value)}
        placeholder = "E-mail"
        type="text"
        icon={FiMail}
        />

        <Input 
        onChange={e => setPassword(e.target.value)}
        placeholder = "Senha"
        type="password"
        icon={FiLock}
        />

      <Button title="Cadastrar" onClick={handleSignIn} />
     
    <Link to="/">
      Voltar para o Login
    </Link>

      </Form>
    </Container>
  );
}