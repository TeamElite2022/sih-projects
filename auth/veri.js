


async function signup(e){
    e.preventDefault()
    const email  = document.querySelector('#signupEmail')
    const password  = document.querySelector('#signupPassword')
    
    try{
    const res = await firebase.auth()
      const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      await result.user.updateProfile({
        displayName: "User"
      })
       await result.user.sendEmailVerification()
       alert("Email sent");
       window.alert(result)
    }catch(err){
        window.alert(err)
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
    }catch(err){
        window.alert(err)        
    }
    email.value = ""
    password.value = ""
}

function logout(){
    firebase.auth().signOut()
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
