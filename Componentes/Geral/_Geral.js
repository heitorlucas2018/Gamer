import Nav from '../Nav/_Nav.js';
import Corpo from '../Corpo/_Corpo.js';
import Ranking from '../Ranking/_Ranking.js';
import Jogadas from '../Jogadas/_Jogadas.js';
import Total, { setTotal } from '../Total/_Total.js';
import Botao from '../Botao/_Botao.js'
import Modal from '../Modal/_Modal.js'


main();

/* Realiza a chamada para a criação dos conteudos dinamicamente, caso a ordem das função 
sejá alterada o resultado final tambem será diferente */

function main() {
    Modal();
    Nav();
    Corpo();
    Ranking();
    Jogadas(0);
    Total();
    setTotal(0);
    Botao();
}

