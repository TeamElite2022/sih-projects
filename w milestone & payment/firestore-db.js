var uuid = localStorage.getItem('currentUser')

/*function updateHEIProfile(e){
  console.log(uuid)
  try{
    const userDocRef =  firebase.firestore()
    .collection('HEIProfile')
    .doc(uuid).set(
    { 
        category:"HEI",
        HEIname:heiname.value,
        ColCategory:Colcategory.value,
        EYear:year.value,
        code:aicte.value, 
        Portfolio:link.value,
        state:state.value,
        district:district.value,
        pincode:pincode.value,
        Principal:princi.value,
       PhoneNo:phone.value,
       social:social.value 
    },{merge: true});
    console.log("now in firestore")
  }
  catch(err){
    console.log(err)
  }
}*/