const nome = document.getElementById('nome')
const email = document.getElementById('email')
const submit = document.getElementById('submit')

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('hi')

    Email.send({
        SecureToken: "609bc9f4-a55a-4656-a521-60c868c01656",
        To: 'jangadafest@gmail.com',
        From: "jangadafest@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
})
