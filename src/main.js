import Nav from './Componentes/Nav/_Nav.js';
import Corpo from './Componentes/Corpo/_Corpo.js';
import Ranking from './Componentes/Ranking/_Ranking.js';
import Jogadas from './Componentes/Jogadas/_Jogadas.js';
import Total, { setTotal } from './Componentes/Total/_Total.js';
import Botao from './Componentes/Botao/_Botao.js';
import Modal from './Componentes/Modal/_Modal.js';

// import styleds
//import "@fortawesome/fontawesome-free/css/all.min.css";
import './Main.css';

/**
 * @author heitorsantos2018
 * @description 
 * Realiza a chamada para a criação dos conteudos dinamicamente,
 * caso a ordem das função sejá alterada o resultado final
 *  tambem será diferente
 */
function Main() {
    console.log('Initiliza gamer()');
    Modal();
    Nav();
    Corpo();
    Ranking();
    Jogadas(0);
    Total();
    setTotal(0);
    Botao();
}

Main();