import * as Gera from '../Gerador/_Gerador.js';



export default function Modal() {

    //Gera o Modal
    // Gera.GeradorId('main', 'div', 'class', 'container-fluid row corpo');

    //Gera o COrpor do Modal
    Gera.GeradorId('main', 'div', 'id', 'Modal');
    Gera.setAttId('Modal', 'class', 'modal fade');
    Gera.setAttId('Modal', 'data-backdrop', 'static');

    Gera.GeradorId('Modal', 'div', 'class', 'modal-dialog modal-dialog-centered');

    Gera.GeradorClass('.modal-dialog-centered', 'div', 'class', 'modal-content');

    Gera.GeradorClass('.modal-content', 'div', 'id', 'HeadModal');

    Gera.GeradorId('HeadModal', 'h5', null, null, '21 DE BOCA');


    Gera.GeradorClass('.modal-content', 'div', 'id', 'titleModal');
    Gera.setAttId('titleModal', 'class', 'form-group');


    // Gera o Titulo do Modal
    Gera.GeradorId('titleModal', 'label', null, null, 'Nome');

    Gera.GeradorId('titleModal', 'input', 'id', 'nome');
    Gera.setAttId('nome', 'class', 'form-control');
    Gera.setAttId('nome', 'type', 'text');

    //Gera Botão 1 Player
    Gera.GeradorClass('.modal-content', 'div', 'id', 'btnModal1');
    Gera.setAttId('btnModal1', 'class', 'form-group col');
    Gera.GeradorId('btnModal1', 'button', 'id', 'btnPlayer1', '1 Player');
    Gera.setAttId('btnPlayer1', 'class', 'btn btn-primary')

    //Gera Botão 2 Player
    Gera.GeradorClass('.modal-content', 'div', 'id', 'btnModal2');
    Gera.setAttId('btnModal2', 'class', 'form-group col');
    Gera.GeradorId('btnModal2', 'button', 'id', 'btnPlayer2', '2 Player');
    Gera.setAttId('btnPlayer2', 'class', 'btn btn-primary')



}
