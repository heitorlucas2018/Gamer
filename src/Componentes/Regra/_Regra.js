import Jogadas from '../Jogadas/_Jogadas.js';
import { setTotal, TotalValue } from '../Total/_Total.js';
import { setRanking, VitoriaRanking, DerrotaRanking } from '../Ranking/_Ranking.js';


$(document).ready(function() {

    //Cria os Rankings para os jogadores
    function adicionarRanking() {
        setRanking($("#nome").val());
        setRanking('Player 2');
    }

    // Valida se o nome é diferente de vazio
    function validateNome() {
        if ($("#nome").val().trim() != '') {

            $("#btnPlayer1").prop('disabled', false);
            $("#btnPlayer2").prop('disabled', false);
        } else {
            $("#btnPlayer1").prop('disabled', true);
            $("#btnPlayer2").prop('disabled', true);
        }
    }

    //Desabilita os Botões do player para evitar que o jogador jogue duas vezes seguidas
    function DesabilitaPlayer(val) {

        if (val == 1) {
            $("#botao1").prop('disabled', true);
            $("#botao2").prop('disabled', true);
            $("#botao3").prop('disabled', true);

            $("#botao4").prop('disabled', false);
            $("#botao5").prop('disabled', false);
            $("#botao6").prop('disabled', false);

        } else if (val == 2) {
            $("#botao4").prop('disabled', true);
            $("#botao5").prop('disabled', true);
            $("#botao6").prop('disabled', true);

            $("#botao1").prop('disabled', false);
            $("#botao2").prop('disabled', false);
            $("#botao3").prop('disabled', false);
        }


    }

    //Valida O vencedor do Jogo
    function validateWin(val) {

        if (TotalValue() > 20) {
            $("#botao1").prop('disabled', true);
            $("#botao2").prop('disabled', true);
            $("#botao3").prop('disabled', true);
            $("#botao4").prop('disabled', true);
            $("#botao5").prop('disabled', true);
            $("#botao6").prop('disabled', true);
            setTotal(21);
            $("#HeadModal").text("Player " + val + ' é o Vencedor')
            if (val == 1) {
                VitoriaRanking($("#nome").val())
                DerrotaRanking('Player 2')
            } else if (val == 2) {
                DerrotaRanking($("#nome").val())
                VitoriaRanking('Player 2')
            }
            setTimeout(function() {
                ReiniciaPartida();
            }, 3000);

            return false;
        } else {
            return true;
        }

    }

    //Reinicia a partida após haver um ganhador
    function ReiniciaPartida() {
        $(".jogadas-numero").remove();
        Jogadas(0);
        setTotal(0);
        $('#Modal').modal('show');
        $("#botao1").prop('disabled', false);
        $("#botao2").prop('disabled', false);
        $("#botao3").prop('disabled', false);
        $("#botao4").prop('disabled', false);
        $("#botao5").prop('disabled', false);
        $("#botao6").prop('disabled', false);
    }


    $("#btnPlayer1").prop('disabled', true);
    $("#btnPlayer2").prop('disabled', true);


    $('#Modal').modal('show');


    $("#nome").keypress(function() {
        validateNome()
    });


    $("#nome").focusout(function() {
        validateNome()
    });

    $('#btnPlayer1').click(function() {
        $('.btnHead2').css('display', 'none');
        $('.btnHead2').attr('value', '0');
        $('.btnNumber2').css('display', 'none');
        $(".btnValue").even().removeClass("row");
        $(".btnValue").addClass("col");
        $('#Modal').modal('hide');
        adicionarRanking();

    });

    $('#btnPlayer2').click(function() {
        $('#Modal').modal('hide');
        $('.btnHead2').removeAttr('value');
        $('.btnHead2').css('display', 'block');
        $('.btnNumber2').css('display', 'flex');
        $(".btnValue").even().removeClass("col");
        $(".btnValue").addClass("row");
        adicionarRanking();

    });


    $("#botao1").click(function() {

        let tot = TotalValue();
        tot = tot + 1;
        Jogadas(1);
        setTotal(tot);
        DesabilitaPlayer(1);
        if (validateWin(1)) {
            boot();
        }
    });


    $("#botao2").click(function() {

        let tot = TotalValue();
        tot = tot + 2;
        Jogadas(2);
        setTotal(tot);
        DesabilitaPlayer(1);
        if (validateWin(1)) {
            boot();
        }

    });

    $("#botao3").click(function() {

        let tot = TotalValue();
        tot = tot + 3;
        Jogadas(3);
        setTotal(tot);
        DesabilitaPlayer(1);
        if (validateWin(1)) {
            boot();
        }

    });

    $("#botao4").click(function() {

        let tot = TotalValue();
        tot = tot + 1;
        Jogadas(1);
        setTotal(tot);
        DesabilitaPlayer(2);
        validateWin(2);


    });

    $("#botao5").click(function() {

        let tot = TotalValue();
        tot = tot + 2;
        Jogadas(2);
        setTotal(tot);
        DesabilitaPlayer(2);
        validateWin(2);


    });

    $("#botao6").click(function() {

        let tot = TotalValue();
        tot = tot + 3;
        Jogadas(3);
        setTotal(tot);
        DesabilitaPlayer(2);
        validateWin(2);

    });


    //Função responsavel por realizar as jogadas do Boot
    function boot() {


        var numero = parseInt(Math.random() * (4 - 1) + 1);

        let tot = TotalValue();

        if ($('.btnHead2').attr('value') == 0) {

            // Calcula se falta quantos falta para chegar em 21, caso seja menor que 4 ele joga o que falta para ganhar.
            if (21 - TotalValue() < 4) {
                numero = 21 - TotalValue();
                tot = tot + numero;
                setTimeout(function() {
                    Jogadas(numero);
                    setTotal(tot);
                    DesabilitaPlayer(2);
                    validateWin(2);
                }, 3000);


            } else {

                tot = tot + numero;
                setTimeout(function() {
                    Jogadas(numero);
                    setTotal(tot);
                    DesabilitaPlayer(2);
                    validateWin(2);
                }, 2000);
            }


        }


    }


});