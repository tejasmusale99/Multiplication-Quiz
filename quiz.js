const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)

const quizQuestion=document.getElementById("question");
const inputText=document.getElementById("input-text");
// const btnSubmit=document.getElementById("btn-submit");
const formE1=document.getElementById("form");
const scoreE1=document.getElementById("scorecard");

let score =JSON.parse(localStorage.getItem("key"))
    if(!score){
        score=0;
    }
    scoreE1.innerText=`score:${score}`
quizQuestion.innerText=`What is ${num1} multiply by ${num2}?`

const correctAns=num1*num2

// btnSubmit.addEventListener("submit",clickHandler);
formE1.addEventListener("submit",clickHandler);

function clickHandler(){
const userAns=+inputText.value;
if(correctAns===userAns){
score++
updateLocalStorage()
}else{
    score--
    updateLocalStorage()
}
}
function updateLocalStorage(){
    localStorage.setItem("key",JSON.stringify(score))
}



