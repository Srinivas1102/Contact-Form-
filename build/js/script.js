// function numbersOnly(event) {
//     var mobile = document.getElementById('phone').value;
//     var message = document.getElementById('phonerror');

//     return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));
//   }
  
//   const input = document.querySelector('#phone');
//   input.onkeypress = numbersOnly;
  
//   // Prevent pasting (since pasted content might include non-number characters)
//   input.onpaste = event => false;

document
.getElementById("myForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const serviceID = "service_9rntsc2";
    const templateID = "template_prgmijj";
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
    emailjs.init("user_0kgEk9S63fdQtimcYVscY");
})();