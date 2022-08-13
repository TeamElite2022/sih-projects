# sih-projects

the AUTH folder is just the authentication using email, phone and google

the realtime folder is a sample of the profile page we are going to create

auth w firestore: it is profile storing in firestore with the authentication

auth w rtdb: it is  profile storing in realtime database with the authentication



AUTH AND PROFILE: IN this folder, there is code for login,register,profile of hei fa and admin where the data of the profile is send to rtdb and firestore and pics and docs go to storage and and their links to rtdb
**********sending the links to firestore is pending********

TILL ADMIN S OR NO: the admin page can accept and decline a user and the status is changed but the problem is the accept or decline page is taking to another page and asking for uid. the same mechanism is to be applied for the apply now page if situation is same, its just that the uid has to be replaced with psid. finally this folder has the post creation page without the + button accepting more folders. Instead i put some text area to take the input. till here there is another problem of user being redirected to their respective pages be it evaluation or dashboards. And one more thing, if the sign up is done through OTP or through Google, (the login details must be sent to the profile database and ask for the rest of the things in the profile creation) (this also includes to take out that email.verified function from the login page as they do otp sign up)
