function paymentProcess() {
var am=document.getElementById('amount')

var amo=am.value
var amou=parseInt(amo)

    var options = {
        "key": "rzp_test_yMs4HtGCIf5OZl", // Enter the Key ID generated from the Dashboard
        "amount":amou*100,// Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "Devotional Study",
        "description": "Tutorial",
        "image": "logo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
           
        },
        "prefill": {
            
            "name": names.value,
            "email": mail.value,
            "contact": number.value
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#9932CC"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}

var amount=document.getElementById('amount')
async function savetoDB(response){
    fire.collection("FaFund").doc("User1").set({
        Amount:amount.value, 
      response 
      },{merge:true})
      .then(() => {
      alert("saved to database");
      //console.log(idn)
      })
      .catch((error) => {
      console.error(error);
      });
}