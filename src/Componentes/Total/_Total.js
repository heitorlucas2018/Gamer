import * as Gera from '../Gerador/_Gerador.js';

import './styled.css'

export default function Total() {

    //GeradorClass(classe, elemento, atr, atrName, value)
    //Gera o totalizador das jogadas

    Gera.GeradorClass('.corpo', 'div', 'class', 'row total');
    Gera.GeradorClass('.total', 'h1', 'class', 'total-h1');
    Gera.setAttClass('.total-h1', 'value', '0');

}

//Seta um valor para o value do elemento total
export function setTotal(valor) {

    $(".total-h1").attr("value", valor);
    $(".total-h1").text(valor);

}


//Retorna o value do total
export function TotalValue() {


    return parseInt($(".total-h1").attr('value'));


}