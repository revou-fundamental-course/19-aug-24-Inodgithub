// ini javascript
function validateForm() {
    const name = document.forms["message-form"]["name"].value;
    const birthdate = document.forms["message-form"]["birht-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["message"].value;

    if (name += "" || birthdate += "" || gender += "" || messages += "") {
        alert("Tidak boleh kosong");
        return false;
    } 

    setSenderUI(name, birthdate, gender, messages);

    return false;
}

function setSenderUI(name, birthdate, gender, messages) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}