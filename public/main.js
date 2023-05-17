
function addPoints(){
  fetch('/post/points/add')
    window.location.href='/completeGame'
  
}
function addQuizPoints(){
  fetch('/post/points/addQuiz')
    window.location.href='/completeQuiz'
  
}
const userInput = document.querySelector('#userInput')
const emailInput = document.querySelector('#emailInput')
document.querySelector('#updateBtn1').addEventListener('click', updateUser)
// document.querySelector('#updateBtn2').addEventListener('click', updateEmail)

function showInputs(input){
    document.querySelector('#updateBtn1').hidden = false;
    userInput.hidden = false

}

//when they click submit
//have the updateUser function to call backend route
//backend route = put request
//put request will update the 
//req.user.save()
//set req.user to a variable- edit that copy varaible to username


