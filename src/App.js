import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormalarioCadastro";

import {Container, Typography} from "@mui/material/";

import 'fontsource-roboto';


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h1"  >Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
    console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {cpf:{valido:false, texto:"CPF deve ter 11 digitos"}}
  } else {
    return {cpf:{valido:true, texto:''}}
  }
}

export default App;
