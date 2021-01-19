function funcaoChange(elemento) {
    console.log(elemento.value)
}

function load() {
    alert("Página Carregada.")
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"
    // alert("Obrigado por clicar!")
}

function redirecionar() {
    //window.open("https://www.google.com.br/")
    window.location.href = "https://www.google.com.br/"
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    elemento.innerHTML = "Obrigado por passar o mouse!"
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}
// function soma(n1, n2) {
//     return n1 + n2
// }

// function validaIdade(idade) {
//     var validar
//     if (idade >= 18) {
//         validar = true
//     } else {
//         validar = false
//     }
//     return validar
// }

// var idade = prompt("Qual a sua idade?")
// console.log(validaIdade(idade))

//alert(soma(5, 10))
// var data = new Date()
// alert(data.getDay)
// alert(data.getHours)
// alert(data.getMinutes)

// var count
// for (count = 1 ; count <= 5 ; count++) {
//     alert(count)
// }

// var count = 0
// while (count <= 5) {
//     console.log(count)
//     alert(count)
//     count++
// }

// var idade = prompt("Qual a sua idade?")
// if (idade >= 18) {
//     alert("Maior de idade")
// } else {
//     alert("Menor de idade")
// }

// var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas)
// alert(frutas[1].nome)

// var fruta = {nome:"maçã", cor:"vermelha"}
// console.log(fruta.nome)
// alert(fruta.cor)

// var lista = ["maçã", "pêra", "laranja"]
// lista.pop()
// lista.push("uva")

// console.log(lista)
// console.log(lista.toString)
// console.log(lista.join(" - "))

// var nome = "Joabe Alves"
// var n1 = 5
// var n2 = 3
// var frase = "LIFE IS PAIN, I HA-"
// alert(nome + ' tem ' + idade + ' anos.')
// alert(idade + idade2)
// console.log(nome)
// console.log(n1 * n2)
// console.log(frase.toLowerCase())
