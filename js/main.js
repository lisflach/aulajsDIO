

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!!!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("http://www.facebook.com/");   //abre noutra ABA
    window.location.href = "http://www.facebook.com/";  //abre na mesma aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar Texto");

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";  
}

function load(){
    alert("Página Carregada");
}

function funcaoChange (elemento){
    console.log(elemento.value)
}





/*
function soma(n1, n2){
    return n1+n2;
}
var validar=0;

function validaidade(idade){
    
    if (idade>=18){
        validar = true
    }else{
        validar = false 
    }
    return validar;
}
var idade = prompt("Qual sua idade?")
validaidade(idade)
console.log(validar);
*/


/*
function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"))
*/


/*
var d = new Date();
alert(d.getUTCDate());
alert(d.getHours())
alert(d.getFullYear())
*/

/*
var d = new Date();
alert(d.getMinutes());
*/


/*
var d = new Date();
alert(d.getMonth()+1); //o getMonth vai sempre começar do zero então sempre usar com +1
*/

/*
var d = new Date();
alert(d.getDate());
*/


/*
var d= new Date();
alert(d);
*/



/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/


/*
var count = 0;
while(count<=5){
    console.log(count);  //alert(count);
    count = count +1;    //count++;
}
*/



/*var idade = prompt ("Qual sua idade");
if (idade>=18){
    alert("Maior de idade");
} else{
    alert ("Menor de idade");
};
*/



/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*/


//var lista = ["Maçã", "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop ();
//console.log(lista);
//alert(lista[0]);
//console.log(lista.reverse());
//console.log(lista[2]);
//console.log(lista.toString());
//console.log(lista.join(" - "));






//var nome= "Lisandra Flach";
//var idade= 41;
//var idade2= 10;
//var frase= "Japão é o melhor time do mundo";
// alert(nome+ " tem " +idade + " anos!")
// (idade + idade2)
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.toUpperCase ());
//alert(frase.replace("Japão", "Brasil"));