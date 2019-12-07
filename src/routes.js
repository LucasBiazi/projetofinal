import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import autenticacao from './config/autenticacao';


import Login from './pages/Login';
import Cadastro from './pages/CadastroUser';
import MainPage from './pages/MainPage';

// //Transformando render, de modo que possamos abrir somente se autenticacao == true
// ... spread operator
const RotaPrivada = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        //Se for true
        autenticacao ? (
            <Component {...rest} />
            //caso contrário
        ) : (
                <Redirect to={{ pahtname: '/', state: { from: props.location } }} />
            )


    )} />
);

export default function Mapa() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <RotaPrivada exact path="/MainPage" component={MainPage} />
                {/* A página de cadastro só pode acessada por usuários autenticados */}
                <Route exact path="/Cadastrar" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
}