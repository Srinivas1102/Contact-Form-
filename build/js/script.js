document
.getElementById("myForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    let shown = true

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
           myForm.reset();
            Swal.fire({
icon: 'success',
title: 'Message Sent Successfully'
})

        },
        (error) => {
  
            Swal.fire({
                
icon: 'error',
title: 'Ooops, something went wrong',
text: error.text,
})
        }
    );
});

(function() {
    emailjs.init("YOUR_USER_ID ");
})();
