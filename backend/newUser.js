var models = require('./models/models');
var User = models.User;

function userLogin(username, password){
  User.findOne({username: username}, (err, user) =>{

    if(err){
      console.log(err)
    }
    if(!user){
      console.log('error no user with these credentials')
    }
    if(user && password === user.password){
      console.log('welcome back motherfucker')
    }
  }
}

function userRegistration(username, password){
  User.findOne({username: username}, (err, user) =>{

    if(err){
      console.log(err)
    }
    if(!user){
      User.findOne({password: password}, (err, user) =>{
        if(user){
          console.log('this password is taken')
        }
        if(!user){
          let user = new User({
            username: username,
            password: password
          })
          user.save()
          .then( (user)=> {console.log('success', user)})
          .catch((err) =>{
            console.log(err);
          })
        }
        if(err){
          console.log(err)
        }
      }
    }
  if(user){
    console.log('this username is taken')
    }
  }
}
