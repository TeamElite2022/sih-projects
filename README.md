# sih-projects

the AUTH folder is just the authentication using email, phone and google

the realtime folder is a sample of the profile page we are going to create

auth w firestore: it is profile storing in firestore with the authentication

auth w rtdb: it is  profile storing in realtime database with the authentication



AUTH AND PROFILE: IN this folder, there is code for login,register,profile of hei fa and admin where the data of the profile is send to rtdb and firestore and pics and docs go to storage and and their links to rtdb
**********sending the links to firestore is pending********

TILL ADMIN S OR NO: the admin page can accept and decline a user and the status is changed but the problem is the accept or decline page is taking to another page and asking for uid. the same mechanism is to be applied for the apply now page if situation is same, its just that the uid has to be replaced with psid. finally this folder has the post creation page without the + button accepting more folders. Instead i put some text area to take the input. till here there is another problem of user being redirected to their respective pages be it evaluation or dashboards. And one more thing, if the sign up is done through OTP or through Google, (the login details must be sent to the profile database and ask for the rest of the things in the profile creation) (this also includes to take out that email.verified function from the login page as they do otp sign up)

W MILESTONE & PAYMENT: In this code,first and foremost thing is the path in the database is dummy i.e that is just a path set by me but the user continuity is missing.The rest is, the proposal of hei sent to fa is either accepted or rejected by fa and the reason is also given. Accepted hei go into acceptedhei.html and in that there is a see status button where they will be redirected to a milestone page. Same with hei, the accepted projects go into acceptedpro.html and a see status button redirecting to milestone page. If the status is to be verified or rejected the will be in ongngpro.html where a see status button redirects them to a status page where their status will be known, a reason is also known if rejected. In the milestone page, there a navigation bar to navigate between milestones and invoice pages. there is also a google meet option in milestone page. In invoice page, there r input boxes and document upload buttons. the process a payment button in milestone page redirects user to a payment page where he has to enter his details and amount and send it to the admin. the payment is stored in the database. in the invoice section the inputs taken as number are summed up and subtracted from the amount given in payment page, the difference is stored in db and is displayed
        THE LEFTOVER FUNCTIONALITIES: While checking the milestone, chech whethere  proposal time deliv & now deliv match. Opening milestones only after                     payment.Closing milestones only after FA checks deliverables. Disable check option for HEI.If milestone not completed in given duration, then ask         for a reason and store in db for further use.In milestones page, put upload deliverables button. In invoice, the document upload functionality. State &          district dropdowns,eligibility + button.Register page, when phoneno is given what happens to profile. Inorder to categorize proposal into accepted,             awarded..... need to update statuses. how will the payment be done from admin to hei. ranking and feedback part. bank details page
