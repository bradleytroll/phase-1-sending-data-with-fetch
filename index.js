
function submitData(name, email) {
   let requestData = {
    method: 'POST',
    headers: {
        "content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: name,
        email: email
    })
   }
   return fetch("http://localhost:3000/users", requestData)
   .then(function(response) {
       return response.json();
   })
   .then(function (object) {
       document.body.innerHTML = object.id
   })
   .catch(function(error) {
       document.body.innerHTML = error.message
   });
};

