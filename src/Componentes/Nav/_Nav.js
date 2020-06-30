import * as Gera from '../Gerador/_Gerador.js';

import './styled.css'

export default function Nav() {

    //Gera a barra de navegação
    Gera.GeradorId('main', 'div', 'id', 'Navegacao');
    Gera.setAttId('Navegacao', 'class', 'container-fluid navbar text-center');

    Gera.GeradorClass('.navbar', 'h3', null, null, '212 de Boca')

}