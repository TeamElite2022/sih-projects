
function paymentProcess() {



    var options = {
        "key": "rzp_test_4uNzVDmmBfRpOH", // Enter the Key ID generated from the Dashboard
         // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        
        "description": "Gift",
        
        "email": mail,
        "contact": number,
        "address": address,
        "image": "logo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            localStorage.setItem('payId', JSON.stringify(response.razorpay_payment_id));
            savetoDB(response)
            console.log(response);
            console.log(response.razorpay_payment_id);
            console.log(response.razorpay_order_id);
            console.log(response.razorpay_signature)
            
        },
        "prefill": {
            "amount": amount*100,
            "name": names,
            "email": mail,
            "contact": number
        },
        "notes": {
            "address": address
        },
        "theme": {
            "color": "#9932CC"
        }
        
    }
    var propay = new Razorpay(options);
    propay.open();
}




