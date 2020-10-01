(function () {
    emailjs.init("user_Oay0ciCVLZ3t84nUMqX94");
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'milestone2', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}