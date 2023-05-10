import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Login/loginProvider';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormLabel, Grid, Input } from '@mui/material';
import getusers from "../../ACTION/getusers";

function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usuario = useSelector((state) => state.users);
  const usuario2 = usuario.data;

  useEffect(() => {
    dispatch(getusers())
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: email,
        contrasena: contrasena
      });
      localStorage.setItem('token', response.data.token); 
      login();
      const userId = response.data;
      const usuario3 = userId ? usuario2.filter(({ email }) => email === userId.email) : [];     
      localStorage.setItem('user', JSON.stringify(usuario3));
      navigate('/');
    } catch (error) {
      setErrorMessage('No se pudo iniciar sesión. Por favor, verifique sus credenciales.');
    }
  };
  

  return (

    <form onSubmit={handleSubmit} style={{ marginTop: "15%"}}>

      <Grid container spacing={3} alignItems="center" justify="center" direction="column">

      <Grid item xs={12} style={{ width: "30%", marginTop: "2%" }}>
        <FormLabel htmlFor="email">Correo electrónico:</FormLabel>
        <Input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required
        style={{ width: "80%"}}
        />
      </Grid>

      <Grid item xs={12} style={{ width: "30%", marginTop: "2%" }}>
        <FormLabel htmlFor="password">Contraseña:</FormLabel>
        <Input type="password" id="password" name="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required
        style={{ width: "80%"}}
        />
      </Grid>

      <Grid item xs={12} style={{ marginTop:"5%"}}>
      <Button 
      variant="contained" 
      color="primary"
       style={{ backgroundColor: "#063455" }}
      type="submit">Iniciar sesión</Button>
      </Grid>

      {errorMessage && <div>{errorMessage}</div>}
      </Grid>
      
    </form>
  );
}

export default Login;
