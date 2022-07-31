const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')

function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       Firstname:"",
       Lastname:"",
       HEIname:"",
       EYear:"",
       code:"",
       link:"",
       state:"",
       district:"",
       pincode:""
   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('users')
    .doc(userID)
    .get()

   const userInfo = userInfoSnap.data()
   if(userInfo){
       userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.Firstname}</h3>
       `
   }    
    }else{
        userDetails.innerHTML = `
        <h3>please login </h3>
        `
    }


}



async function getuserInfoRealtime(userID){
  console.log(userID)
    if(userID!==null){
      const userdocRef = await  firebase.firestore()
        .collection('users')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        userDetails.innerHTML = `
                        <ul class="collection">
                          <li class="collection-item"><h4>${userInfo.name}</h4></li>
                          <li class="collection-item">${userInfo.email}</li>
                          <li class="collection-item">Firstname - ${userInfo.Firstname}</li>
                          <li class="collection-item">Lastname -${userInfo.Lastname}</li>
                          <li class="collection-item">HEIname -${userInfo.HEIname}</li>
                          <li class="collection-item">Year -${userInfo.EYear}</li>
                          <li class="collection-item">code -${userInfo.code}</li>                          
                          <li class="collection-item">state -${userInfo.state}</li>
                          <li class="collection-item">district -${userInfo.district}</li>
                          <li class="collection-item">pincode -${userInfo.pincode}</li>
                          <li class="collection-item">portfolio - <a href="${userInfo.link}">open</li>
                        </ul>
                      
  
                        <button class="btn waves-effect #fbc02d yellow darken-2 modal-trigger" href="#modal3">edit details</button>   
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["fname"].value = userInfo.Firstname
                        editProfile["lname"].value = userInfo.Lastname
                        editProfile["heiname"].value = userInfo.HEIname
                        editProfile["year"].value = userInfo.EYear
                        editProfile["aicte"].value = userInfo.code
                        editProfile["link"].value = userInfo.link
                        editProfile["state"].value = userInfo.state
                        editProfile["district"].value = userInfo.district
                        editProfile["pincode"].value = userInfo.pincode

                        if(firebase.auth().currentUser.photoURL){
                            document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                        }


                }    
             }
        })


    }else{
        userDetails.innerHTML = `
        <h3>please login</h3>
        `
    }
}


function updateUserProfile(e){
    e.preventDefault()
    const userDocRef =  firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)


    userDocRef.update({        
        email:editProfile["profileEmail"].value,
        Firstname:editProfile["fname"].value,
        Lastname:editProfile["lname"].value,
        HEIname:editProfile["heiname"].value,
        EYear:editProfile["year"].value,
        code:editProfile["aicte"].value, 
        link:editProfile["link"].value,
        state:editProfile["state"].value,
        district:editProfile["district"].value,
        pincode:editProfile["pincode"].value    
    })

    M.Modal.getInstance(myModel[2]).close()
}


function uploadImage(e){
    console.log(e.target.files[0])
    const uid = firebase.auth().currentUser.uid
    const fileRef = firebase.storage().ref().child(`/users/${uid}/profile`)
    const uploadTask =  fileRef.put(e.target.files[0])
    uploadTask.on('state_changed', 
  (snapshot) => {
    
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if(progress=='100') alert('uploaded')
  }, 
  (error) => {
   console.log(error)
  }, 
  () => {
    
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      document.querySelector('#proimg').src = downloadURL
      firebase.auth().currentUser.updateProfile({
        photoURL: downloadURL
      })
    });
  }
);
}



async function allUserDetails(){
  document.getElementById('table').style.display='table'
  const userRef = await firebase.firestore().collection('users').get()  
  userRef.docs.forEach(doc=>{
           const info =   doc.data()
           document.getElementById('tbody').innerHTML += `
           <tr>
            <td>${info.email}</td>
            <td>${info.Firstname}</td>
            <td>${info.Lastname}</td>
            <td>${info.HEIname}</td>
            <td>${info.EYear}</td>
            <td>${info.code}</td>
            <td><a href="${info.link}">view</td>
            <td>${info.state}</td>
            <td>${info.district}</td>
            <td>${info.pincode}</td>
            
          </tr>
           `
    })
 
  
  



}
