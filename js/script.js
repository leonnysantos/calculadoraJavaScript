const input = document.getElementById('resultado');

const insert = (num) => {
    if (input.innerHTML === 'Nada aqui...') {
        input.innerHTML = '';
    }
    if (input.innerHTML === '0') {
        input.innerHTML = '';
    }
    let numero = input.innerHTML;
    input.innerHTML = numero + num;
}

const clean = () => {
    input.innerHTML = '';
}

const back = () => {
    if (input.innerHTML === 'Nada aqui...') {
        input.innerHTML = '';
    }
    let numero = input.innerHTML;
    input.innerHTML = numero.substring(0, numero.length - 1)
}

const calcular = () => {
    if (input.innerHTML !== '') {
        input.innerHTML = eval(input.innerHTML);
        return input.innerHTML;
    }
    input.innerHTML = 'Nada aqui...'

}

