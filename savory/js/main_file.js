document.getElementById('date').innerHTML += Date();
document.getElementById('datetext').style.color = "red";

function validate() {

    var name = document.forms['myform']['email'].value;
    if (name == "" || name == null) {
        alert("Email field can't be Empty");
        return false;
    }

    var email = document.forms['myform']['subject'].value;
    if (email == "" || email == null) {
        alert("Subject field can't be Empty");
        return false;
    }


    var phone = document.forms['myform']['textarea'].value;
    if (phone == "" || phone == null) {
        alert("Message Body field can't be Empty");
        return false;
    }

}