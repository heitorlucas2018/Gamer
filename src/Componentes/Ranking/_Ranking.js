import * as Gera from '../Gerador/_Gerador.js';



var ranking = [];



export default function Ranking() {

    //GeradorClass(classe, elemento, atr, atrName, value)
    //setAttId(id, atr, atrName)
    //Gera o Ranking

    Gera.GeradorClass('.corpo', 'div', 'class', 'rankingspaceCorpo');

    // Gera o titulo do Ranking
    Gera.GeradorClass('.rankingspaceCorpo', 'div', 'class', 'rankingspaceHead text-center');
    Gera.GeradorClass('.rankingspaceHead', 'h4', 'id', 'rankingspacetitle', 'Ranking');
    Gera.setAttId('rankingspacetitle', 'type', 'button');
    Gera.setAttId('rankingspacetitle', 'data-toggle', 'collapse');
    Gera.setAttId('rankingspacetitle', 'data-target', '#rankingspaceId');
    Gera.GeradorId('rankingspacetitle', 'i', 'class', 'fas fa-arrow-circle-down')



    Gera.GeradorClass('.rankingspaceCorpo', 'div', 'id', 'rankingspaceId');
    Gera.setAttId('rankingspaceId', 'class', 'collapse rankingspace');

    Gera.GeradorClass('.rankingspaceCorpo', 'div', 'id', 'rankingspaceId');
    Gera.setAttId('rankingspaceId', 'class', 'collapse rankingspace');




    //Gera Cabeçalho da tabela
    Gera.GeradorClass('.rankingspace', 'div', 'class', 'rankingspaceDateHead text-center')

    Gera.GeradorClass('.rankingspaceDateHead', 'table', 'id', 'rankingspaceTable');


    Gera.GeradorId('rankingspaceTable', 'tr', 'id', 'rankingspaceBody');
    Gera.GeradorId('rankingspaceBody', 'th', null, null, 'Jogador');
    Gera.GeradorId('rankingspaceBody', 'th', null, null, 'Vitórias');
    Gera.GeradorId('rankingspaceBody', 'th', null, null, 'Derrotas');

    Gera.GeradorClass('.rankingspace', 'div', 'class', 'ranking');



    Gera.GeradorClass('.ranking', 'div', 'class', 'ranking-date text-center');
    Gera.GeradorClass('.ranking', 'table', 'id', 'rankingspaceTable')

    //Gera a tabela

    Gera.GeradorClass('.ranking-date', 'table', 'id', 'rankingspaceDate')


}


//Resposavel por inserir o jogador no Ranking
export function setRanking(nome) {

    var add = true;

    if (ranking.length == 0) {
        ranking.push({ "nome": nome, "vitorias": 0, "derrotas": 0 });
        Gera.GeradorId('rankingspaceDate', 'tr', 'id', 'rankingspaceDateBody' + ranking.length)
        Gera.GeradorId('rankingspaceDateBody' + ranking.length, 'th', null, null, nome)
        Gera.GeradorId('rankingspaceDateBody' + ranking.length, 'th', null, null, '0')
        Gera.GeradorId('rankingspaceDateBody' + ranking.length, 'th', null, null, '0')

    }

    for (let index = 0; index < ranking.length; index++) {

        if (ranking[index].nome == nome) {
            add = false;
        }

    }

    if (add) {

        ranking.push({ "nome": nome, "vitorias": 0, "derrotas": 0 });
        Gera.GeradorId('rankingspaceDate', 'tr', 'id', 'rankingspaceDateBody' + ranking.length)
        Gera.GeradorId('rankingspaceDateBody' + ranking.length, 'th', null, null, nome)
        Gera.GeradorId('rankingspaceDateBody' + ranking.length, 'th', null, null, '0')
        Gera.GeradorId('rankingspaceDateBody' + ranking.length, 'th', null, null, '0')
    }

}

// Atualiza o Ranking
export function RefazRanking() {

    $("#rankingspaceDate").remove();

    Gera.GeradorClass('.ranking-date', 'table', 'id', 'rankingspaceDate')

    for (let index = 0; index < ranking.length; index++) {
        Gera.GeradorId('rankingspaceDate', 'tr', 'id', 'rankingspaceDateBody' + index)
        Gera.GeradorId('rankingspaceDateBody' + index, 'th', null, null, ranking[index].nome)
        Gera.GeradorId('rankingspaceDateBody' + index, 'th', null, null, ranking[index].vitorias)
        Gera.GeradorId('rankingspaceDateBody' + index, 'th', null, null, ranking[index].derrotas)

    }

}

// Adiciona uma vitoria ao jogador
export function VitoriaRanking(nome) {

    for (let index = 0; index < ranking.length; index++) {

        if (ranking[index].nome == nome) {
            ranking[index].vitorias = ranking[index].vitorias + 1
        }

    }
    RefazRanking();
}

//Adiciona uma derrota ao jogador
export function DerrotaRanking(nome) {

    for (let index = 0; index < ranking.length; index++) {
        if (ranking[index].nome == nome) {
            ranking[index].derrotas = ranking[index].derrotas + 1
        }

    }

    RefazRanking();
}