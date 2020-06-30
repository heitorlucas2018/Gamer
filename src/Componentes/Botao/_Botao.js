import * as Gera from '../Gerador/_Gerador.js';

import './styled.css'

export default function Botao() {

    Gera.GeradorId('main', 'div', 'class', 'row btnValue');

    Gera.GeradorClass('.btnValue', 'div', 'class', 'btnHead1');
    Gera.GeradorClass('.btnHead1', 'h1', 'class', 'btnTitle1', 'Player 1');


    Gera.GeradorClass('.btnValue', 'div', 'class', 'btnHead2');
    Gera.GeradorClass('.btnHead2', 'h1', 'class', 'btnTitle2', 'Player 2');


    //Gera os numeros do Player 1
    Gera.GeradorClass('.btnValue', 'div', 'class', 'row btnNumber1');

    Gera.GeradorClass('.btnNumber1', 'button', 'id', 'botao1', '1');
    Gera.setAttId('botao1', 'class', 'btn btn-primary botao');
    Gera.setAttId('botao1', 'value', '1');

    Gera.GeradorClass('.btnNumber1', 'button', 'id', 'botao2', '2');
    Gera.setAttId('botao2', 'class', 'btn btn-primary botao');
    Gera.setAttId('botao2', 'value', '2');

    Gera.GeradorClass('.btnNumber1', 'button', 'id', 'botao3', '3');
    Gera.setAttId('botao3', 'class', 'btn btn-primary botao');
    Gera.setAttId('botao3', 'value', '3');


    //Gera os numeros do Player 2
    Gera.GeradorClass('.btnValue', 'div', 'class', 'row btnNumber2');

    Gera.GeradorClass('.btnNumber2', 'button', 'id', 'botao4', '1');
    Gera.setAttId('botao4', 'class', 'btn btn-primary botao');
    Gera.setAttId('botao4', 'value', '1');

    Gera.GeradorClass('.btnNumber2', 'button', 'id', 'botao5', '2');
    Gera.setAttId('botao5', 'class', 'btn btn-primary botao');
    Gera.setAttId('botao5', 'value', '2');

    Gera.GeradorClass('.btnNumber2', 'button', 'id', 'botao6', '3');
    Gera.setAttId('botao6', 'class', 'btn btn-primary botao');
    Gera.setAttId('botao6', 'value', '3');

}