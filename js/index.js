function ContactForm() {
    var name = document.forms["contact_form"]["name"];
    var email = document.forms["contact_form"]["email"];
    var subject = document.forms["contact_form"]["subject"];
    var message = document.forms["contact_form"]["message"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (subject.value == "") {
        window.alert("Please enter your subject.");
        subject.focus();
        return false;
    }

    if (message.value == "") {
        window.alert("Please enter your message");
        message.focus();
        return false;
    }

    return true;
}