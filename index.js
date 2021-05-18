var intervalo = setInterval(changeColor, 1000);

function changeColor(){
    const body = document.querySelector('body');
    body.style.backgroundColor = body.style.backgroundColor == "grey" ? "lightgrey" : "grey";
}

document.querySelector('#btn').addEventListener('click', ()=>{
    const nome = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const sexo = document.querySelector('#genre').value;

    switch(nome){
        case nome:
            var stringName = `${nome}`
            break;
    }

    switch(age){
        case 'crianca':
            var faixaEtaria = `é uma criança`;
            break;
        case 'adolescente':
            var faixaEtaria = `é um adolescente`;
            break;
        case 'adulto': 
            var faixaEtaria = `é um adulto(a)`
            break;
        case 'old':
            var faixaEtaria = `é um idoso(a)`
            break;
    }

    switch(sexo){
        case 'feminino':
            var sexoEscolhido = `e é do sexo feminino`
            break;
        case 'masculino':
            var sexoEscolhido = `e é do sexo masculino`
            break;
    }

    const stringFinal = `${stringName}, ${faixaEtaria} ${sexoEscolhido}`;
    console.log(stringFinal)
    document.body.append(stringFinal);
});






// Função que mudaria o background baseado em um Array de Imagens:


setInterval(randomNumber, 1);

function randomNumber(){
    const a = [1, 2, 3, 4];

    const random = Math.floor(Math.random() * a.length);
    console.log(random)
}