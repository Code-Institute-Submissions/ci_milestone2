(function () {
    emailjs.init("user_Oay0ciCVLZ3t84nUMqX94");
})();

// window.onload = function () {
//     document.getElementById('contact-form').addEventListener('submit', function (event) {
//         event.preventDefault();
//         emailjs.sendForm('gmail', 'milestone2', '#contact-form')
//             .then(function (response) {
//                 console.log('SUCCESS!', response.status, response.text);
//             }, function (error) {
//                 console.log('FAILED...', error);
//             });
//     });
// }

// Example starter JavaScript for disabling form submissions if there are invalid fields. Source: Bootstrap.
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            // Hide modal, this option doesn't work: document.getElementById("submit-modal").style.display = "block";
          } else { //send email with emailJS
            event.preventDefault();
            emailjs.sendForm('gmail', 'milestone2', '#contact-form')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();