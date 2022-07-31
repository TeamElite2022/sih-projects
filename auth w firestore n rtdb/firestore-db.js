const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')
var uuid = localStorage.getItem('currentUser')


function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(uuid)
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


async function getuserInfo(uuid){
    if(uuid){
      const userInfoSnap = await  firebase.firestore()
    .collection('users')
    .doc(uuid)
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

function updateUserProfile(e){
  try{
    const userDocRef =  firebase.firestore()
    .collection('users')
    .doc(uuid).set(
    ({ 
        Firstname:fname.value,
        Lastname:lname.value,
        HEIname:heiname.value,
        EYear:year.value,
        code:aicte.value, 
        link:link.value,
        state:state.value,
        district:district.value,
        pincode:pincode.value    
    }));
    alert("now in firestore")
  }
  catch(err){
    console.log(err)
  }
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
