import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material/";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="none"
        label="nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(evento) => {
          setSobrenome(evento.target.value);
        }}
      />

      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(evento) => {
          setCpf(evento.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={(erros.cpf.texto)}
        onBlur={(evento) => {
          const ehValido = validarCPF(cpf)
          setErros(ehValido)
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            checked={promocoes}
            onChange={(evento) => {
              setPromocoes(evento.target.checked);
            }}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            checked={novidades}
            onChange={(evento) => {
              setNovidades(evento.target.checked);
            }}
          />
        }
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
