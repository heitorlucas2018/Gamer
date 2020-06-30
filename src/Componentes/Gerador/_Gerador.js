
// Função que gera codigo a partir de um ID
export function GeradorId(id, elemento, atr, atrName, value) {

    var main = document.getElementById(id);
    var Criar = document.createElement(elemento);

    if (atr != null && atrName != null) {
        Criar.setAttribute(atr, atrName);
    }

    if (value != null) {
        Criar.append(value);
    }

    main.appendChild(Criar);
}

// Função que gera codigo a partir de uma classe
export function GeradorClass(classe, elemento, atr, atrName, value) {

    var Criar = document.createElement(elemento);

    if (atr != null && atrName != null) {
        Criar.setAttribute(atr, atrName);
    }

    if (value != null) {
        Criar.append(value);
    }

    document.querySelector(classe).appendChild(Criar);
}

// Função que insere um atributo a partir de um ID
export function setAttId(id, atr, atrName) {

    var elemento = document.getElementById(id);
    elemento.setAttribute(atr, atrName);

}

// Função que insere um atributo a partir de uma classe
export function setAttClass(classe, atr, atrName) {

    var elemento = document.querySelector(classe);
    elemento.setAttribute(atr, atrName);


}

// Função que insere um texto a partir de um ID
export function setValueId(id, value) {


    var text = document.createTextNode(value),
        elemento = document.getElementById(id);

    elemento.appendChild(text);

}
