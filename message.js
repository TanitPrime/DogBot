const fetch = require('node-fetch');

const message = (userId,client)=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      client.fetchUser(userId,false)
        .then(user => {
          user.send(data.message);
          console.log("sent")
        })
        .catch((err)=>{console.log(err)})
    });
}
module.exports = message;