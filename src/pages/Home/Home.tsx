import React, { Component } from "react";
import { Container } from "./style";
import api from 'axios';





 const data = api.post('https://reqres.in/api/login',{
   email: 'eve.holt@reqres.in',
   password: 'cityslicka'
 }) .then(function (response) {
  return response.data.token;
}) .then(function (response) {
  alert(response);
})
.catch(function (error) {
  console.log(error);
});


class Home extends Component {
  render() {
    return (
      <Container>
      <div>
        <input id = 'email'placeholder = "login"/>
        <input id = 'senha' placeholder = "senha"/>
        <button> Enviar</button>
      </div>
      </Container>
    );
  }

}
 
export default Home;