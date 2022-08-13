async function signup(e){
    e.preventDefault()
    const email  = document.querySelector('#signupEmail')
    const password  = document.querySelector('#signupPassword')
    
    try{
    const res = await firebase.auth()
      const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
     console.log(result,'result');
     localStorage.setItem('currentUser', JSON.stringify(result.user.uid));
     const data = {
      Email: email,
    }
    
      await result.user.updateProfile({
        displayName: "User"
      })
       await result.user.sendEmailVerification()
       alert("Email sent");
       console.log(result)
    }catch(err){
        console.log(err)
    }
    email.value = ""
    password.value = ""
    
}

async function login(e){
    e.preventDefault()
    const email  = document.querySelector('#loginEmail')
    const password  = document.querySelector('#loginPassword')    
    try{
      const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)     
     console.log(result)
     var user = firebase.auth().currentUser;
if (user !== null) {
  const uid = user.uid;
  if(user.emailVerified){
  localStorage.setItem('currentUser', JSON.stringify(uid));

  window.location="heiProfile.html"
  }
  else{
    alert("Please verify your email")
  }
}
else{
  alert("please login")
}
      
    }catch(err){
        console.log(err)        
    }
    email.value = ""
    password.value = ""
}

function logout(){
  firebase.auth().signOut()
  alert("logout successful")
}

async function loginWithGoogle(){
  try{
    var provider = new firebase.auth.GoogleAuthProvider();
  const result =  await firebase.auth()
  .signInWithPopup(provider)  
  console.log(result)
  }catch(err){
      window.alert(err)
  }
  

}

function forgotPass(){
  const email= document.getElementById("forgotpass").value
  firebase.auth().sendPasswordResetEmail(email)
.then(() => {
alert("a password reset email has been sent")
})
.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
console.log(errorMessage)
// ..
});
}