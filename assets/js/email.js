(function () {
    emailjs.init("user_Oay0ciCVLZ3t84nUMqX94");
})();

emailjs.sendForm('gmail', 'milestone2', '#contact-form')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });