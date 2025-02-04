// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];
let htmlist = '';
let listado = document.getElementById('listaAmigos');
let input = document.getElementById('amigo');
let sorted = document.getElementById('resultado');
const agregarAmigo = ()=>{
    let friend = input.value;
    if(friend){
        friends.push(friend);
        input.value = '';
        actualizarAmigos();
    }else{
        alert('Debe ingresar un nombre');
    }
    
}
const actualizarAmigos = ()=>{
    for (let i=0; i<friends.length; i++){
        htmlist += `<li>${friends[i]}</li>`
    }
    listado.innerHTML = htmlist;
    htmlist='';
}
const sortearAmigo=()=>{
    let random = Math.floor(Math.random()*friends.length);
    sorted.innerHTML = `<li>El amigo sorteado es ${friends[random]}</li>`
}