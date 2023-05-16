
function addPoints(){
  fetch('/post/points/add')
    window.location.href='/completeGame'
  
}
function addQuizPoints(){
  fetch('/post/points/addQuiz')
    window.location.href='/completeQuiz'
  
}


