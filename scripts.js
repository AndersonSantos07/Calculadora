

const adicionarCaracter = (number) => {
    const input = document.getElementById('entrada').value

    document.querySelector('#entrada').value = input + number 
}

const limpaTela = () =>{
    document.querySelector('#entrada').value = ""
}

const calculator = () =>{
    const input = document.getElementById('entrada').value
    document.querySelector('#entrada').value = eval(input)
}

const inverterNumero = () =>{
    const input = document.getElementById('entrada').value

    document.querySelector('#entrada').value = input * -1
}