import * as Gera from '../Gerador/_Gerador.js';
import { TotalValue } from '../Total/_Total.js';

export default function Jogadas(valor) {

    //GeradorClass(classe, elemento, atr, atrName, value)
    //Gera os  modulos para as jogadas


    Gera.GeradorClass('.corpo', 'div', 'class', 'row jogadas');



    var classe = 'row jogadas-numero ' + 'j' + TotalValue();

    Gera.GeradorClass('.jogadas', 'div', 'class', classe);

    Gera.GeradorClass('.j' + TotalValue(), 'h2', 'class', 'jogadas-h2', valor);

    try {

        Gera.setAttClass('.total-h1', 'value', TotalValue() + 1);

    } catch (error) {

    }




}