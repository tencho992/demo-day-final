
function addPoints(){
  fetch('/post/points/add')
    window.location.href='/profile'
  
}


// addPoints.addEventListener('click', function(){  
//         fetch('post/points/add', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'points': points,
//             'userName': userName,
//             '_id': _id, 
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });


Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    // const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)

    fetch('messages/thumbDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp':thumbUp
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
Array.from(userComment).forEach(function(element) {
  element.addEventListener('click', function(){
      const comment = document.querySelector('#comment').value
      fetch('comments', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'comment': comment
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});