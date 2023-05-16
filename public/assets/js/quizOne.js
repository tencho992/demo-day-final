const nextBtn = document.getElementById('next')
const answerOne = document.getElementById('one').addEventListener('click', answerOneCompare)
const answerTwo = document.getElementById('two').addEventListener('click', answerTwoCompare)
const answerThree = document.getElementById('three').addEventListener('click', answerThreeCompare)
const correctIndex = document.getElementById('index')
function answerOneCompare(){
    if(answerOne.value == correctIndex){
        nextBtn.hidden= false;
    }
}
