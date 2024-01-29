import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import fondLogin from '../../fondLogin.jpg';
import "./Login.css";

function Login(props) {
  return (
    <>
      {/* Ajoutez la classe 'overlay' si l'écran de connexion est actif */}
      <div className={`Login ${props.active ? 'overlay' : ''}`}>
        <div className="LoginContent">
          {/* <img src={fondLogin} alt="fondLogin"/> */}
          <h2>WELCOME BACK!</h2>
          <div className="LoginContentInformation">
            <Input placeholder="Enter your mail" name={props.Input}></Input>
            <Input placeholder="Enter your password" name={props.Input}></Input>
          </div>
          <div className="LoginButton">
            <Button name="Log In " onClick={props.functionConnection}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
