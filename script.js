// let carro="volvo";
 //alert("Alô Mundo!");
 //let a=10;
 //let b=5;
 //alert (a+b);
 function cliqueBotao(){
     alert("Você clicou em um botão");
 }
let clique=0;
 
function contarClique(){
    clique++;
    //document.getElementById("resultado").innerHTML="O contador está com <mark>">+clique+" </mark> cliques";
    document.getElementById("resultado").innerHTML=clique;
}

function mediaDoAluno(){
    let nota01 = prompt("Digite sua primeira nota");
    let nota02 = prompt("Digite sua segunda nota");
    
    let Media=(nota01+nota02)/2;
}

//let n = prompt("Digite um número");
//let total= n/2;
//let resultado n == 0 ?"Par":"Impar";
//alert(n +"é" + resultado);

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-Confirmation");

form.addEventListener("submit"), (e)=>(e.preventDefault; checkInput();));

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    if(usernameValue==""){
        setErrorFor(username,"O nome de usuário é obrigatório");
}else{
    setSucessFor(username);
}
if(emailValue==""){
    setErrorFor(email,"O email é obrigatório");
}else{
    setSucessFor(email);
}
if(passwordValue==""){
    setErrorFor(password,"A senha é obrigatório");
}else if(passwordValue.length<7){
    setErrorFor(password,"A senha precisa ter o mínimo 7 caracteres");
}
else{
    setSucessFor(password);
}
if(passwordConfirmationValue===""){
    setErrorFor(passwordConfirmation,"Confirmação da senha é obrigatório");
}else if(passwordConfirmation,"As senhas não conferem");
}
else{
    setSucessFor(passwordConfirmation);
}
const formControls = form.querySelectorAll(".form-control");
const formIsValid = [...formControls].every((formControl)=>{
    return formControl.className==="form-control sucess";
});
if(formIsVale){
    console.log("O formulário está 100% válido");
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //Adiciona a mensagem de erro
    small.innerText = message;
    //Adiciona a classe de erro
    formControl.className="form-control error";
}
function setSucessFor(input){
    const formControl = input.parentElement;
    //Adiciona a classe de sucesso
    formControl.className="form-control sucess";
}
function checkEmail(email){
    return/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);
}




    


 
