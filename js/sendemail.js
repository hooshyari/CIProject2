function sendMail() {
    var myform = $("contactform");
    emailjs.send("persian_co_gmail_com", "template_DGMpGWof", {
        "from_name": contactform.name.value,
        "from_email": contactform.email.value,
        "message_html": contactform.message_html.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
